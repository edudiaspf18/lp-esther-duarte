import { BadgeCheck, CalendarClock, MapPin, MessageCircle, Ruler, Video } from "lucide-react";

import { FACTS, type Fact, type FactIcon } from "@/data/content";

const ICONS: Record<FactIcon, typeof BadgeCheck> = {
  registro: BadgeCheck,
  local: MapPin,
  online: Video,
  presencial: Ruler,
  agenda: CalendarClock,
  whatsapp: MessageCircle,
};

interface FactListProps {
  facts: readonly Fact[];
  decorative?: boolean;
}

/** Uma lista de fatos; a faixa renderiza duas iguais para o deslize contínuo. */
function FactList({ facts, decorative = false }: FactListProps) {
  return (
    <ul
      aria-hidden={decorative || undefined}
      className={
        decorative
          ? "flex shrink-0 items-center gap-10 pr-10 motion-reduce:hidden"
          : "flex shrink-0 items-center gap-10 pr-10 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3 motion-reduce:pr-0"
      }
    >
      {facts.map((fact) => {
        const Icon = ICONS[fact.icon];
        return (
          <li
            key={fact.text}
            className="flex items-center gap-3 font-heading text-xl whitespace-nowrap italic sm:text-2xl"
          >
            <Icon className="size-4 shrink-0 text-gold" aria-hidden="true" />
            {fact.text}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Faixa de fatos reais abaixo do hero (registro, cidade, formas de atendimento, agenda).
 * Desliza devagar em CSS puro e pausa no hover. Com movimento reduzido, fica parada e quebra em linhas.
 */
export function Marquee() {
  return (
    <section aria-label="Resumo do atendimento" className="overflow-hidden bg-primary py-4 text-primary-foreground md:py-5">
      <div className="flex w-max animate-marquee px-5 motion-reduce:w-full motion-reduce:animate-none hover:[animation-play-state:paused]">
        <FactList facts={FACTS} />
        <FactList facts={FACTS} decorative />
      </div>
    </section>
  );
}
