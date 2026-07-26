import {
  Activity,
  CalendarDays,
  CircleDollarSign,
  FileWarning,
  ReceiptText,
  UsersRound,
} from "lucide-react";
import { MetricCard } from "@/components/operations/metric-card";
import { leads, projects, tasks } from "@/config/operations";
export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs tracking-[.16em] text-violet-700">
            FOUNDER OVERVIEW / 22 JUL
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-.05em]">
            Good morning. The business is moving.
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg border border-[#dedde6] bg-white px-3 py-2 text-sm">
            Export report
          </button>
          <button className="rounded-lg bg-[#171924] px-3 py-2 text-sm text-white">
            + Quick action
          </button>
        </div>
      </div>
      <section className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Monthly revenue"
          value="To be declared"
          change="Live data will appear here"
          icon={<CircleDollarSign className="size-4" />}
        />
        <MetricCard
          label="Qualified pipeline"
          value="Coming soon"
          change="Live data will appear here"
          icon={<UsersRound className="size-4" />}
        />
        <MetricCard
          label="Active projects"
          value="To be declared"
          change="Live data will appear here"
          icon={<Activity className="size-4" />}
        />
        <MetricCard
          label="Outstanding invoices"
          value="Coming soon"
          change="Live data will appear here"
          icon={<ReceiptText className="size-4" />}
        />
      </section>
      <section className="mt-7 grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
        <div className="rounded-2xl border border-[#dedde6] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Revenue trajectory</p>
              <p className="mt-1 text-xs text-[#716d82]">Collected revenue / trailing 6 months</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              Coming soon
            </span>
          </div>
          <div className="mt-8 flex h-48 items-end gap-3 border-b border-[#dedde6] pb-1">
            {[35, 48, 42, 63, 58, 84].map((height, index) => (
              <div key={height} className="flex flex-1 flex-col justify-end gap-2">
                <div
                  className="rounded-t-md bg-gradient-to-t from-violet-700 to-violet-300"
                  style={{ height: `${height}%` }}
                />
                <span className="text-center text-[10px] text-[#716d82]">
                  {["Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-[#171924] p-5 text-white">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Today’s command center</p>
            <CalendarDays className="size-4 text-violet-200" />
          </div>
          <div className="mt-6 space-y-4">
            {[
              ["10:30", "Meridian / project standup"],
              ["13:00", "Aster & Co. / proposal review"],
              ["16:30", "Nori Foods / commercial call"],
            ].map(([time, title]) => (
              <div key={time} className="flex gap-4">
                <span className="font-mono text-xs text-violet-200">{time}</span>
                <p className="text-sm text-white/75">{title}</p>
              </div>
            ))}
          </div>
          <button className="mt-7 text-xs text-violet-200 underline underline-offset-4">
            Open calendar
          </button>
        </div>
      </section>
      <section className="mt-7 grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-2xl border border-[#dedde6] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Pipeline needing attention</p>
              <p className="mt-1 text-xs text-[#716d82]">Follow-ups and pending decisions</p>
            </div>
            <button className="text-xs font-medium text-violet-700">Open CRM</button>
          </div>
          <div className="mt-5 divide-y divide-[#f0eff4]">
            {leads.map((lead) => (
              <div key={lead.name} className="grid grid-cols-[1.3fr_.7fr_.7fr] gap-3 py-3 text-sm">
                <div>
                  <p className="font-medium">{lead.name}</p>
                  <p className="mt-0.5 text-xs text-[#716d82]">
                    {lead.service} · {lead.contact}
                  </p>
                </div>
                <span className="self-center text-xs text-[#635f72]">{lead.stage}</span>
                <span className="self-center text-right text-xs font-medium">{lead.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#dedde6] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Tasks due</p>
            <FileWarning className="size-4 text-amber-500" />
          </div>
          <div className="mt-4 space-y-1">
            {tasks.map((task) => (
              <div key={task.id} className="rounded-lg p-3 hover:bg-[#f7f7fb]">
                <div className="flex gap-3">
                  <span className="mt-1.5 size-3 rounded-full border border-[#b9b5c4]" />
                  <div>
                    <p className="text-sm font-medium">{task.title}</p>
                    <p className="mt-1 text-xs text-[#716d82]">
                      {task.project} · {task.due}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-7 rounded-2xl border border-[#dedde6] bg-white p-5">
        <p className="text-sm font-medium">Project health</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="rounded-xl bg-[#f7f7fb] p-4">
              <div className="flex justify-between">
                <p className="font-medium">{project.name}</p>
                <span className="text-xs text-[#716d82]">{project.due}</span>
              </div>
              <p className="mt-1 text-xs text-[#716d82]">
                {project.phase} · {project.client}
              </p>
              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#dedde6]">
                <div
                  className="h-full rounded-full bg-violet-600"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-[#716d82]">{project.progress}% complete</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
