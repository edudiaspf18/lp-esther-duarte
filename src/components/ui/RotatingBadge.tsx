import { Sprout } from "@/components/ui/Botanical";
import { cn } from "@/lib/utils";

interface RotatingBadgeProps {
  id: string;
  text: string;
  className?: string;
}

/** Selo circular com texto girando devagar (CSS puro, para com movimento reduzido). Decorativo. */
export function RotatingBadge({ id, text, className }: RotatingBadgeProps) {
  const pathId = `${id}-path`;

  return (
    <div aria-hidden="true" className={cn("relative grid place-items-center", className)}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full animate-spin-slow motion-reduce:animate-none"
      >
        <defs>
          <path id={pathId} d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <circle cx="50" cy="50" r="49" className="fill-background stroke-gold/60" strokeWidth={0.6} />
        <text className="fill-foreground font-sans text-[7.2px] font-medium tracking-[0.26em] uppercase">
          <textPath href={`#${pathId}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <Sprout animated={false} className="relative h-[34%] text-gold" />
    </div>
  );
}
