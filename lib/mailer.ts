import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

// All form emails are sent from the Gmail account. Display name kept ASCII to
// avoid header encoding edge cases; the message bodies carry full diacritics.
export const MAIL_FROM = `Ong Ba Eatery <${GMAIL_USER ?? "ongbavietnamese@gmail.com"}>`;

let transporter: nodemailer.Transporter | null = null;

/** Gmail SMTP transporter, or null when credentials are not configured. */
export function getMailTransporter() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return null;
  transporter ??= nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });
  return transporter;
}
