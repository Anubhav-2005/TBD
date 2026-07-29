"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/config/marketing";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#d9ff57]/20 bg-[#101411]/80 px-4 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:px-5">
        <Link href="/" className="group flex items-center gap-2 font-semibold tracking-tight">
          <Image
            src="/brand/tbd-favicon.svg"
            alt="TBD"
            width={28}
            height={28}
            className="size-7 transition-transform group-hover:rotate-6"
          />
          TBD <span className="text-xs font-normal text-white/45">/ To Be Declared</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10",
                pathname.startsWith(
                  item.href.split("/")[1] ? `/${item.href.split("/")[1]}` : item.href,
                ) && "text-white",
                "text-white/65",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden items-center gap-1 rounded-lg bg-[#d9ff57] px-3 py-2 text-sm font-medium text-[#101411] transition-transform hover:-translate-y-0.5 hover:bg-[#edffab] md:flex"
        >
          Start a project <ArrowUpRight className="size-3.5" />
        </Link>
        <button
          className="grid size-9 place-items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-2xl border border-white/10 bg-[#11131c]/95 p-3 text-white backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              onClick={() => setOpen(false)}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="rounded-lg bg-white px-3 py-3 text-sm font-medium text-[#171924]"
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
