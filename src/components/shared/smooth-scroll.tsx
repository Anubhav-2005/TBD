"use client";
import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const canUseLenis = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    const saveData = connection?.saveData ?? false;

    // Native scrolling is quicker and more predictable on touch devices. Lenis is
    // reserved for capable desktop pointers, where it adds polish without taxing mobile CPUs.
    if (!canUseLenis || saveData) return;

    const lenis = new Lenis({ lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.82 });
    let frame = 0;
    let paused = document.hidden;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    const resume = () => {
      if (!paused) return;
      paused = false;
      frame = requestAnimationFrame(raf);
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        paused = true;
        cancelAnimationFrame(frame);
      } else {
        resume();
      }
    };

    if (!paused) frame = requestAnimationFrame(raf);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      lenis.destroy();
    };
  }, []);
  return children;
}
