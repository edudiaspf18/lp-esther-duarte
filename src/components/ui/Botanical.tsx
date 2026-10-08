import type { CSSProperties, SVGProps } from "react";

import { cn } from "@/lib/utils";

type BotanicalProps = SVGProps<SVGSVGElement> & { animated?: boolean };

const LINE = "fill-none stroke-current";

/** Folha única com nervura, no traço do monograma da logo. */
export function Leaf({ className, animated = true, ...props }: BotanicalProps) {
  const draw = animated ? "draw-line" : "";

  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={cn("overflow-visible", className)} {...props}>
      <path
        d="M14 106 C 14 56, 46 22, 104 14 C 100 70, 66 104, 14 106Z"
        pathLength={1}
        strokeWidth={1.6}
        strokeLinejoin="round"
        className={cn(LINE, draw)}
      />
      <path
        d="M14 106 C 36 76, 62 50, 98 20"
        pathLength={1}
        strokeWidth={1.2}
        strokeLinecap="round"
        className={cn(LINE, draw)}
        style={{ "--draw-delay": "900ms" } as CSSProperties}
      />
      {[0.3, 0.5, 0.7].map((t, i) => (
        <path
          key={t}
          d={`M${14 + (98 - 14) * t} ${106 - (106 - 20) * t} c 10 2, 18 0, 26 -8`}
          pathLength={1}
          strokeWidth={0.9}
          strokeLinecap="round"
          className={cn(LINE, draw)}
          style={{ "--draw-delay": `${1200 + i * 150}ms` } as CSSProperties}
        />
      ))}
    </svg>
  );
}

/** Broto com duas folhas (ecoa o topo do monograma ED). */
export function Sprout({ className, animated = true, ...props }: BotanicalProps) {
  const draw = animated ? "draw-line" : "";

  return (
    <svg viewBox="0 0 160 200" aria-hidden="true" className={cn("overflow-visible", className)} {...props}>
      <path
        d="M84 198 C 80 150, 78 110, 86 62"
        pathLength={1}
        strokeWidth={1.6}
        strokeLinecap="round"
        className={cn(LINE, draw)}
      />
      <path
        d="M86 62 C 60 66, 30 50, 20 18 C 54 16, 84 30, 86 62Z"
        pathLength={1}
        strokeWidth={1.4}
        strokeLinejoin="round"
        className={cn(LINE, draw)}
        style={{ "--draw-delay": "700ms" } as CSSProperties}
      />
      <path
        d="M86 62 C 96 32, 112 12, 140 2 C 146 36, 126 60, 86 62Z"
        pathLength={1}
        strokeWidth={1.4}
        strokeLinejoin="round"
        className={cn(LINE, draw)}
        style={{ "--draw-delay": "1000ms" } as CSSProperties}
      />
      <path
        d="M86 62 C 66 50, 46 36, 30 22 M86 62 C 100 42, 116 24, 134 10"
        pathLength={1}
        strokeWidth={1}
        strokeLinecap="round"
        className={cn(LINE, draw)}
        style={{ "--draw-delay": "1400ms" } as CSSProperties}
      />
    </svg>
  );
}

/** Arco fino (meia-lua): base de composição, usado como moldura discreta. */
export function Arc({ className, animated = true, ...props }: BotanicalProps) {
  const draw = animated ? "draw-line" : "";

  return (
    <svg viewBox="0 0 200 100" aria-hidden="true" className={cn("overflow-visible", className)} {...props}>
      <path
        d="M4 98 A 96 96 0 0 1 196 98"
        pathLength={1}
        strokeWidth={1.2}
        strokeLinecap="round"
        className={cn(LINE, draw)}
      />
    </svg>
  );
}
