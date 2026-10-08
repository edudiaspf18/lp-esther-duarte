import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/env";

export function InstagramStrip() {
  return (
    <section aria-label="Instagram" className="border-t border-border py-14 md:py-16">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">No dia a dia</p>
          <h2 className="text-2xl leading-tight tracking-tight text-balance md:text-3xl">
            Dicas, rotina e bastidores no Instagram
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Acompanhe a Esther por lá e conheça melhor o cuidado com a alimentação.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-3 self-start rounded-full border border-border bg-card px-6 text-base font-medium text-primary transition-all duration-200 ease-in-out hover:border-gold hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:self-auto"
        >
          <InstagramIcon className="size-5" />
          @{INSTAGRAM_HANDLE}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}
