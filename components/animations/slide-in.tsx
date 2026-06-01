"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
}

export default function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "left",
  ...props
}: SlideInProps) {
  const x = direction === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
