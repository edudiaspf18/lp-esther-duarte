import { BadgeCheck, CalendarClock, MapPin, MessageCircle, Ruler, Video } from "lucide-react";

import { FactsTrack } from "@/components/motion/FactsTrack";
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
          ? "flex shrink-0 items-center gap-10 px-5 py-5 motion-reduce:hidden"
          : "flex shrink-0 items-center gap-10 px-5 py-5 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3"
      }
    >
      {facts.map((fact) => {
        const Icon = ICONS[fact.icon];
        return (
          <li key={fact.text} className="flex items-center gap-3 text-sm font-medium tracking-wide whitespace-nowrap">
            <Icon className="size-4 shrink-0 text-gold-light" aria-hidden="true" />
            {fact.text}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Faixa de fatos reais abaixo do hero (registro, cidade, formas de atendimento, agenda).
 * Desliza devagar (CSS puro; pausa no hover, no foco e pelo botão). Com movimento reduzido fica parada.
 */
export function Marquee() {
  return (
    <section aria-label="Resumo do atendimento" className="overflow-hidden bg-primary text-primary-foreground">
      <FactsTrack>
        <FactList facts={FACTS} />
        <FactList facts={FACTS} decorative />
      </FactsTrack>
    </section>
  );
}
