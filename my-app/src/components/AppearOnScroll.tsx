"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AppearOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export default function AppearOnScroll({
  children,
  className,
  delay = 0,
  amount = 0.25,
}: AppearOnScrollProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={reduceMotion ? undefined : { duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}