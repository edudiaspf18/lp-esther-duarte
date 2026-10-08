import { Reveal } from "@/components/motion/Reveal";
import { ServicesCarousel } from "@/components/motion/ServicesCarousel";
import { SERVICES, SERVICES_SECTION as DATA } from "@/data/content";

/** Especialidades em cartões que viram: carrossel no celular, grade de 3 colunas no desktop. */
export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">{DATA.eyebrow}</p>
          <h2 className="text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">{DATA.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{DATA.intro}</p>
        </Reveal>
        <Reveal className="mt-8 md:mt-12">
          <ServicesCarousel services={SERVICES} />
        </Reveal>
      </div>
    </section>
  );
}
