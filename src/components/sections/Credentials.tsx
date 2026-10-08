import { Reveal } from "@/components/motion/Reveal";
import { ATTENDANCE, CRN } from "@/data/content";
import { STAGGER } from "@/lib/motion";

interface Credential {
  label: string;
  value: string;
}

const CREDENTIALS: readonly Credential[] = [
  ...(CRN ? [{ label: "Registro", value: CRN }] : []),
  { label: "Formação", value: "Nutrição, graduada na UniEvangélica" },
  { label: "Consultas", value: "Online, por videochamada" },
  { label: "Avaliação física", value: "Presencial em Anápolis-GO" },
  { label: "Agenda", value: ATTENDANCE.hours },
];

/** Credenciais em cartões compactos. */
export function Credentials() {
  return (
    <section aria-label="Credenciais" className="pb-20 md:pb-28">
      <dl className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-5">
        {CREDENTIALS.map((item, index) => (
          <Reveal key={item.label} delay={index * STAGGER}>
            <div className="h-full rounded-2xl border border-border bg-card p-5">
              <dt className="text-[11px] font-medium tracking-[0.18em] text-gold-ink uppercase">{item.label}</dt>
              <dd className="mt-2 text-sm leading-snug font-semibold">{item.value}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
