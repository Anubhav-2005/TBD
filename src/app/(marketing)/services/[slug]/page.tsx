import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/config/marketing";
export async function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.eyebrow ?? "Service", description: service?.summary };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">
          {service.eyebrow.toUpperCase()}
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
            {service.title}
          </h1>
          <div className="self-end">
            <p className="text-lg leading-8 text-[#635f72]">{service.summary}</p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#171924] px-5 py-3 text-sm font-medium text-white"
            >
              Plan a project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#171924] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs text-white/45">Investment</p>
            <p className="mt-2 text-2xl font-semibold">{service.price}</p>
          </div>
          <div>
            <p className="text-xs text-white/45">Typical timeline</p>
            <p className="mt-2 text-2xl font-semibold">{service.timeline}</p>
          </div>
          <div>
            <p className="text-xs text-white/45">A practical first step</p>
            <p className="mt-2 text-2xl font-semibold">Strategy session</p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[.16em] text-[#716d82]">WHAT YOU RECEIVE</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em]">
            A system your team can carry forward.
          </h2>
          <ul className="mt-8 space-y-4">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-[#dedde6] pb-4 text-lg"
              >
                <Check className="size-4 text-violet-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-[#e9e8f4] p-8">
          <p className="font-mono text-xs tracking-[.16em] text-[#716d82]">HOW WE GET THERE</p>
          {["Frame the decision", "Design the proof", "Build with care", "Learn after launch"].map(
            (step, index) => (
              <div key={step} className="mt-7 flex gap-5">
                <span className="font-mono text-sm text-violet-700">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#635f72]">
                    A focused working rhythm that keeps decisions visible and progress tangible.
                  </p>
                </div>
              </div>
            ),
          )}
          <div className="mt-10 border-t border-[#cfcddb] pt-5">
            <p className="text-xs text-[#716d82]">Typical technology</p>
            <p className="mt-2 text-sm font-medium">{service.technology.join(" · ")}</p>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-violet-700 p-8 text-white md:p-12">
          <p className="font-mono text-xs tracking-[.16em] text-violet-200">A GOOD FIT IF</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.05em]">
            You want more than a new layer of paint—you want a clearer, stronger way to show up.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-violet-800"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
