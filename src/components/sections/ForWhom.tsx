import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FOR_WHOM as DATA, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";
import { STAGGER } from "@/lib/motion";

/** Para quem é o acompanhamento (perfis com ícone) + painel escuro com o que o paciente recebe. */
export function ForWhom() {
  return (
    <section id="para-quem" className="border-y border-border bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">{DATA.eyebrow}</p>
          <h2 className="text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">{DATA.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{DATA.intro}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-[1.15fr_0.85fr]">
          <ol className="grid gap-4 sm:grid-cols-2">
            {DATA.profiles.map((profile, index) => (
              <Reveal key={profile.id} delay={index * STAGGER}>
                <li className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-gold/60">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-muted text-gold-ink">
                    <ServiceIcon name={profile.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{profile.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{profile.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={STAGGER * 2}>
            <aside className="flex h-full flex-col rounded-2xl bg-primary p-7 text-primary-foreground md:p-9">
              <h3 className="text-2xl font-semibold tracking-tight">{DATA.deliverablesTitle}</h3>
              <ul className="mt-6 space-y-3.5 text-sm leading-relaxed">
                {DATA.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-light" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="Para quem é" variant="light">
                  {DATA.cta}
                </WhatsAppButton>
                <p className="mt-5 text-xs leading-relaxed text-primary-foreground/60">{DATA.note}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
