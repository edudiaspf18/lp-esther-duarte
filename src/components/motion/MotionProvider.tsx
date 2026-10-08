"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/**
 * Provedor global de movimento.
 * - `LazyMotion` carrega só os recursos básicos (bundle enxuto); `strict` obriga usar `m`.
 * - `MotionConfig reducedMotion="user"` respeita `prefers-reduced-motion`.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
