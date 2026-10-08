import Image from "next/image";

import { Leaf } from "@/components/ui/Botanical";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ABOUT, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:items-center md:gap-8 md:px-8">
        <div className="md:col-span-6">
          <p className="reveal mb-5 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
            {ABOUT.eyebrow}
          </p>
          <h2 className="reveal text-5xl leading-[1] font-medium break-words md:text-6xl lg:text-7xl">{ABOUT.title}</h2>

          <blockquote className="reveal mt-10 border-l border-gold pl-6 font-heading text-2xl leading-snug font-normal text-primary italic md:text-3xl">
            {ABOUT.quote}
          </blockquote>

          <div className="reveal mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="reveal mt-10 grid border-t border-primary/25 sm:grid-cols-3">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label} className="border-b border-primary/25 py-4 sm:border-b-0 sm:pr-4 sm:pt-5">
                <dt className="text-[11px] font-medium tracking-[0.28em] text-gold-ink uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-heading text-xl leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <WhatsAppButton
            message={WHATSAPP_GENERIC_MESSAGE}
            origin="Sobre"
            className="mt-10"
          >
            Falar com a Esther
          </WhatsAppButton>
        </div>

        <figure className="reveal relative md:col-span-5 md:col-start-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold md:-translate-x-5 md:translate-y-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden bg-primary">
            <Image
              src="/images/sobre-esther.webp"
              alt="Esther Duarte, nutricionista, sorrindo, em retrato de cintura para cima"
              fill
              sizes="(min-width: 768px) 38vw, 90vw"
              className="object-cover object-[50%_25%] transition-all duration-700 ease-in-out hover:scale-[1.03]"
            />
          </div>
          <Leaf
            animated={false}
            className="absolute -right-4 -bottom-10 z-10 size-24 text-gold md:-right-8 md:size-32"
          />
        </figure>
      </div>
    </section>
  );
}
