import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

// Email images must be loaded from an absolute, public URL (Gmail strips
// data-URIs and cannot resolve relative paths). On Vercel this falls back to
// the production deployment URL; set NEXT_PUBLIC_SITE_URL for a custom domain.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Gold-on-wine palette, inlined for email clients (no external CSS/fonts).
const BG = "#2c0404"; // dark-wine (globals.css)
const CARD = "#430000"; // wine (globals.css)
const GOLD = "#e6c98c";
const GOLD_SOFT = "#caa979";
const CREAM = "#f1e8d8";
const MUTED = "#a78d72";
const LINE = "#4d3134";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function OngbaEmailShell({
  preview,
  heading,
  intro,
  replyToName,
  children,
}: {
  preview: string;
  heading: string;
  intro?: string;
  /** Whoever the reply should reach (the form submitter). */
  replyToName?: string;
  children: ReactNode;
}) {
  const replyTarget = replyToName?.trim() ? replyToName.trim() : "them";

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={{ backgroundColor: BG, margin: 0, padding: 0, fontFamily: SANS }}>
        <Container style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 16px" }}>
          <Section style={{ textAlign: "center", marginBottom: "28px" }}>
            <Img
              src={`${SITE_URL}/logo-gold.png`}
              alt="Ông Bà Eatery"
              width={220}
              height={300}
              style={{ margin: "0 auto", display: "block" }}
            />
          </Section>

          <Section
            style={{
              backgroundColor: CARD,
              borderRadius: "16px",
              border: `1px solid ${LINE}`,
              padding: "32px 28px",
            }}
          >
            <Heading
              as="h1"
              style={{
                margin: 0,
                color: GOLD,
                fontSize: "22px",
                lineHeight: "1.3",
                fontWeight: 700,
                letterSpacing: "-0.2px",
              }}
            >
              {heading}
            </Heading>
            {intro && (
              <Text
                style={{ margin: "10px 0 0", color: MUTED, fontSize: "14px", lineHeight: "22px" }}
              >
                {intro}
              </Text>
            )}
            <Section style={{ marginTop: "8px" }}>{children}</Section>
          </Section>

          <Section style={{ marginTop: "20px" }}>
            <Text
              style={{
                margin: 0,
                padding: "12px 16px",
                backgroundColor: BG,
                border: `1px solid ${LINE}`,
                borderRadius: "10px",
                color: GOLD_SOFT,
                fontSize: "13px",
                lineHeight: "20px",
                textAlign: "center",
              }}
            >
              Reply to this email and your message goes straight to {replyTarget}.
            </Text>
          </Section>

          <Section style={{ textAlign: "center", marginTop: "28px" }}>
            <Text style={{ margin: 0, color: MUTED, fontSize: "12px", lineHeight: "20px" }}>
              Ông Bà Vietnamese Eatery, Coquitlam BC
            </Text>
            <Text style={{ margin: "6px 0 0", color: MUTED, fontSize: "11px", lineHeight: "18px" }}>
              © {new Date().getFullYear()} Ông Bà Eatery
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/** Label + value row, hairline-separated, matching the site's ledger style. */
export function EmailDetail({ label, value }: { label: string; value: ReactNode }) {
  return (
    <Section style={{ borderTop: `1px solid ${LINE}`, padding: "12px 0" }}>
      <Text
        style={{
          margin: 0,
          color: GOLD_SOFT,
          fontSize: "11px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          margin: "4px 0 0",
          color: CREAM,
          fontSize: "15px",
          lineHeight: "23px",
          whiteSpace: "pre-wrap",
        }}
      >
        {value}
      </Text>
    </Section>
  );
}
