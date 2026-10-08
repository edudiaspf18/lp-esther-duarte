import Image from "next/image";
import { ArrowDown, MapPin, Video } from "lucide-react";

import { Leaf } from "@/components/ui/Botanical";
import { RotatingBadge } from "@/components/ui/RotatingBadge";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BRAND, CRN, HERO, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

const MODE_ICONS = { online: Video, presencial: MapPin } as const;

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <Leaf
        className="absolute bottom-8 left-[-2rem] hidden h-44 text-gold/35 md:block"
        strokeWidth={1}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-10 pb-20 md:grid-cols-12 md:gap-6 md:px-8 md:pt-16 md:pb-28">
        <div className="relative z-10 md:col-span-7 md:self-center">
          <p className="rise-in mb-7 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium tracking-[0.2em] text-gold-ink uppercase sm:tracking-[0.3em]">
            <span>{HERO.eyebrow}</span>
            {CRN ? (
              <>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="whitespace-nowrap">{CRN}</span>
              </>
            ) : null}
          </p>
          <h1 className="slide-in text-[clamp(2.6rem,12.5vw,3.4rem)] leading-[0.98] font-medium sm:text-6xl sm:text-balance lg:text-[5.6rem]">
            {HERO.titleBefore}{" "}
            <em className="font-normal text-gold-ink italic">{HERO.titleEmphasis}</em>
          </h1>
          <p className="rise-in mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground [--rise-delay:260ms]">
            {HERO.subtitle}
          </p>

          <div className="rise-in mt-10 flex flex-col gap-4 [--rise-delay:380ms] sm:flex-row sm:items-center">
            <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="Hero">
              {HERO.primaryCta}
            </WhatsAppButton>
            <a
              href="#servicos"
              className="group inline-flex min-h-11 items-center justify-center gap-2 px-2 text-sm font-medium tracking-wide text-primary transition-all duration-200 ease-in-out hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring"
            >
              {HERO.secondaryCta}
              <ArrowDown
                className="size-4 transition-all duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Duas formas de atendimento: o diferencial do cenário (online + avaliação presencial) */}
          <dl className="rise-in mt-12 grid gap-px border border-primary/20 bg-primary/20 [--rise-delay:500ms] sm:grid-cols-2">
            {HERO.modes.map((mode) => {
              const Icon = MODE_ICONS[mode.id];
              return (
                <div key={mode.id} className="bg-background p-5">
                  <dt className="flex items-center gap-2 text-xs font-medium tracking-[0.24em] text-gold-ink uppercase">
                    <Icon className="size-4 text-gold" aria-hidden="true" />
                    {mode.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{mode.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>

        <figure className="relative md:col-span-5 md:col-start-8 md:self-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 border border-gold md:translate-x-5 md:translate-y-5"
          />
          <div className="unveil relative aspect-[4/5] overflow-hidden bg-primary">
            <Image
              src="/images/hero-esther.webp"
              alt="Esther Duarte, nutricionista, de jaleco branco, sorrindo"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="settle object-cover object-[50%_18%]"
            />
          </div>
          <figcaption className="absolute bottom-0 left-0 z-10 -translate-x-3 translate-y-1/2 bg-background px-4 py-3 text-xs font-medium tracking-[0.28em] uppercase shadow-sm md:-translate-x-6">
            {BRAND.name}
            <span className="block text-[10px] tracking-[0.34em] text-gold-ink">{BRAND.role}</span>
          </figcaption>
          <RotatingBadge
            id="selo-hero"
            text={HERO.badge}
            className="absolute -top-8 -right-3 z-10 size-24 sm:-top-10 sm:-right-4 sm:size-28 md:-top-12 md:-right-10 md:size-36"
          />
        </figure>
      </div>
    </section>
  );
}
