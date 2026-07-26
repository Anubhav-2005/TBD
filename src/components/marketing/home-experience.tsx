"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, MoveUpRight, Sparkles } from "lucide-react";
import { caseStudies, faqs, services } from "@/config/marketing";
import { LeadForm } from "@/components/marketing/lead-form";
import { Reveal } from "@/components/marketing/reveal";

const orbit = ["Strategy", "Design", "Build", "Growth"];
export function HomeExperience() {
  const reduced = useReducedMotion();
  return (
    <main className="overflow-hidden bg-[#f7f7fb] text-[#171924]">
      <section className="relative isolate min-h-[850px] overflow-hidden bg-[#101411] px-6 pt-40 pb-20 text-white">
        <div className="tbd-noise pointer-events-none absolute inset-0 opacity-[.12]" />
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(circle_at_70%_28%,#00d1c3_0,transparent_25%),radial-gradient(circle_at_15%_78%,#ff6a3d_0,transparent_22%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] [background-size:64px_64px] opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="font-mono text-xs tracking-[.2em] text-[#d9ff57]"
              >
                TBD / CREATIVE TECHNOLOGY COMPANY / INDIA + EVERYWHERE
              </motion.p>
              <motion.h1
                initial={reduced ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-4xl text-5xl leading-[.94] font-semibold tracking-[-.065em] sm:text-7xl lg:text-[6.25rem]"
              >
                Build the thing people <span className="text-[#d9ff57]">can’t stop talking</span>{" "}
                about.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-8 max-w-xl text-lg leading-8 text-white/65"
              >
                To Be Declared is the creative partnership of Arjun Chaturvedi, Shreyash Solanky,
                and Anubhav Pandey—turning brave ideas into vivid, useful digital worlds.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#d9ff57] px-5 py-3 text-sm font-medium text-[#101411] transition hover:-translate-y-0.5 hover:bg-[#eeffad]"
                >
                  Book a consultation{" "}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition hover:border-white/50 hover:bg-white/10"
                >
                  See selected work <ArrowDownRight className="size-4" />
                </Link>
              </motion.div>
            </div>
            <div className="relative mx-auto grid aspect-square w-full max-w-[540px] place-items-center">
              <motion.div
                animate={reduced ? {} : { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
                className="absolute size-[88%] rounded-full border border-white/15"
              />{" "}
              <motion.div
                animate={reduced ? {} : { rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute size-[66%] rounded-full border border-dashed border-[#d9ff57]/50"
              />{" "}
              <motion.div
                animate={reduced ? {} : { scale: [1, 0.93, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="grid size-[42%] place-items-center rounded-[2rem] bg-gradient-to-br from-[#d9ff57] via-[#00d1c3] to-[#ff6a3d] p-[1px] shadow-[0_0_100px_20px_#00d1c360]"
              >
                <div className="grid size-full place-items-center rounded-[1.9rem] bg-[#101411]">
                  <Sparkles className="size-12 text-[#d9ff57]" />
                </div>
              </motion.div>
              {orbit.map((item, index) => (
                <motion.span
                  key={item}
                  animate={reduced ? {} : { y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + index, delay: index * 0.4 }}
                  className="absolute rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs backdrop-blur"
                  style={{ left: `${[6, 72, 62, 12][index]}%`, top: `${[25, 16, 73, 72][index]}%` }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="mt-12 overflow-hidden border-y border-white/10 py-3">
            <motion.div
              animate={reduced ? {} : { x: [0, -420] }}
              transition={{ duration: 14, ease: "linear", repeat: Infinity }}
              className="flex w-max items-center gap-7 font-mono text-[11px] tracking-[.18em] whitespace-nowrap text-white/55"
            >
              {[
                "STRATEGY WITH TEETH",
                "IDENTITY WITH A PULSE",
                "CODE WITH CHARACTER",
                "TBD / TO BE DECLARED",
                "STRATEGY WITH TEETH",
                "IDENTITY WITH A PULSE",
                "CODE WITH CHARACTER",
                "TBD / TO BE DECLARED",
              ].map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-7">
                  {item} <i className="size-1.5 rounded-full bg-[#d9ff57]" />
                </span>
              ))}
            </motion.div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-center sm:grid-cols-4">
            <div className="bg-[#101411]/80 p-5">
              <p className="text-2xl font-semibold">Coming soon</p>
              <p className="mt-1 text-xs text-white/50">launches shipped</p>
            </div>
            <div className="bg-[#101411]/80 p-5">
              <p className="text-2xl font-semibold">To be declared</p>
              <p className="mt-1 text-xs text-white/50">partner rating</p>
            </div>
            <div className="bg-[#101411]/80 p-5">
              <p className="text-2xl font-semibold">Coming soon</p>
              <p className="mt-1 text-xs text-white/50">specialist disciplines</p>
            </div>
            <div className="bg-[#101411]/80 p-5">
              <p className="text-2xl font-semibold">∞</p>
              <p className="mt-1 text-xs text-white/50">room for ambition</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[.16em] text-[#716d82]">HOW WE HELP</p>
            <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
                One partner for the hard parts of becoming clear.
              </h2>
              <Link
                href="/services/websites"
                className="inline-flex items-center gap-1 self-end text-sm font-medium underline underline-offset-4"
              >
                Explore capabilities <MoveUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl border border-[#dedde6] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#00a99d] hover:shadow-xl hover:shadow-[#00d1c3]/15"
                >
                  <p className="text-xs font-medium text-[#008b82]">
                    0{index + 1} / {service.eyebrow}
                  </p>
                  <h3 className="mt-14 text-2xl font-semibold tracking-[-.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#716d82]">{service.summary}</p>
                  <span className="mt-6 inline-flex size-9 items-center justify-center rounded-full border border-[#dedde6] transition group-hover:bg-[#171924] group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e9e8f4] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="font-mono text-xs tracking-[.16em] text-[#716d82]">THE TBD METHOD</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              Less theatre. More forward motion.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#635f72]">
              We bring senior judgment to the few decisions that define whether a launch gets
              noticed, understood, and acted on.
            </p>
          </Reveal>
          <div className="grid gap-3">
            {[
              [
                "01",
                "Find the tension",
                "The credible difference between where you are and where customers need you to be.",
              ],
              [
                "02",
                "Make it visible",
                "A system of language, interfaces, and interactions that carries the point without shouting.",
              ],
              [
                "03",
                "Put it in market",
                "A durable build with the instrumentation and momentum to learn after launch.",
              ],
            ].map(([number, title, body], index) => (
              <Reveal key={number} delay={index * 0.1}>
                <div className="rounded-2xl bg-white/70 p-6 md:flex md:gap-8">
                  <span className="font-mono text-sm text-[#008b82]">{number}</span>
                  <div>
                    <h3 className="mt-5 text-xl font-semibold md:mt-0">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#635f72]">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-[.16em] text-[#716d82]">SELECTED WORK</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
                  Useful change, made visible.
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden text-sm font-medium underline underline-offset-4 sm:block"
              >
                View all work
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.08}>
                <Link href={`/work/${study.slug}`} className="group block">
                  <div
                    className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br ${study.accent} p-6 transition duration-500 group-hover:scale-[.98]`}
                  >
                    <div className="absolute inset-[12%] rounded-[2rem] border border-white/30 bg-[#151722]/80 shadow-2xl backdrop-blur-sm">
                      <div className="m-5 h-2 rounded-full bg-white/15" />
                      <div className="mx-5 mt-7 h-24 rounded-2xl bg-white/10" />
                      <div className="m-5 grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-xl bg-white/10" />
                        <div className="h-20 rounded-xl bg-white/20" />
                      </div>
                    </div>
                    <span className="absolute bottom-5 left-5 rounded-full bg-[#151722] px-3 py-1.5 text-xs text-white">
                      {study.metric} · {study.metricLabel}
                    </span>
                  </div>
                  <p className="mt-5 text-xs text-[#716d82]">
                    {study.client} / {study.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-.035em]">{study.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#11131c] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="font-mono text-xs tracking-[.16em] text-[#d9ff57]">
              A CLEARER WAY TO START
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              We don’t sell pixels. We help you decide what deserves to exist.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-white/65">
              Bring us an uncertain launch, an underperforming experience, or an operational knot.
              We’ll return with a considered next move.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {["Strategy before scope", "Senior team, direct access", "Built to compound"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2 text-sm text-white/75">
                    <Check className="size-4 text-[#d9ff57]" /> {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-lg font-medium">Start with a free, useful conversation.</p>
              <p className="mt-2 text-sm text-white/55">
                No deck, no sales theatre—just context and a better question.
              </p>
              <div className="mt-7">
                <LeadForm compact source="homepage" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[.16em] text-[#716d82]">COMMON QUESTIONS</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em]">Before we start.</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-[#dedde6]">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 0.04}>
                <details className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-medium marker:hidden">
                    {question}
                    <span className="float-right text-[#008b82] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#716d82]">{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
