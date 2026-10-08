"use client";

import { useRef, useState } from "react";
import { m, useScroll } from "motion/react";

import type { ProcessStep } from "@/data/content";
import { cn } from "@/lib/utils";

/**
 * Linha do tempo vertical: a linha dourada se desenha conforme a rolagem e cada passo
 * acende quando entra na tela.
 * Movimento reduzido: linha inteira e passos todos acesos por CSS.
 */
export function AnimatedJourney({ steps }: { steps: readonly ProcessStep[] }) {
  const root = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(0);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start 75%", "end 55%"] });

  function onEnter(index: number) {
    setReached((current) => Math.max(current, index));
  }

  return (
    <div className="relative">
      <ol ref={root} className="relative space-y-12 pl-14">
        <div aria-hidden="true" className="absolute top-4 bottom-4 left-[1.15rem] w-px bg-border" />
        <m.div
          aria-hidden="true"
          style={{ scaleY: scrollYProgress }}
          className="absolute top-4 bottom-4 left-[1.15rem] w-px origin-top bg-gold motion-reduce:transform-none!"
        />

        {steps.map((step, index) => {
          const active = index <= reached;
          return (
            <m.li
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              onViewportEnter={() => onEnter(index)}
              className="relative motion-reduce:opacity-100! motion-reduce:transform-none!"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-0 -left-14 flex size-9 items-center justify-center rounded-full border text-sm font-semibold tabular-nums transition-all duration-300",
                  active ? "border-gold bg-gold text-primary" : "border-border bg-background text-muted-foreground",
                  "motion-reduce:border-gold motion-reduce:bg-gold motion-reduce:text-primary",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                <span className="sr-only">Passo {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{step.description}</p>
            </m.li>
          );
        })}
      </ol>
    </div>
  );
}
