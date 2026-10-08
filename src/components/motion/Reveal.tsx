"use client";

import { m } from "motion/react";

import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  /** Atraso em segundos (para sequência entre itens). */
  delay?: number;
  className?: string;
}

/**
 * Conteúdo aparece com fade e subida de 12 px ao entrar na tela (uma vez).
 * Movimento reduzido: as classes `motion-reduce:` forçam o estado final por CSS.
 * Não usar no Hero: o topo precisa aparecer na hora (LCP).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <m.div
      className={cn("motion-reduce:opacity-100! motion-reduce:transform-none!", className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: DURATION.slow, delay, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  );
}
