import { requireSession } from "@/lib/auth/authorize";
export const dynamic = "force-dynamic";
export default async function ClientPortalPage() {
  const session = await requireSession();
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-5 text-[#171924] md:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid size-7 place-items-center rounded-lg bg-[#171924] text-xs text-white">
              A
            </span>{" "}
            TBD <span className="text-sm font-normal text-[#716d82]">/ client space</span>
          </div>
          <span className="rounded-full bg-white px-3 py-2 text-xs shadow-sm">
            {session.user.email}
          </span>
        </header>
        <section className="mt-12 rounded-3xl bg-[#171924] p-7 text-white md:p-10">
          <p className="font-mono text-xs tracking-[.16em] text-violet-200">NORTHSTAR LIVING</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em]">
            Your project is taking shape.
          </h1>
          <p className="mt-3 max-w-xl text-white/65">
            The identity and website are moving through design. Your next review is ready below.
          </p>
          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[46%] rounded-full bg-violet-400" />
          </div>
          <p className="mt-2 text-xs text-white/50">
            46% complete · Design direction review is next
          </p>
        </section>
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Next approval", "Homepage direction", "Review by 25 Jul"],
            ["Shared files", "18 assets", "Latest: direction-v3.fig"],
            ["Invoice status", "₹1,85,000 due", "Due 26 Jul"],
          ].map(([title, value, meta]) => (
            <article key={title} className="rounded-2xl border border-[#dedde6] bg-white p-5">
              <p className="text-sm text-[#716d82]">{title}</p>
              <p className="mt-5 text-xl font-semibold">{value}</p>
              <p className="mt-2 text-xs text-[#716d82]">{meta}</p>
            </article>
          ))}
        </section>
        <section className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#dedde6] bg-white p-5">
            <p className="font-medium">Project timeline</p>
            <div className="mt-5 space-y-5">
              {[
                ["Discovery", "Complete"],
                ["Design direction", "In review"],
                ["Build", "Upcoming"],
                ["Launch", "Planned"],
              ].map(([stage, status]) => (
                <div key={stage} className="flex items-center justify-between">
                  <p className="text-sm">{stage}</p>
                  <span className="rounded-full bg-violet-50 px-2 py-1 text-xs text-violet-800">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#dedde6] bg-white p-5">
            <p className="font-medium">Recent updates</p>
            <div className="mt-5 space-y-4 text-sm">
              <p>
                <b>TBD</b> shared the homepage direction for your review.
                <span className="mt-1 block text-xs text-[#716d82]">Today, 09:40</span>
              </p>
              <p>
                <b>You</b> approved the content outline.
                <span className="mt-1 block text-xs text-[#716d82]">18 Jul</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
