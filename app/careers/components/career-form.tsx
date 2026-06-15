"use client";

import { FieldError, RequiredMark, TextAreaField, TextField } from "@/components/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { submitApplication } from "../action";
import {
  ACCEPTED_FILE_TYPES,
  careerApplicationSchema,
  MAX_FILE_MB,
  MAX_FILES,
  YES_NO,
  type CareerApplicationInput,
  type CareerApplicationState,
} from "../types";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CareerForm() {
  const reduce = useReducedMotion();
  const [server, setServer] = useState<CareerApplicationState>({ status: "idle" });
  const [fileError, setFileError] = useState<string>();
  const [files, setFiles] = useState<File[]>([]);
  // Bumping the key remounts (clears) the file input after a successful submit.
  const [fileKey, setFileKey] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerApplicationInput>({
    resolver: zodResolver(careerApplicationSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      visaExpiry: "",
      startDate: "",
      coverNote: "",
      company: "",
    },
  });

  const onSubmit = async (data: CareerApplicationInput) => {
    setFileError(undefined);

    if (files.length > MAX_FILES) {
      setFileError(`Please attach at most ${MAX_FILES} files.`);
      return;
    }
    if (files.some((file) => file.size > MAX_FILE_MB * 1024 * 1024)) {
      setFileError(`Each file must be under ${MAX_FILE_MB} MB.`);
      return;
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({ filename: file.name, content: await fileToBase64(file) })),
    );

    const result = await submitApplication({ ...data, attachments });
    setServer(result);
    if (result.status === "success") {
      reset();
      setFiles([]);
      setFileKey((key) => key + 1);
    }
  };

  if (server.status === "success") {
    return (
      <motion.div
        className="border-gold/20 bg-wine/20 flex flex-col items-start gap-4 rounded-2xl border p-8 sm:p-10"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={1.5} className="text-gold size-9" />
        <h3 className="font-kasepi-sans text-gold text-2xl tracking-wide sm:text-3xl">
          Application received
        </h3>
        <p className="text-gold/85 max-w-md leading-relaxed">
          Thank you for your interest in joining us. We read every application and will be in touch
          if there is a fit.
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
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {/* Honeypot, hidden from real applicants */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-px w-px opacity-0"
        {...register("company")}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          label="First name"
          autoComplete="given-name"
          required
          registration={register("firstName")}
          error={errors.firstName?.message}
        />
        <TextField
          label="Last name"
          autoComplete="family-name"
          required
          registration={register("lastName")}
          error={errors.lastName?.message}
        />
        <TextField
          label="Phone number"
          type="tel"
          autoComplete="tel"
          required
          registration={register("phone")}
          error={errors.phone?.message}
        />
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          required
          registration={register("email")}
          error={errors.email?.message}
        />
      </div>

      <RadioField
        legend="Are you legally entitled to work in Canada?"
        registration={register("eligibleCanada")}
        error={errors.eligibleCanada?.message}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          label="Visa expiration date (if applicable)"
          type="date"
          className="scheme-dark"
          registration={register("visaExpiry")}
          error={errors.visaExpiry?.message}
        />
        <TextField
          label="Earliest start date"
          type="date"
          required
          className="scheme-dark"
          registration={register("startDate")}
          error={errors.startDate?.message}
        />
      </div>

      <RadioField
        legend="Do you have any experience in this position?"
        registration={register("hasExperience")}
        error={errors.hasExperience?.message}
      />

      <TextAreaField
        label="Why would you be a great addition to the team?"
        required
        placeholder="A few words about your experience and what draws you to Ông Bà."
        registration={register("coverNote")}
        error={errors.coverNote?.message}
      />

      {/* Attachments are handled outside react-hook-form and read to base64 on submit. */}
      <div className="flex flex-col gap-2">
        <label htmlFor="attachments" className="text-gold/80 text-sm tracking-wide">
          Attachments
          <span className="text-gold/45"> (optional)</span>
        </label>
        <input
          key={fileKey}
          id="attachments"
          type="file"
          multiple
          accept={ACCEPTED_FILE_TYPES}
          onChange={(event) => setFiles(event.target.files ? Array.from(event.target.files) : [])}
          className="text-gold/85 border-gold/25 bg-wine/30 file:text-gold file:border-gold/30 file:bg-light-gold/10 hover:file:bg-light-gold/20 w-full cursor-pointer rounded-xl border px-4 py-3 text-sm transition-colors file:mr-4 file:cursor-pointer file:rounded-full file:border file:px-4 file:py-1.5"
        />
        <p className="text-gold/55 text-sm">
          Resume or cover letter (PDF or Word), up to {MAX_FILE_MB} MB each, {MAX_FILES} files max.
        </p>
        <FieldError>{fileError}</FieldError>
      </div>

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
            {isSubmitting ? "Sending application..." : "Send application"}
          </Button>
        </div>
        <p className="text-gold/55 text-sm">We reply by email if there is a fit.</p>
      </div>
    </motion.form>
  );
}

function RadioField({
  legend,
  registration,
  error,
}: {
  legend: string;
  registration: UseFormRegisterReturn;
  error?: string;
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-gold/80 mb-3 text-sm tracking-wide">
        {legend}
        <RequiredMark />
      </legend>
      <div className="grid max-w-xs grid-cols-2 gap-3">
        {YES_NO.map((opt) => (
          <label key={opt} className="block cursor-pointer">
            <input type="radio" value={opt} className="peer sr-only" {...registration} />
            <div className="border-gold/25 bg-wine/30 text-gold/85 hover:border-gold/50 peer-checked:border-gold peer-checked:bg-light-gold/10 peer-checked:text-gold peer-focus-visible:ring-gold/40 peer-checked:[&_.res-ring]:border-gold flex h-full items-center gap-3 rounded-xl border px-4 py-3 text-sm tracking-wide transition-colors peer-focus-visible:ring-2 peer-checked:[&_.res-dot]:opacity-100">
              <span className="res-ring border-gold/40 flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors">
                <span className="res-dot bg-gold size-2 rounded-full opacity-0 transition-opacity" />
              </span>
              <span>{opt}</span>
            </div>
          </label>
        ))}
      </div>
      <FieldError>{error}</FieldError>
    </fieldset>
  );
}

async function fileToBase64(file: File): Promise<string> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}
