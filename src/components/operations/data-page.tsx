"use client";
import { useMemo, useState } from "react";
import { Download, Filter, Plus, Search } from "lucide-react";
type Row = Record<string, string | number | string[]>;
export function DataPage({
  eyebrow,
  title,
  description,
  columns,
  rows,
  primaryAction = "Create",
}: {
  eyebrow: string;
  title: string;
  description: string;
  columns: { key: string; label: string }[];
  rows: Row[];
  primaryAction?: string;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      rows.filter((row) =>
        Object.values(row).join(" ").toLowerCase().includes(query.toLowerCase()),
      ),
    [rows, query],
  );
  return (
    <div className="mx-auto max-w-7xl">
      <p className="font-mono text-xs tracking-[.16em] text-violet-700">{eyebrow}</p>
      <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-[-.05em]">{title}</h1>
          <p className="mt-2 text-sm text-[#716d82]">{description}</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#171924] px-3 py-2 text-sm text-white">
          <Plus className="size-4" />
          {primaryAction}
        </button>
      </div>
      <div className="mt-7 rounded-2xl border border-[#dedde6] bg-white">
        <div className="flex flex-col gap-3 border-b border-[#dedde6] p-4 sm:flex-row">
          <label className="flex h-10 flex-1 items-center gap-2 rounded-lg border border-[#dedde6] px-3">
            <Search className="size-4 text-[#716d82]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`Search ${title.toLowerCase()}…`}
              className="w-full text-sm outline-none"
            />
          </label>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dedde6] px-3 text-sm">
            <Filter className="size-4" />
            Filters
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dedde6] px-3 text-sm">
            <Download className="size-4" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-[#f7f7fb] text-xs text-[#716d82]">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="px-5 py-3 font-medium">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0eff4]">
              {results.map((row, index) => (
                <tr
                  key={`${String(row[columns[0].key])}-${index}`}
                  className="transition hover:bg-[#fafafe]"
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-5 py-4">
                      {column.key === "status" || column.key === "priority" ? (
                        <span className="rounded-full bg-violet-50 px-2 py-1 text-xs font-medium text-violet-800">
                          {row[column.key]}
                        </span>
                      ) : (
                        (() => {
                          const value = row[column.key];
                          return Array.isArray(value) ? value.join(", ") : value;
                        })()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {results.length === 0 && (
          <p className="p-10 text-center text-sm text-[#716d82]">No matching results.</p>
        )}
      </div>
    </div>
  );
}
