import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PHYSICAL_ASSESSMENT as DATA } from "@/data/content";
import { STAGGER } from "@/lib/motion";

/** Avaliação física presencial: painel escuro com três cartões numerados. */
export function PhysicalAssessment() {
  return (
    <section id="avaliacao-fisica" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-3xl bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-5">
              <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold-light uppercase">{DATA.eyebrow}</p>
              <h2 className="text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">{DATA.title}</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/80">{DATA.intro}</p>
              <WhatsAppButton message={DATA.message} origin="Avaliação física" variant="light" className="mt-8">
                Agendar avaliação física
              </WhatsAppButton>
              <p className="mt-6 max-w-sm text-xs leading-relaxed text-primary-foreground/60">{DATA.note}</p>
            </Reveal>

            <ol className="grid gap-4 md:col-span-7 md:self-center">
              {DATA.steps.map((step, index) => (
                <Reveal key={step.title} delay={index * STAGGER}>
                  <li className="flex gap-5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-primary tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight md:text-xl">{step.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-primary-foreground/75">{step.description}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
