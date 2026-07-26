import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/config/marketing";
export const metadata: Metadata = {
  title: "Insights",
  description: "Practical notes on digital products, brand, and growth.",
};
export default function InsightsPage() {
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">FIELD NOTES</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          Useful thoughts for teams building the next thing.
        </h1>
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-24 md:grid-cols-3">
        {insights.map((article, index) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group rounded-2xl border border-[#dedde6] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="font-mono text-xs text-violet-700">
              0{index + 1} / {article.category}
            </p>
            <h2 className="mt-16 text-2xl font-semibold tracking-[-.04em]">{article.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#716d82]">{article.excerpt}</p>
            <p className="mt-8 text-xs text-[#716d82]">{article.minutes} min read</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
