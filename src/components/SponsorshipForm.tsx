"use client";

import { useState, type FormEvent } from "react";
import {
  formSubmitEndpoint,
  sponsorshipLevels,
  type SponsorshipLevelId,
} from "@/lib/sponsorship";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full border border-white/15 bg-arena px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold/60 focus:ring-1 focus:ring-gold/40";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-white/55";

export function SponsorshipForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [level, setLevel] = useState<SponsorshipLevelId | "">("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (String(data.get("company_website") || "").trim()) {
      setStatus("success");
      return;
    }

    const selectedLevel = sponsorshipLevels.find(
      (item) => item.id === data.get("support_level"),
    );

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      _subject: `IBHA 2027 Sponsorship — ${selectedLevel?.tier ?? "Inquiry"}`,
      _template: "table",
      _captcha: "false",
      name: String(data.get("name") || "").trim(),
      business: String(data.get("business") || "").trim(),
      mailing_address: String(data.get("mailing_address") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      support_level: selectedLevel
        ? `${selectedLevel.tier} – ${selectedLevel.name} (${selectedLevel.amount})`
        : String(data.get("support_level") || ""),
      message: String(data.get("message") || "").trim(),
      agreed_to_terms: data.get("agreed") === "on" ? "Yes" : "No",
    };

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = (await response.json()) as { success?: string | boolean };
      if (!result.success) {
        throw new Error("Submission was not accepted");
      }

      form.reset();
      setLevel("");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your form. Please try again, or email nate@indianaballhockey.com directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-gold/40 bg-gold/10 px-6 py-10 text-center sm:px-10"
        role="status"
      >
        <p className="eyebrow eyebrow-center mb-3 text-gold">Submitted</p>
        <h3 className="font-display text-2xl font-bold uppercase">
          Thanks for Partnering With IBHA
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
          We received your sponsorship interest and will follow up soon with next
          steps, including payment details.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold underline-offset-4 hover:underline"
          onClick={() => setStatus("idle")}
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="sponsor-name" className={labelClass}>
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="sponsor-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Full name"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="sponsor-business" className={labelClass}>
            Business / Organization
          </label>
          <input
            id="sponsor-business"
            name="business"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Optional"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="sponsor-address" className={labelClass}>
            Mailing Address <span className="text-gold">*</span>
          </label>
          <textarea
            id="sponsor-address"
            name="mailing_address"
            required
            rows={2}
            className={cn(fieldClass, "resize-y")}
            placeholder="Street, city, state, ZIP"
          />
        </div>

        <div>
          <label htmlFor="sponsor-phone" className={labelClass}>
            Phone <span className="text-gold">*</span>
          </label>
          <input
            id="sponsor-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
            placeholder="(317) 555-0100"
          />
        </div>

        <div>
          <label htmlFor="sponsor-email" className={labelClass}>
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="sponsor-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@business.com"
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>
          Support Level <span className="text-gold">*</span>
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {sponsorshipLevels.map((item) => {
            const selected = level === item.id;
            return (
              <label
                key={item.id}
                className={cn(
                  "cursor-pointer border px-3 py-3 transition-colors",
                  selected
                    ? "border-gold bg-gold/15"
                    : "border-white/15 bg-arena hover:border-white/30",
                )}
              >
                <input
                  type="radio"
                  name="support_level"
                  value={item.id}
                  required
                  className="sr-only"
                  checked={selected}
                  onChange={() => setLevel(item.id)}
                />
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  {item.tier}
                </span>
                <span className="mt-1 block font-display text-sm font-bold uppercase">
                  {item.name}
                </span>
                <span className="mt-1 block text-sm text-white/70">
                  {item.amount}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="sponsor-message" className={labelClass}>
          Notes
        </label>
        <textarea
          id="sponsor-message"
          name="message"
          rows={4}
          className={cn(fieldClass, "resize-y")}
          placeholder="Anything we should know about logo files, preferred recognition, or timing?"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-white/70">
        <input
          type="checkbox"
          name="agreed"
          required
          className="mt-1 h-4 w-4 accent-gold"
        />
        <span>
          I am interested in sponsoring IBHA at the level selected above and
          understand IBHA will follow up with payment instructions.
        </span>
      </label>

      {status === "error" && (
        <p className="border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-sm bg-gold px-8 py-4 text-base font-semibold uppercase tracking-wide text-navy shadow-lg shadow-gold/25 transition-all duration-200 hover:-translate-y-1 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-arena disabled:translate-y-0 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit Sponsorship Form"}
      </button>
    </form>
  );
}
