import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/config/marketing";
export async function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  return { title: industry ? `${industry.title} digital experiences` : "Industry" };
}
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">INDUSTRY FOCUS</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          {industry.title} experiences that make the next step obvious.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#635f72]">
          {industry.promise} We combine domain-sensitive content, accessible journeys, and useful
          technology to turn attention into trust.
        </p>
      </section>
      <section className="bg-[#171924] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["Trust", "Clear signals before claims"],
            ["Speed", "Fewer dead-end journeys"],
            ["Momentum", "A system built to learn"],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-white/20 pt-5">
              <p className="text-xl font-semibold">{title}</p>
              <p className="mt-2 text-sm text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-semibold tracking-[-.05em]">
          Built around the decisions your customers actually make.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Find the right offer", "Understand why it matters", "Take a confident next step"].map(
            (item, index) => (
              <div key={item} className="rounded-2xl border border-[#dedde6] bg-white p-6">
                <span className="font-mono text-xs text-violet-700">0{index + 1}</span>
                <p className="mt-12 text-xl font-semibold">{item}</p>
              </div>
            ),
          )}
        </div>
        <Link
          href="/contact"
          className="mt-12 inline-flex rounded-full bg-[#171924] px-5 py-3 text-sm font-medium text-white"
        >
          Talk about your {industry.title.toLowerCase()} business
        </Link>
      </section>
    </main>
  );
}
