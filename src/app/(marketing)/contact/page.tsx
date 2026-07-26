import type { Metadata } from "next";
import { LeadForm } from "@/components/marketing/lead-form";
export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell TBD what you are ready to declare.",
};
export default function ContactPage() {
  return (
    <main className="bg-[#11131c] pt-36 text-white">
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs tracking-[.18em] text-violet-200">START A CONVERSATION</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
            Bring the complicated version.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-white/65">
            Tell us what is changing. We’ll come back with a useful question, not a sales sequence.
          </p>
          <div className="mt-12 space-y-5 text-sm">
            <div>
              <p className="text-white/45">Email</p>
              <a className="mt-1 block font-medium" href="mailto:hello@arcture.studio">
                hello@arcture.studio
              </a>
            </div>
            <div>
              <p className="text-white/45">Availability</p>
              <p className="mt-1 font-medium">Mon–Fri / 10:00–18:00 IST</p>
            </div>
            <div>
              <p className="text-white/45">For time-sensitive production support</p>
              <p className="mt-1 font-medium">
                +91 00000 00000{" "}
                <span className="text-xs text-white/40">(replace before launch)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Your next move, in context.</h2>
          <p className="mt-2 text-sm text-white/55">
            Most first replies arrive within one business day.
          </p>
          <div className="mt-7">
            <LeadForm source="contact-page" />
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <p className="font-mono text-xs text-violet-200">STRATEGY CALL</p>
            <p className="mt-3 text-lg font-medium">
              Prefer to speak live? Include “strategy call” in your brief and we’ll send a calendar
              link.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <p className="font-mono text-xs text-violet-200">LOCATION</p>
            <p className="mt-3 text-lg font-medium">
              Working across India and remotely with teams around the world.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
