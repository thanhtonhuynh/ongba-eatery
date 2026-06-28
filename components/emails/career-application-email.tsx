import { render } from "@react-email/components";
import { EmailDetail, OngbaEmailShell } from "./ongba-email-shell";

export type CareerEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eligibleCanada: string;
  visaExpiry?: string;
  startDate: string;
  hasExperience: string;
  coverNote: string;
  attachmentNames: string[];
};

export function CareerApplicationEmail(props: CareerEmailProps) {
  return (
    <OngbaEmailShell
      preview={`New job application from ${props.firstName} ${props.lastName}`}
      heading="New job application"
      intro="Someone just applied through the careers page."
      replyToName={`${props.firstName} ${props.lastName}`}
    >
      <EmailDetail label="Name" value={`${props.firstName} ${props.lastName}`} />
      <EmailDetail label="Email" value={props.email} />
      <EmailDetail label="Phone" value={props.phone} />
      <EmailDetail label="Eligible to work in Canada" value={props.eligibleCanada} />
      <EmailDetail label="Visa expiration" value={props.visaExpiry || "Not provided"} />
      <EmailDetail label="Earliest start date" value={props.startDate} />
      <EmailDetail label="Experience in this position" value={props.hasExperience} />
      <EmailDetail label="About them" value={props.coverNote} />
      <EmailDetail
        label="Attachments"
        value={props.attachmentNames.length ? props.attachmentNames.join(", ") : "None"}
      />
    </OngbaEmailShell>
  );
}

export async function renderCareerApplicationEmail(props: CareerEmailProps) {
  const element = <CareerApplicationEmail {...props} />;
  const [html, text] = await Promise.all([render(element), render(element, { plainText: true })]);
  return { html, text };
}

// Sample data for the react-email preview server (pnpm email).
CareerApplicationEmail.PreviewProps = {
  firstName: "Linh",
  lastName: "Tran",
  email: "linh.tran@example.com",
  phone: "+1 (604) 555-0162",
  eligibleCanada: "Yes",
  visaExpiry: "",
  startDate: "2026-07-01",
  hasExperience: "Yes",
  coverNote:
    "Three years serving at a Vietnamese restaurant downtown. I love the food and the family feel of the team.",
  attachmentNames: ["linh-tran-resume.pdf", "linh-tran-cover-letter.pdf"],
} satisfies CareerEmailProps;

export default CareerApplicationEmail;
