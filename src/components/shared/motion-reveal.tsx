"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { reveal } from "@/animations/motion";
export function MotionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={reveal}>
      {children}
    </motion.div>
  );
}
