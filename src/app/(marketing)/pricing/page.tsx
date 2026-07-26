import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Investment",
  description: "Indicative project investment for digital experiences built to last.",
};
const plans = [
  {
    name: "Signal",
    title: "Landing page",
    body: "For a singular launch, offer, or campaign.",
    price: "₹1.2L",
    items: ["Strategy sprint", "One conversion journey", "Responsive build"],
  },
  {
    name: "Foundation",
    title: "Business website",
    body: "For teams ready to make their full story easier to understand.",
    price: "₹2.8L",
    items: ["Content structure", "Up to 12 key pages", "CMS & analytics"],
  },
  {
    name: "Latitude",
    title: "Premium platform",
    body: "For brands building a more meaningful digital advantage.",
    price: "₹6L+",
    items: ["Research & positioning", "Design system", "Custom application layer"],
  },
];
export default function PricingPage() {
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <section className="mx-auto max-w-7xl px-6 pb-16 text-center">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">INVESTMENT</p>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          Clear ranges. Serious outcomes.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[#635f72]">
          Every engagement begins with context. These ranges help you find the right starting point
          before we scope the work together.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-24 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-3xl border p-7 ${index === 1 ? "border-violet-500 bg-[#171924] text-white shadow-2xl" : "border-[#dedde6] bg-white"}`}
          >
            <p
              className={`font-mono text-xs ${index === 1 ? "text-violet-200" : "text-violet-700"}`}
            >
              {plan.name.toUpperCase()}
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-.04em]">{plan.title}</h2>
            <p
              className={`mt-3 min-h-12 text-sm leading-6 ${index === 1 ? "text-white/60" : "text-[#716d82]"}`}
            >
              {plan.body}
            </p>
            <p className="mt-9 text-4xl font-semibold">{plan.price}</p>
            <p className={`mt-1 text-xs ${index === 1 ? "text-white/45" : "text-[#716d82]"}`}>
              indicative investment
            </p>
            <ul className="mt-9 space-y-3">
              {plan.items.map((item) => (
                <li
                  key={item}
                  className={`text-sm ${index === 1 ? "text-white/75" : "text-[#635f72]"}`}
                >
                  — {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-10 block rounded-xl py-3 text-center text-sm font-medium ${index === 1 ? "bg-white text-[#171924]" : "bg-[#171924] text-white"}`}
            >
              Discuss this scope
            </Link>
          </div>
        ))}
      </section>
      <section className="border-y border-[#dedde6] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs tracking-[.16em] text-[#716d82]">ONGOING MOMENTUM</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <p className="text-xl font-semibold">SEO & content / from ₹75K per month</p>
            <p className="text-xl font-semibold">Maintenance & improvement / from ₹60K per month</p>
            <p className="text-xl font-semibold">Brand & campaign support / scoped to need</p>
          </div>
        </div>
      </section>
    </main>
  );
}
