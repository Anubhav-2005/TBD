import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/config/marketing";
export async function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return { title: study?.client ?? "Case study", description: study?.result };
}
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">
          CASE STUDY / {study.client.toUpperCase()}
        </p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          {study.title}
        </h1>
        <div className="mt-10 grid gap-5 text-sm sm:grid-cols-3">
          <div>
            <p className="text-[#716d82]">Category</p>
            <p className="mt-1 font-medium">{study.category}</p>
          </div>
          <div>
            <p className="text-[#716d82]">Outcome</p>
            <p className="mt-1 font-medium">
              {study.metric} {study.metricLabel}
            </p>
          </div>
          <div>
            <p className="text-[#716d82]">Built with</p>
            <p className="mt-1 font-medium">{study.technologies.join(" · ")}</p>
          </div>
        </div>
      </section>
      <div
        className={`mx-auto aspect-[16/8] max-w-7xl rounded-[2rem] bg-gradient-to-br ${study.accent} p-10`}
      >
        <div className="grid size-full place-items-center rounded-[1.5rem] border border-white/30 bg-[#151722]/80 text-center text-white">
          <p className="font-mono text-xs text-white/50">PRODUCT EXPERIENCE / DEMO VISUAL</p>
          <p className="mt-3 text-5xl font-semibold">{study.metric}</p>
          <p className="text-sm text-white/60">{study.metricLabel}</p>
        </div>
      </div>
      <article className="mx-auto grid max-w-4xl gap-14 px-6 py-24">
        <section>
          <p className="font-mono text-xs tracking-[.16em] text-violet-700">THE PROBLEM</p>
          <p className="mt-4 text-2xl leading-9 tracking-[-.03em]">{study.challenge}</p>
        </section>
        <section>
          <p className="font-mono text-xs tracking-[.16em] text-violet-700">THE WORK</p>
          <p className="mt-4 text-lg leading-8 text-[#635f72]">
            We started with the decision customers needed to make, then shaped a narrative,
            information model, and interface that made the value easy to encounter. Every section
            was designed to remove uncertainty before asking for commitment.
          </p>
        </section>
        <section>
          <p className="font-mono text-xs tracking-[.16em] text-violet-700">THE RESULT</p>
          <p className="mt-4 text-2xl leading-9 tracking-[-.03em]">{study.result}</p>
        </section>
        <blockquote className="border-l-2 border-violet-600 pl-6 text-2xl leading-9 font-medium">
          “Client story coming soon — this work is currently being prepared for publication.”
          <footer className="mt-4 text-sm font-normal text-[#716d82]">
            — Testimonial to be declared
          </footer>
        </blockquote>
        <Link
          href="/contact"
          className="justify-self-start rounded-full bg-[#171924] px-5 py-3 text-sm font-medium text-white"
        >
          Build your next case study
        </Link>
      </article>
    </main>
  );
}
