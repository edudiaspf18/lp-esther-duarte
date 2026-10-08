import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PHYSICAL_ASSESSMENT as DATA } from "@/data/content";

export function PhysicalAssessment() {
  return (
    <section id="avaliacao-fisica" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-5">
          <p className="reveal mb-5 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
            {DATA.eyebrow}
          </p>
          <h2 className="reveal text-4xl leading-[1.04] font-medium text-balance break-words md:text-5xl">
            {DATA.title}
          </h2>
          <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            {DATA.intro}
          </p>

          <p className="reveal mt-10 max-w-sm border-l border-gold pl-6 text-sm leading-relaxed text-muted-foreground">
            {DATA.note}
          </p>

          <WhatsAppButton
            message={DATA.message}
            origin="Avaliação física"
            className="mt-10"
          >
            Agendar avaliação física
          </WhatsAppButton>
        </div>

        <ol className="md:col-span-6 md:col-start-7">
          {DATA.steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal grid grid-cols-[3rem_1fr] gap-4 border-t border-primary/25 py-8 first:border-t-0 first:pt-0 md:py-10 md:first:pt-2"
            >
              <span className="font-heading text-sm tracking-[0.2em] text-gold-ink">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-2xl font-normal break-words md:text-3xl">{step.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
