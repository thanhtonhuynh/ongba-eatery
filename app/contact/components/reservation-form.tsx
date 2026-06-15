"use client";

import { FieldError, RequiredMark, TextAreaField, TextField } from "@/components/form";
import { Button } from "@/components/ui/button";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitReservation } from "../action";
import {
  INQUIRY_OPTIONS,
  reservationSchema,
  type ReservationInput,
  type ReservationState,
} from "../types";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ReservationForm() {
  const reduce = useReducedMotion();
  const [server, setServer] = useState<ReservationState>({ status: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationInput>({
    resolver: standardSchemaResolver(reservationSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      date: "",
      eventDetail: "",
      specialRequest: "",
      company: "",
    },
  });

  const onSubmit = async (data: ReservationInput) => {
    const result = await submitReservation(data);
    setServer(result);
    if (result.status === "success") reset();
  };

  if (server.status === "success") {
    return (
      <motion.div
        className="border-gold/20 bg-wine/20 flex flex-col items-start gap-4 rounded-2xl border p-8 sm:p-10"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <HugeiconsIcon
          icon={CheckmarkCircle02Icon}
          strokeWidth={1.5}
          className="text-gold size-9"
        />
        <h3 className="font-kasepi-sans text-gold text-2xl tracking-wide sm:text-3xl">
          Request received
        </h3>
        <p className="text-gold/85 max-w-md leading-relaxed">
          Thank you. Our team will be in touch shortly to confirm the details. For anything urgent,
          call us at{" "}
          <a href="tel:+16045541166" className="hover:text-light-gold underline underline-offset-4">
            +1 (604) 554-1166
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {/* Honeypot, hidden from real guests */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-px w-px opacity-0"
        {...register("company")}
      />

      {/* Inquiry type */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-gold/80 mb-3 text-sm tracking-wide">
          What are you planning?
          <RequiredMark />
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {INQUIRY_OPTIONS.map((opt) => (
            <label key={opt} className="block cursor-pointer">
              <input
                type="radio"
                value={opt}
                className="peer sr-only"
                {...register("inquiryType")}
              />
              <div className="border-gold/25 bg-wine/30 text-gold/85 hover:border-gold/50 peer-checked:border-gold peer-checked:bg-light-gold/10 peer-checked:text-gold peer-focus-visible:ring-gold/40 peer-checked:[&_.res-ring]:border-gold flex h-full items-center gap-3 rounded-xl border px-4 py-3.5 text-sm tracking-wide transition-colors peer-focus-visible:ring-2 peer-checked:[&_.res-dot]:opacity-100">
                <span className="res-ring border-gold/40 flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors">
                  <span className="res-dot bg-gold size-2 rounded-full opacity-0 transition-opacity" />
                </span>
                <span>{opt}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.inquiryType && <FieldError>{errors.inquiryType.message}</FieldError>}
      </fieldset>

      {/* Contact details */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          label="Full name"
          autoComplete="name"
          required
          registration={register("fullName")}
          error={errors.fullName?.message}
        />
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          required
          registration={register("email")}
          error={errors.email?.message}
        />
        <TextField
          label="Phone"
          type="tel"
          autoComplete="tel"
          required
          registration={register("phone")}
          error={errors.phone?.message}
        />
        <TextField
          label="Preferred date"
          type="date"
          required
          className="scheme-dark"
          registration={register("date")}
          error={errors.date?.message}
        />
      </div>

      <TextAreaField
        label="Event details"
        required
        placeholder="How many guests, the occasion, and your preferred time."
        registration={register("eventDetail")}
        error={errors.eventDetail?.message}
      />
      <TextAreaField
        label="Special requests"
        optional
        placeholder="Dietary needs, seating, or anything else we should know."
        registration={register("specialRequest")}
      />

      {server.status === "error" && server.message && (
        <p role="alert" className="text-destructive text-sm">
          {server.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <div className="border-gold inline-flex rounded-full border p-px">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="font-bricolage-grotesque rounded-full tracking-wide uppercase shadow-lg"
          >
            {isSubmitting ? "Sending request..." : "Send request"}
          </Button>
        </div>
        <p className="text-gold/55 text-sm">We reply by email, usually within a day.</p>
      </div>
    </motion.form>
  );
}
