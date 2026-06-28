"use server";

import { renderReservationRequestEmail } from "@/components/emails/reservation-request-email";
import { getMailTransporter, MAIL_FROM } from "@/lib/mailer";
import { reservationSchema, type ReservationInput, type ReservationState } from "./types";

// Reservation requests land in the restaurant inbox.
const TO_EMAIL = "restaurant@ongbagroup.com";

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

  const transporter = getMailTransporter();
  if (!transporter) {
    return {
      status: "error",
      message: "Reservations are temporarily unavailable. Please call us at +1 (604) 554-1166.",
    };
  }

  const { html, text } = await renderReservationRequestEmail({
    inquiryType,
    fullName,
    email,
    phone,
    date,
    eventDetail,
    specialRequest,
  });

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New reservation request (${inquiryType}) from ${fullName}`,
      text,
      html,
    });

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your request. Please try again or call us at +1 (604) 554-1166.",
    };
  }
}
