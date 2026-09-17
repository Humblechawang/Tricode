import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: reduce ? 0 : 0.4, ease }}
    >
      {children}
    </motion.div>
  );
}

type PopInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function PopIn({ children, delay = 0, className }: PopInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}
