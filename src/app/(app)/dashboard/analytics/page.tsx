import { MetricCard } from "@/components/operations/metric-card";
export default function AnalyticsPage() {
  const funnel = [
    ["Website visits", "28,420", 100],
    ["Qualified enquiries", "482", 68],
    ["Discovery calls", "84", 42],
    ["Proposals sent", "31", 26],
    ["New engagements", "12", 15],
  ];
  return (
    <div className="mx-auto max-w-7xl">
      <p className="font-mono text-xs tracking-[.16em] text-violet-700">INTELLIGENCE / ANALYTICS</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-.05em]">What is compounding.</h1>
      <section className="mt-7 grid gap-3 md:grid-cols-4">
        <MetricCard label="Website leads" value="482" change="12.4% month on month" />
        <MetricCard label="Win rate" value="38.7%" change="4.1 points above target" />
        <MetricCard label="Client retention" value="91%" change="3 renewals this quarter" />
        <MetricCard label="Delivery margin" value="44.2%" change="On target" />
      </section>
      <section className="mt-7 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#dedde6] bg-white p-5">
          <p className="text-sm font-medium">Sales funnel</p>
          <div className="mt-7 space-y-4">
            {funnel.map(([label, value, width]) => (
              <div key={label}>
                <div className="flex justify-between text-xs">
                  <span>{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
                <div className="mt-2 h-8 rounded-lg bg-[#f1f0f7] p-1">
                  <div
                    className="h-full rounded-md bg-gradient-to-r from-violet-700 to-violet-400"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#dedde6] bg-white p-5">
          <p className="text-sm font-medium">Service mix</p>
          <div className="mt-7 grid h-64 place-items-center">
            <div className="grid size-44 place-items-center rounded-full border-[28px] border-violet-500 border-t-amber-300 border-l-cyan-400">
              <div className="text-center">
                <p className="text-2xl font-semibold">₹12.4L</p>
                <p className="text-xs text-[#716d82]">monthly revenue</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 text-xs text-[#716d82]">
            <span>● Web</span>
            <span className="text-cyan-600">● Growth</span>
            <span className="text-amber-600">● Brand</span>
          </div>
        </div>
      </section>
    </div>
  );
}
