import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:items-end md:gap-8 md:px-8">
        <div className="md:col-span-8">
          <p className="mb-4 text-xs font-medium tracking-[0.32em] text-gold-light uppercase">
            Agenda aberta
          </p>
          <h2 id="cta-final" className="text-4xl leading-[1.02] font-medium text-balance break-words md:text-5xl lg:text-6xl">
            Está na hora de transformar os seus hábitos.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            Chame a Esther no WhatsApp e combine o melhor dia e horário para a sua
            primeira consulta online, de onde você estiver.
          </p>
        </div>
        <div className="md:col-span-4 md:justify-self-end">
          <WhatsAppButton
            message={WHATSAPP_GENERIC_MESSAGE}
            origin="CTA final"
            variant="light"
          >
            Quero Conquistar Resultados
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
