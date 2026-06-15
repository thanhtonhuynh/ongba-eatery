import { z } from "zod";

// Shared between the server action and the client form.
export const INQUIRY_OPTIONS = [
  "Large party (8+ guests)",
  "Private event",
  "Private dining room (up to 20 guests)",
  "Catering",
] as const;

export const reservationSchema = z.object({
  inquiryType: z.enum(INQUIRY_OPTIONS, { error: "Please choose what you'd like to plan." }),
  fullName: z.string().trim().min(1, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().min(1, "Please enter a phone number."),
  date: z.string().trim().min(1, "Please choose a preferred date."),
  eventDetail: z.string().trim().min(1, "Please share a few details about your event."),
  specialRequest: z.string().trim().optional(),
  // Honeypot: hidden from real guests, must stay empty.
  company: z.string().optional(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export type ReservationState = {
  status: "idle" | "success" | "error";
  message?: string;
};
