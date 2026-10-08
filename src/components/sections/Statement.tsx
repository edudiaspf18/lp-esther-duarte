import { Leaf, Sprout } from "@/components/ui/Botanical";
import { STATEMENT } from "@/data/content";

/** Manifesto tipográfico: a ideia central da marca em escala editorial. */
export function Statement() {
  return (
    <section aria-label={STATEMENT.eyebrow} className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:px-8">
        <p className="reveal text-xs font-medium tracking-[0.32em] text-gold-ink uppercase md:col-span-3 md:pt-4">
          {STATEMENT.eyebrow}
        </p>
        <p className="reveal font-heading text-4xl leading-[1.05] font-medium text-balance md:col-span-9 md:text-6xl lg:text-7xl">
          {STATEMENT.before}{" "}
          <em className="font-normal whitespace-nowrap text-gold-ink italic">{STATEMENT.emphasis}</em>{" "}
          {STATEMENT.after}
        </p>
        <div aria-hidden="true" className="flex items-end gap-8 text-gold md:col-span-9 md:col-start-4">
          <Leaf className="size-16 md:size-20" animated={false} />
          <Sprout className="h-20 md:h-24" animated={false} />
        </div>
      </div>
    </section>
  );
}
