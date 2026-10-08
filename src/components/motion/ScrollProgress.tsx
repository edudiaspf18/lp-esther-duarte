"use client";

import { m, useScroll } from "motion/react";

/** Filete dourado fixo no topo que cresce com a rolagem. Decorativo; some com movimento reduzido. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gold motion-reduce:hidden"
    />
  );
}
