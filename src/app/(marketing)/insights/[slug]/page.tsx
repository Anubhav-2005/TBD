import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/config/marketing";
export async function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  return { title: article?.title ?? "Insight", description: article?.excerpt };
}
export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">
          {article.category.toUpperCase()} / {article.minutes} MIN READ
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          {article.title}
        </h1>
        <p className="mt-7 text-xl leading-8 text-[#635f72]">{article.excerpt}</p>
        <div className="prose prose-p:text-[#4e4a5c] prose-p:leading-8 mt-14 max-w-none">
          <p>
            Most digital work starts with a surface-level request. A new homepage, an updated brand,
            a campaign that needs to perform. The useful work begins when we ask what decision that
            request is really trying to change.
          </p>
          <h2>The decision behind the brief</h2>
          <p>
            People do not experience a business in isolated screens. They assemble confidence from
            small, repeated signals: what is clear, what is missing, how a difficult question is
            handled, and whether the next step feels proportionate to the promise.
          </p>
          <p>
            That is why a better outcome starts with reducing uncertainty, not adding novelty. A
            strong digital experience gives people enough evidence to move—and gives the
            organisation a system for improving that evidence over time.
          </p>
          <h2>Make progress observable</h2>
          <p>
            Choose measures that represent a more useful customer behavior. Then make them visible
            to the team doing the work. The aim is not a busier dashboard; it is better decisions,
            earlier.
          </p>
        </div>
        <Link
          href="/insights"
          className="mt-12 inline-block text-sm font-medium underline underline-offset-4"
        >
          Back to field notes
        </Link>
      </article>
    </main>
  );
}
