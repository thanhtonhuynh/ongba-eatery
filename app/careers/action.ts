"use server";

import { Resend } from "resend";
import {
  careerApplicationSchema,
  MAX_FILES,
  MAX_FILE_MB,
  type CareerApplicationPayload,
  type CareerApplicationState,
} from "./types";

// Applications land in the hiring inbox. Display name kept ASCII to avoid
// header encoding edge cases; the body carries full diacritics.
const TO_EMAIL = "ongba.hiring@gmail.com";
const FROM_EMAIL = process.env.CAREERS_FROM_EMAIL ?? "Ong Ba Eatery <ongbavietnamese@gmail.com>";

const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;

export async function submitApplication(
  input: CareerApplicationPayload,
): Promise<CareerApplicationState> {
  // Honeypot: real applicants never fill this hidden field.
  if (input.company?.trim()) {
    return { status: "success" };
  }

  // Re-validate with the shared schema; never trust the client.
  const parsed = careerApplicationSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  const attachments = input.attachments ?? [];
  if (attachments.length > MAX_FILES) {
    return { status: "error", message: `Please attach at most ${MAX_FILES} files.` };
  }
  for (const file of attachments) {
    if (Buffer.from(file.content, "base64").byteLength > MAX_FILE_BYTES) {
      return { status: "error", message: `Each file must be under ${MAX_FILE_MB} MB.` };
    }
  }

  const {
    firstName,
    lastName,
    phone,
    email,
    eligibleCanada,
    visaExpiry,
    startDate,
    hasExperience,
    coverNote,
  } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: "Applications are temporarily unavailable. Please email ongba.hiring@gmail.com.",
    };
  }

  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Name", `${firstName} ${lastName}`],
    ["Email", email],
    ["Phone", phone],
    ["Eligible to work in Canada", eligibleCanada],
    ["Visa expiration", visaExpiry || "Not provided"],
    ["Earliest start date", startDate],
    ["Experience in this position", hasExperience],
    ["About them", coverNote],
    ["Attachments", attachments.length ? attachments.map((a) => a.filename).join(", ") : "None"],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New job application</h2>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="padding: 6px 16px 6px 0; vertical-align: top; font-weight: 600; white-space: nowrap;">${label}</td>
                 <td style="padding: 6px 0; vertical-align: top; white-space: pre-wrap;">${escapeHtml(value)}</td>
               </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New job application from ${firstName} ${lastName}`,
      text,
      html,
      attachments: attachments.map((file) => ({
        filename: file.filename,
        content: Buffer.from(file.content, "base64"),
      })),
    });

    if (error) {
      return {
        status: "error",
        message: "Something went wrong sending your application. Please try again or email us.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your application. Please try again or email us.",
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
