import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final" className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 rounded-3xl bg-primary px-6 py-12 text-primary-foreground md:grid-cols-12 md:items-center md:px-12 md:py-16">
          <div className="md:col-span-8">
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold-light uppercase">Agenda aberta</p>
            <h2 id="cta-final" className="text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
              Está na hora de transformar os seus hábitos.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Chame a Esther no WhatsApp e combine o melhor dia e horário para a sua primeira consulta online,
              de onde você estiver.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="CTA final" variant="light">
              Quero Conquistar Resultados
            </WhatsAppButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
