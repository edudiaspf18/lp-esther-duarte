"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/** Quanto o halo se desloca com o cursor (px, do centro até a borda). */
const CURSOR_RANGE = 18;
/** Quanto o halo desce enquanto a página rola até 600 px. */
const SCROLL_RANGE = 70;

/**
 * Moldura do retrato do Hero: halo dourado atrás da foto que acompanha o cursor (desktop)
 * e desce de leve com a rolagem (parallax). Com movimento reduzido fica parado.
 */
export function PortraitFrame({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(cursorY, { stiffness: 120, damping: 30 });
  const scrollShift = useTransform(scrollY, [0, 600], [0, reduced ? 0 : SCROLL_RANGE]);
  const y = useTransform([smoothY, scrollShift], ([a, b]) => Number(a) + Number(b));

  function onMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    cursorX.set(((event.clientX - box.left) / box.width - 0.5) * 2 * CURSOR_RANGE);
    cursorY.set(((event.clientY - box.top) / box.height - 0.5) * 2 * CURSOR_RANGE);
  }

  function onLeave() {
    cursorX.set(0);
    cursorY.set(0);
  }

  return (
    <div className="relative isolate" onPointerMove={onMove} onPointerLeave={onLeave}>
      <m.div
        aria-hidden="true"
        style={{ x: smoothX, y }}
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[999px] bg-[radial-gradient(closest-side,rgb(185_151_90/0.30),rgb(185_151_90/0.08)_55%,transparent_75%)] motion-reduce:transform-none!"
      />
      {children}
    </div>
  );
}
