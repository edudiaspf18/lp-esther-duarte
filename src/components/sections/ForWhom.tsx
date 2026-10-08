import { Check } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FOR_WHOM as DATA, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

/** Para quem é o acompanhamento (perfis) + o que o paciente recebe. */
export function ForWhom() {
  return (
    <section id="para-quem" className="border-y border-border bg-muted py-24 md:py-32">
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

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-8">
          <ol className="grid gap-px border border-primary/25 bg-primary/25 sm:grid-cols-2 md:col-span-7">
            {DATA.profiles.map((profile, index) => (
              <li key={profile.id} className="reveal bg-muted p-7 md:p-8">
                <span className="font-heading text-sm tracking-[0.2em] text-gold-ink">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-2xl font-medium break-words md:text-3xl">{profile.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{profile.description}</p>
              </li>
            ))}
          </ol>

          <aside className="reveal md:col-span-4 md:col-start-9">
            <h3 className="border-l border-gold pl-6 text-2xl font-medium md:text-3xl">
              {DATA.deliverablesTitle}
            </h3>
            <ul className="mt-8 space-y-4 border-t border-primary/25 pt-8 text-sm leading-relaxed">
              {DATA.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton
              message={WHATSAPP_GENERIC_MESSAGE}
              origin="Para quem é"
              className="mt-10 w-full sm:w-auto"
            >
              {DATA.cta}
            </WhatsAppButton>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{DATA.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
