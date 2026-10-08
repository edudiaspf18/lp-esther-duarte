"use client";

import { useId } from "react";
import { m, useAnimationFrame, useMotionValue, useReducedMotion, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

interface RotatingBadgeProps {
  /** Texto que corre em volta do selo. */
  text: string;
  className?: string;
}

/** Graus por segundo da rotação de base (uma volta a cada 60 s). */
const BASE_SPEED = 6;
/** Quanto a rolagem acelera o selo (graus por pixel rolado). */
const SCROLL_FACTOR = 0.06;
/** Comprimento do círculo do texto (raio 44 na viewBox 120). */
const TEXT_LENGTH = 276;

/**
 * Selo circular com texto em volta, girando devagar; a rolagem acelera um pouco.
 * Decorativo: o conteúdo já está escrito na página. Com movimento reduzido fica parado.
 */
export function RotatingBadge({ text, className }: RotatingBadgeProps) {
  const pathId = useId();
  const { scrollY } = useScroll();
  const rotation = useMotionValue(0);
  const reduced = useReducedMotion();

  useAnimationFrame((time) => {
    if (reduced) return;
    rotation.set((time / 1000) * BASE_SPEED + scrollY.get() * SCROLL_FACTOR);
  });

  return (
    <m.svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      style={{ rotate: rotation }}
      className={cn("size-28 text-foreground md:size-36", className)}
    >
      <defs>
        <path id={pathId} d="M60,16 a44,44 0 1,1 -0.01,0" fill="none" />
      </defs>
      <circle cx="60" cy="60" r="58" className="fill-background" opacity="0.94" />
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <text
        fontSize="9"
        letterSpacing="1.6"
        fill="currentColor"
        className="font-sans font-medium uppercase"
        textLength={TEXT_LENGTH}
        lengthAdjust="spacing"
      >
        <textPath href={`#${pathId}`} textLength={TEXT_LENGTH} lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
      <circle cx="60" cy="60" r="4" className="fill-gold" />
    </m.svg>
  );
}
