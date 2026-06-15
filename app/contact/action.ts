"use server";

import { Resend } from "resend";
import { reservationSchema, type ReservationInput, type ReservationState } from "./types";

// Sends to the restaurant inbox. Display name kept ASCII to avoid header
// encoding edge cases; the body carries full diacritics.
const TO_EMAIL = "restaurant@ongbagroup.com";
const FROM_EMAIL = process.env.RESERVATION_FROM_EMAIL ?? "Ong Ba Eatery <reservations@ongbagroup.com>";

export async function submitReservation(input: ReservationInput): Promise<ReservationState> {
  // Honeypot: real guests never fill this hidden field.
  if (input.company?.trim()) {
    return { status: "success" };
  }

  // Re-validate with the shared schema; never trust the client.
  const parsed = reservationSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  const { inquiryType, fullName, email, phone, date, eventDetail, specialRequest } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: "Reservations are temporarily unavailable. Please call us at +1 (604) 554-1166.",
    };
  }

  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Request", inquiryType],
    ["Name", fullName],
    ["Email", email],
    ["Phone", phone],
    ["Preferred date", date],
    ["Event details", eventDetail],
    ["Special requests", specialRequest || "None"],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New reservation request</h2>
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
      subject: `New reservation request (${inquiryType}) from ${fullName}`,
      text,
      html,
    });

    if (error) {
      return {
        status: "error",
        message: "Something went wrong sending your request. Please try again or call us.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your request. Please try again or call us.",
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
