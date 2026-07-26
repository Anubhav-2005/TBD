import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/config/marketing";
export const metadata: Metadata = {
  title: "Selected work",
  description: "A few examples of meaningful digital change.",
};
export default function WorkPage() {
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">SELECTED WORK</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          The kind of change you can point to.
        </h1>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-28">
        {caseStudies.map((study, index) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group grid gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div
              className={`relative aspect-[16/10] overflow-hidden rounded-3xl bg-gradient-to-br ${study.accent} p-8`}
            >
              <div className="absolute inset-[12%] rounded-[2rem] border border-white/30 bg-[#151722]/75 shadow-2xl">
                <div className="m-6 h-3 w-1/3 rounded-full bg-white/20" />
                <div className="m-6 h-[55%] rounded-2xl bg-white/10" />
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-violet-700">
                0{index + 1} / {study.category}
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.05em]">{study.title}</h2>
              <p className="mt-4 text-[#635f72]">{study.challenge}</p>
              <p className="mt-8 text-2xl font-semibold">
                {study.metric}{" "}
                <span className="text-sm font-normal text-[#716d82]">{study.metricLabel}</span>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
