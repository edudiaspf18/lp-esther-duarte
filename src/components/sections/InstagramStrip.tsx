import { ArrowUpRight } from "lucide-react";

import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/env";

export function InstagramStrip() {
  return (
    <section aria-label="Instagram" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="reveal max-w-xl">
          <p className="mb-4 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
            No dia a dia
          </p>
          <h2 className="text-3xl leading-[1.1] font-medium text-balance break-words md:text-4xl">
            Dicas, rotina e bastidores no Instagram
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Acompanhe a Esther por lá e conheça melhor o cuidado com a alimentação.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-3 self-start rounded-full border border-primary/30 px-7 text-base text-primary transition-all duration-200 ease-in-out hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:self-auto"
        >
          <InstagramIcon className="size-5" />
          @{INSTAGRAM_HANDLE}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
