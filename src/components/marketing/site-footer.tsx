import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries, services } from "@/config/marketing";

export function SiteFooter() {
  return (
    <footer className="bg-[#101411] px-6 pt-20 pb-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-[#d9ff57]">
              TBD / TO BE DECLARED
            </p>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.04em]">
              Declare what your next version is made of.
            </h2>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d9ff57] px-5 py-3 text-sm font-medium text-[#101411]"
            >
              Tell us what is changing <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div>
            <p className="text-xs text-white/45">Capabilities</p>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    className="text-sm text-white/70 transition hover:text-white"
                    href={`/services/${service.slug}`}
                  >
                    {service.eyebrow}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-white/45">Focus areas</p>
            <ul className="mt-4 space-y-2">
              {industries.slice(0, 5).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    className="text-sm text-white/70 transition hover:text-white"
                    href={`/industries/${industry.slug}`}
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TBD / To Be Declared. Built in public spirit.</p>
          <div className="flex gap-4">
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/insights">Insights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
