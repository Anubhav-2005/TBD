"use client";
import { useMemo, useState } from "react";
export default function CalculatorsPage() {
  const [visitors, setVisitors] = useState(10000);
  const [rate, setRate] = useState(1.2);
  const [value, setValue] = useState(5000);
  const uplift = useMemo(
    () => Math.round(visitors * (rate / 100) * value * 0.25),
    [visitors, rate, value],
  );
  return (
    <main className="bg-[#f7f7fb] pt-36 text-[#171924]">
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="font-mono text-xs tracking-[.18em] text-violet-700">OPPORTUNITY CALCULATOR</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl">
          See what clarity could be worth.
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-[#635f72]">
          A simple directional model—not a promise. Use it to make a stronger case for investigating
          your conversion journey.
        </p>
        <div className="mt-12 grid gap-6 rounded-3xl bg-[#171924] p-6 text-white md:grid-cols-2 md:p-10">
          <div className="space-y-7">
            {[
              ["Monthly visitors", visitors, setVisitors, 1000, 100000],
              ["Current conversion rate (%)", rate, setRate, 0.1, 20],
              ["Average customer value (₹)", value, setValue, 100, 100000],
            ].map(([label, current, setter, min, max]) => (
              <label key={String(label)} className="block">
                <span className="text-sm text-white/65">
                  {String(label)}{" "}
                  <b className="ml-2 text-white">{Number(current).toLocaleString()}</b>
                </span>
                <input
                  className="mt-3 w-full accent-violet-400"
                  type="range"
                  min={Number(min)}
                  max={Number(max)}
                  step={Number(max) > 1000 ? 100 : 0.1}
                  value={Number(current)}
                  onChange={(e) => (setter as (value: number) => void)(Number(e.target.value))}
                />
              </label>
            ))}
          </div>
          <div className="rounded-2xl bg-white/8 p-7">
            <p className="text-sm text-white/55">
              Potential annual revenue from a 25% conversion improvement
            </p>
            <p className="mt-5 text-5xl font-semibold tracking-[-.05em]">
              ₹{uplift.toLocaleString("en-IN")}
            </p>
            <p className="mt-5 text-sm leading-6 text-white/55">
              This calculator uses your inputs and a conservative illustrative uplift. Let’s
              validate the real opportunity together.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-sm font-medium text-[#171924]"
            >
              Request a free website audit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
