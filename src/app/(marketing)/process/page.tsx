import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "How we work" };
const stages = [
  [
    "01",
    "Discovery",
    "Get specific about the business tension, the people involved, and the decision that matters.",
  ],
  ["02", "Direction", "Turn research into a focused point of view, plan, and visible system."],
  [
    "03",
    "Design",
    "Prototype the moments that create confidence before producing the full experience.",
  ],
  [
    "04",
    "Development",
    "Build for speed, resilience, accessibility, and the people who maintain it.",
  ],
  [
    "05",
    "Launch",
    "Make release feel calm: QA, measurement, enablement, and a considered rollout.",
  ],
  [
    "06",
    "Momentum",
    "Review real behavior, sharpen the work, and keep the next opportunity visible.",
  ],
];
export default function ProcessPage() {
  return (
    <main className="bg-[#11131c] pt-36 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <p className="font-mono text-xs tracking-[.18em] text-violet-200">OUR WORKING RHYTHM</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          A rigorous process with room for good judgment.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
          You get a small senior team, visible decisions, and a pace that protects craft without
          losing momentum.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        {stages.map(([number, title, body], index) => (
          <div
            key={number}
            className="grid gap-5 border-t border-white/15 py-8 md:grid-cols-[.2fr_.7fr_1fr] md:items-start"
          >
            <p className="font-mono text-sm text-violet-300">{number}</p>
            <h2 className="text-3xl font-semibold tracking-[-.04em]">{title}</h2>
            <p className="max-w-lg leading-7 text-white/60">{body}</p>
            {index < stages.length - 1 && <div className="hidden" />}
          </div>
        ))}
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#11131c]"
        >
          Plan a working session
        </Link>
      </section>
    </main>
  );
}
