import { Check } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PLANS, PLANS_SECTION as DATA } from "@/data/content";

export function Plans() {
  return (
    <section id="planos" className="border-y border-border bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="mb-5 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
              {DATA.eyebrow}
            </p>
            <h2 className="text-4xl leading-[1.04] font-medium text-balance break-words md:text-5xl lg:text-6xl">
              {DATA.title}
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:self-end">
            {DATA.intro}
          </p>
        </div>

        <div className="reveal mt-14 max-w-2xl border-l border-gold pl-6 md:mt-20">
          <h3 className="text-xl font-normal md:text-2xl">{DATA.includedTitle}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{DATA.included}</p>
        </div>

        <ul className="mt-10 grid gap-px border border-primary/25 bg-primary/25 md:mt-12 md:grid-cols-3">
          {PLANS.map((plan, index) => (
            <li key={plan.id} className="reveal flex flex-col bg-muted p-8 md:p-10">
              <span className="font-heading text-sm tracking-[0.2em] text-gold-ink">
                0{index + 1} · {plan.tagline}
              </span>
              <h3 className="mt-4 text-3xl font-normal break-words">{plan.name}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{plan.description}</p>

              <ul className="mt-8 space-y-3 border-t border-primary/25 pt-8 text-sm">
                {plan.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={plan.message}
                origin={`Acompanhamento: ${plan.name}`}
                variant="outline"
                className="mt-10 w-full hover:border-primary hover:bg-primary hover:text-primary-foreground md:mt-auto"
              >
                {DATA.cta}
              </WhatsAppButton>
            </li>
          ))}
        </ul>

        <p className="reveal mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {DATA.note}
        </p>
      </div>
    </section>
  );
}
