import type { ReactNode } from "react";
export function MetricCard({
  label,
  value,
  change,
  icon,
}: {
  label: string;
  value: string;
  change?: string;
  icon?: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-[#dedde6] bg-white p-5 shadow-sm shadow-[#171924]/[.02]">
      <div className="flex items-start justify-between">
        <p className="text-sm text-[#716d82]">{label}</p>
        {icon && (
          <span className="grid size-8 place-items-center rounded-lg bg-violet-50 text-violet-700">
            {icon}
          </span>
        )}
      </div>
      <p className="mt-6 text-3xl font-semibold tracking-[-.05em]">{value}</p>
      {change && <p className="mt-2 text-xs text-emerald-700">↗ {change}</p>}
    </article>
  );
}
