import { render } from "@react-email/components";
import { EmailDetail, OngbaEmailShell } from "./ongba-email-shell";

export type ReservationEmailProps = {
  inquiryType: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  eventDetail: string;
  specialRequest?: string;
};

export function ReservationRequestEmail(props: ReservationEmailProps) {
  return (
    <OngbaEmailShell
      preview={`New reservation request from ${props.fullName}`}
      heading="New reservation request"
      intro="A guest just submitted the gathering form on the website."
      replyToName={props.fullName}
    >
      <EmailDetail label="Request" value={props.inquiryType} />
      <EmailDetail label="Name" value={props.fullName} />
      <EmailDetail label="Email" value={props.email} />
      <EmailDetail label="Phone" value={props.phone} />
      <EmailDetail label="Preferred date" value={props.date} />
      <EmailDetail label="Event details" value={props.eventDetail} />
      <EmailDetail label="Special requests" value={props.specialRequest || "None"} />
    </OngbaEmailShell>
  );
}

export async function renderReservationRequestEmail(props: ReservationEmailProps) {
  const element = <ReservationRequestEmail {...props} />;
  const [html, text] = await Promise.all([render(element), render(element, { plainText: true })]);
  return { html, text };
}

// Sample data for the react-email preview server (pnpm email).
ReservationRequestEmail.PreviewProps = {
  inquiryType: "Private dining room (up to 20 guests)",
  fullName: "Mai Nguyen",
  email: "mai.nguyen@example.com",
  phone: "+1 (604) 555-0148",
  date: "2026-08-15",
  eventDetail: "Birthday dinner for 14, around 7pm. Hoping for the back area.",
  specialRequest: "One guest is vegetarian. A high chair if possible.",
} satisfies ReservationEmailProps;

export default ReservationRequestEmail;
