import { ServiceRow } from "@/components/ui/ServiceRow";
import { SERVICES } from "@/data/content";

export function Services() {
  return (
    <section id="servicos" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="mb-5 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
              Especialidades
            </p>
            <h2 className="text-4xl leading-[1.04] font-medium text-balance break-words md:text-5xl lg:text-6xl">
              Cuidado nutricional para cada momento da sua vida
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:self-end">
            Consultas online para todo o Brasil e avaliação física presencial quando fizer
            sentido: o plano é construído em cima do seu corpo e da sua rotina.
          </p>
        </div>

        <div className="mt-14 border-t border-primary/25 md:mt-20">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="reveal">
              <ServiceRow service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
