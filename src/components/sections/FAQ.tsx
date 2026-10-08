import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ as FAQ_ITEMS } from "@/data/content";

export function FAQ() {
  return (
    <section id="duvidas" className="border-t border-border bg-muted/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <Reveal className="md:col-span-4">
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">Dúvidas frequentes</p>
          <h2 className="text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Antes de agendar
          </h2>
        </Reveal>

        <Reveal className="md:col-span-8">
          <Accordion className="rounded-2xl border border-border bg-card px-6 md:px-8">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-border last:border-b-0">
                <AccordionTrigger className="py-5 text-left text-base font-semibold tracking-tight md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
