"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}