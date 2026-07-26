import type { Variants } from "framer-motion";

export const MOTION = { fast: 0.16, base: 0.28, slow: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: MOTION.base, ease: MOTION.ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: MOTION.base, ease: MOTION.ease } },
};
