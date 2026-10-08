import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ABOUT, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";
import { STAGGER } from "@/lib/motion";

/** Sobre: retrato em cartão arredondado à esquerda, história e fatos em cápsulas à direita. */
export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:items-center md:gap-8 md:px-8">
        <Reveal className="md:col-span-5">
          <figure className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] border border-gold/30 bg-primary md:max-w-none">
            <Image
              src="/images/sobre-esther.webp"
              alt="Esther Duarte, nutricionista, sorrindo, em retrato de cintura para cima"
              fill
              sizes="(min-width: 768px) 38vw, 90vw"
              className="object-cover object-[50%_25%]"
            />
          </figure>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">{ABOUT.eyebrow}</p>
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">{ABOUT.title}</h2>
            <p className="mt-6 border-l-2 border-gold pl-5 text-xl leading-snug font-medium text-primary md:text-2xl">
              {ABOUT.quote}
            </p>
          </Reveal>

          <Reveal delay={STAGGER} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={STAGGER * 2}>
            <dl className="mt-8 flex flex-wrap gap-3">
              {ABOUT.facts.map((fact) => (
                <div key={fact.label} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                  <dt className="inline text-muted-foreground">{fact.label}: </dt>
                  <dd className="inline font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="Sobre" className="mt-8">
              Falar com a Esther
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
