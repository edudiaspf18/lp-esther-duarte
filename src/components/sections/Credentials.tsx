import { ATTENDANCE, CRN } from "@/data/content";

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

export function Credentials() {
  return (
    <section aria-label="Credenciais" className="border-y border-primary/25 py-12 md:py-16">
      <dl className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
        {CREDENTIALS.map((item) => (
          <div key={item.label} className="reveal border-l border-gold pl-5">
            <dt className="text-[11px] font-medium tracking-[0.28em] text-gold-ink uppercase">
              {item.label}
            </dt>
            <dd className="mt-2 font-heading text-xl leading-snug">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
