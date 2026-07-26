"use client";
import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

export function LeadForm({
  compact = false,
  source = "contact",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(formData: FormData) {
    setStatus("sending");
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
        source,
      }),
    });
    setStatus(response.ok ? "sent" : "error");
  }
  if (status === "sent")
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-sm text-emerald-100">
        Received. A strategist will reply within one business day.
      </div>
    );
  return (
    <form action={submit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your name"
          className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm transition outline-none placeholder:text-white/40 focus:border-violet-300"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Work email"
          className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm transition outline-none placeholder:text-white/40 focus:border-violet-300"
        />
      </div>
      {!compact && (
        <input
          name="company"
          placeholder="Company or team"
          className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm transition outline-none placeholder:text-white/40 focus:border-violet-300"
        />
      )}
      <textarea
        required
        name="message"
        minLength={12}
        placeholder={
          compact
            ? "What are you trying to change?"
            : "Tell us what is changing, and where you want to get to."
        }
        className="min-h-28 rounded-xl border border-white/15 bg-white/5 p-4 text-sm transition outline-none placeholder:text-white/40 focus:border-violet-300"
      />
      <button
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-[#11131c] transition hover:bg-violet-100 disabled:opacity-60"
      >
        {status === "sending" ? (
          <LoaderCircle className="size-4 animate-spin" />
        ) : (
          <>
            Send the brief <ArrowRight className="size-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-xs text-rose-300">
          Something went wrong. Please try again or email hello@arcture.studio.
        </p>
      )}
    </form>
  );
}
