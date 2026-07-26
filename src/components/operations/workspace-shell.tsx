"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Command, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { workspaceNav } from "@/config/operations";
import { cn } from "@/lib/utils";

export function WorkspaceShell({
  children,
  userName,
}: {
  children: React.ReactNode;
  userName?: string | null;
}) {
  const pathname = usePathname();
  const [palette, setPalette] = useState(false);
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setPalette(true);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);
  return (
    <div className="min-h-screen bg-[#f7f7fb] text-[#171924]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-[#dedde6] bg-white p-4 lg:block">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-2 py-3 font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-[#d9ff57] text-xs text-[#101411]">
            T
          </span>{" "}
          TBD <span className="ml-1 text-xs font-normal text-[#716d82]">/ OS</span>
        </Link>
        <button
          onClick={() => setPalette(true)}
          className="mt-7 flex w-full items-center justify-between rounded-lg border border-[#dedde6] px-3 py-2 text-xs text-[#716d82] hover:bg-[#f7f7fb]"
        >
          <span className="flex items-center gap-2">
            <Search className="size-3.5" /> Search everything
          </span>
          <kbd className="rounded border bg-white px-1.5 py-0.5 text-[10px]">⌘ K</kbd>
        </button>
        <nav className="mt-5 space-y-1">
          {workspaceNav.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                  active
                    ? "bg-violet-50 font-medium text-violet-800"
                    : "text-[#635f72] hover:bg-[#f7f7fb] hover:text-[#171924]",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#171924] p-3 text-white">
          <p className="text-xs text-white/50">Workspace plan</p>
          <p className="mt-1 text-sm font-medium">Founding team</p>
          <p className="mt-3 text-xs text-white/50">3 of 5 seats in use</p>
        </div>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#dedde6] bg-[#f7f7fb]/85 px-5 backdrop-blur-xl lg:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <span className="grid size-7 place-items-center rounded-lg bg-[#d9ff57] text-xs text-[#101411]">
              T
            </span>
            <span className="text-sm font-semibold">TBD / OS</span>
          </div>
          <button
            onClick={() => setPalette(true)}
            className="hidden items-center gap-2 text-sm text-[#716d82] sm:flex"
          >
            <Command className="size-4" /> Search workspace
          </button>
          <div className="ml-auto flex items-center gap-3">
            <button className="grid size-9 place-items-center rounded-lg border border-[#dedde6] bg-white text-[#635f72]">
              <Bell className="size-4" />
              <span className="absolute -mt-3 ml-3 size-1.5 rounded-full bg-violet-600" />
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 text-sm shadow-sm">
              <span className="grid size-6 place-items-center rounded-md bg-violet-100 text-[10px] font-bold text-violet-800">
                {userName?.slice(0, 2).toUpperCase() ?? "AP"}
              </span>
              <span className="hidden sm:block">{userName ?? "Founder"}</span>
              <ChevronDown className="size-3.5 text-[#716d82]" />
            </button>
          </div>
        </header>
        <main className="px-5 py-7 lg:px-8">{children}</main>
      </div>
      {palette && (
        <div
          className="fixed inset-0 z-50 grid place-items-start bg-[#171924]/30 p-4 pt-28 backdrop-blur-sm"
          onClick={() => setPalette(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[#dedde6] p-4">
              <Search className="size-4 text-[#716d82]" />
              <input
                autoFocus
                placeholder="Search clients, projects, invoices…"
                className="w-full outline-none placeholder:text-[#9b98a6]"
              />
            </div>
            <div className="p-2">
              <p className="px-3 py-2 text-xs text-[#716d82]">QUICK ACTIONS</p>
              {["Create lead", "Create project", "Create invoice", "Schedule meeting"].map(
                (item) => (
                  <button
                    key={item}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-[#f7f7fb]"
                  >
                    <Plus className="size-4 text-violet-700" />
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
