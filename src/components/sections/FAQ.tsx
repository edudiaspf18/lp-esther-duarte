import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ as FAQ_ITEMS } from "@/data/content";

export function FAQ() {
  return (
    <section id="duvidas" className="border-t border-border bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-4">
          <p className="mb-4 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
            Dúvidas frequentes
          </p>
          <h2 className="text-4xl leading-[1.05] font-medium text-balance md:text-5xl">
            Antes de agendar
          </h2>
        </div>

        <Accordion className="md:col-span-7 md:col-start-6">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-border">
              <AccordionTrigger className="py-5 font-heading text-xl font-normal md:text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
