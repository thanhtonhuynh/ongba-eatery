import { z } from "zod";

// Shared between the server action and the client form.
export const YES_NO = ["Yes", "No"] as const;

// Attachment limits, shared between client and server validation.
export const MAX_FILES = 3;
export const MAX_FILE_MB = 4;
export const ACCEPTED_FILE_TYPES = ".pdf,.doc,.docx";

export const careerApplicationSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name."),
  lastName: z.string().trim().min(1, "Please enter your last name."),
  phone: z.string().trim().min(1, "Please enter a phone number."),
  email: z.email("Please enter a valid email address."),
  eligibleCanada: z.enum(YES_NO, { error: "Please let us know if you can work in Canada." }),
  visaExpiry: z.string().trim().optional(),
  startDate: z.string().trim().min(1, "Please choose your earliest start date."),
  hasExperience: z.enum(YES_NO, { error: "Please let us know about your experience." }),
  coverNote: z.string().trim().min(1, "Please tell us a little about yourself."),
  // Honeypot: hidden from real applicants, must stay empty.
  company: z.string().optional(),
});

export type CareerApplicationInput = z.infer<typeof careerApplicationSchema>;

// Files are read to base64 on the client and re-checked on the server.
export type Attachment = { filename: string; content: string };

export type CareerApplicationPayload = CareerApplicationInput & {
  attachments: Attachment[];
};

export type CareerApplicationState = {
  status: "idle" | "success" | "error";
  message?: string;
};
