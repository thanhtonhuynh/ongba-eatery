"use server";

import { renderCareerApplicationEmail } from "@/components/emails/career-application-email";
import { getMailTransporter, MAIL_FROM } from "@/lib/mailer";
import {
  careerApplicationSchema,
  MAX_FILE_MB,
  MAX_FILES,
  type CareerApplicationPayload,
  type CareerApplicationState,
} from "./types";

// Applications land in the hiring inbox.
const TO_EMAIL = "ongba.hiring@gmail.com";

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

  const transporter = getMailTransporter();
  if (!transporter) {
    return {
      status: "error",
      message: "Applications are temporarily unavailable. Please email ongba.hiring@gmail.com.",
    };
  }

  const { html, text } = await renderCareerApplicationEmail({
    firstName,
    lastName,
    email,
    phone,
    eligibleCanada,
    visaExpiry,
    startDate,
    hasExperience,
    coverNote,
    attachmentNames: attachments.map((file) => file.filename),
  });

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
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

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your application. Please try again or email us at ongba.hiring@gmail.com.",
    };
  }
}
