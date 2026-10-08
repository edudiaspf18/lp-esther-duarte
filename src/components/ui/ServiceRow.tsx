import { ArrowRight } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Service } from "@/data/content";

interface ServiceRowProps {
  service: Service;
  index: number;
}

/** Linha de índice editorial: no hover inverte para o verde-floresta da marca. */
export function ServiceRow({ service, index }: ServiceRowProps) {
  return (
    <article className="group grid gap-4 border-b border-primary/25 px-4 py-8 transition-all duration-300 ease-in-out hover:bg-primary md:grid-cols-12 md:items-center md:gap-8 md:px-6 md:py-10">
      <span className="text-xs font-medium tracking-[0.3em] text-gold-ink transition-all duration-300 group-hover:text-gold-light md:col-span-1">
        0{index + 1}
      </span>
      <h3 className="text-3xl leading-tight font-medium transition-all duration-300 group-hover:text-primary-foreground break-words md:col-span-4 md:text-3xl lg:text-4xl">
        {service.title}
      </h3>
      <p className="leading-relaxed text-muted-foreground transition-all duration-300 group-hover:text-primary-foreground/80 md:col-span-5">
        {service.description}
      </p>
      <div className="md:col-span-2 md:justify-self-end">
        <WhatsAppButton
          message={service.message}
          origin={`Card Serviço - ${service.title}`}
          variant="link"
          className="group-hover:text-gold-light group-hover:decoration-gold-light"
        >
          Agendar
          <ArrowRight
            className="size-4 transition-all duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </WhatsAppButton>
      </div>
    </article>
  );
}
