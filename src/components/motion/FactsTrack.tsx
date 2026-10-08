"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Trilho da faixa de fatos com controle de pausa (WCAG 2.2.2: conteúdo que se move por
 * mais de 5 s precisa de um jeito de parar). Pausa também no hover e no foco interno.
 */
export function FactsTrack({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="flex items-center">
      <div className="min-w-0 flex-1 overflow-hidden">
        <div
          className={cn(
            "flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none",
            paused && "[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((current) => !current)}
        aria-pressed={paused}
        aria-label={paused ? "Retomar a faixa" : "Pausar a faixa"}
        className="mx-3 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-all duration-200 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold motion-reduce:hidden"
      >
        {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
