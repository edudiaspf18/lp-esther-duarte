import Image from "next/image";

import heroPhoto from "../../../public/images/hero-esther.webp";
import { ArrowDown, MapPin, Video } from "lucide-react";

import { PortraitFrame } from "@/components/motion/PortraitFrame";
import { RevealedTitle } from "@/components/motion/RevealedTitle";
import { RotatingBadge } from "@/components/ui/RotatingBadge";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BRAND, CRN, HERO, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

const MODE_ICONS = { online: Video, presencial: MapPin } as const;

/**
 * Primeira dobra: título revelado palavra por palavra, subtítulo e CTA à esquerda;
 * retrato com halo dourado e selo giratório à direita (abaixo, no celular). O retrato é o LCP.
 */
export function Hero() {
  return (
    <section id="topo" aria-labelledby="titulo-hero" className="overflow-x-clip">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-10 pb-16 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="rise-in flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">
            <span>{HERO.eyebrow}</span>
            {CRN ? (
              <>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="whitespace-nowrap">{CRN}</span>
              </>
            ) : null}
          </p>
          <RevealedTitle
            id="titulo-hero"
            initialDelay={0.08}
            parts={[
              { text: HERO.titleBefore },
              { text: HERO.titleEmphasis, className: "text-gold-ink" },
            ]}
            className="mt-5 text-[clamp(2.5rem,10.5vw,3.2rem)] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.6rem]"
          />
          <p className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground [--rise-delay:500ms]">
            {HERO.subtitle}
          </p>

          <div className="rise-in mt-8 flex flex-col gap-4 [--rise-delay:620ms] sm:flex-row sm:items-center">
            <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="Hero">
              {HERO.primaryCta}
            </WhatsAppButton>
            <a
              href="#servicos"
              className="group inline-flex min-h-11 items-center justify-center gap-2 px-2 text-sm font-medium text-primary transition-all duration-200 ease-in-out hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring"
            >
              {HERO.secondaryCta}
              <ArrowDown className="size-4 transition-all duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          {/* Duas formas de atendimento: o diferencial do cenário (online + avaliação presencial) */}
          <dl className="rise-in mt-10 grid gap-3 [--rise-delay:740ms] sm:grid-cols-2">
            {HERO.modes.map((mode) => {
              const Icon = MODE_ICONS[mode.id];
              return (
                <div key={mode.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <dt className="flex items-center gap-2 text-sm font-semibold">
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-muted text-gold-ink">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    {mode.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{mode.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-md lg:mx-0 lg:justify-self-end">
          <PortraitFrame>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/30 bg-primary">
              <Image
                src={heroPhoto}
                alt="Esther Duarte, nutricionista, de jaleco branco, sorrindo"
                fill
                placeholder="blur"
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 448px, 90vw"
                className="object-cover object-[50%_18%]"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-background/90 px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur-sm">
                {BRAND.name}
                <span className="text-[10px] font-medium tracking-[0.2em] text-gold-ink">{BRAND.role}</span>
              </figcaption>
            </figure>
          </PortraitFrame>
          <RotatingBadge text={HERO.badge} className="absolute -top-8 -right-2 sm:-right-6 md:-top-10 md:-right-10" />
        </div>
      </div>
    </section>
  );
}
