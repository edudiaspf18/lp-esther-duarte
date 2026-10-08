import Image from "next/image";

import { AnimatedJourney } from "@/components/motion/AnimatedJourney";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PROCESS_SECTION, PROCESS_STEPS, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

/** Jornada da consulta online: foto fixa à esquerda, linha do tempo que se desenha ao rolar. */
export function Process() {
  return (
    <section id="consulta" className="border-y border-border bg-muted/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">{PROCESS_SECTION.eyebrow}</p>
          <h2 className="text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">{PROCESS_SECTION.title}</h2>
          <figure className="mt-8 max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/30 bg-primary">
              <Image
                src="/images/consulta-esther.webp"
                alt="Esther Duarte, nutricionista, em pé, ao ar livre"
                fill
                sizes="(min-width: 768px) 384px, 90vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <figcaption className="mt-3 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {PROCESS_SECTION.caption}
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <AnimatedJourney steps={PROCESS_STEPS} />
          <Reveal className="mt-12">
            <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="Como é a consulta online">
              Agendar Consulta Online
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
