"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ArrowLeft, Plus } from "lucide-react";
import { m } from "motion/react";

import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SERVICES_SECTION, type Service } from "@/data/content";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const FACE =
  "absolute inset-0 flex flex-col rounded-2xl border border-border bg-card p-6 [backface-visibility:hidden] md:p-7";

/**
 * Cartão de serviço que vira (flip 3D) ao clicar: frente com ícone, nome e resumo;
 * verso com "para quem faz sentido" e o botão do WhatsApp (mensagem com o serviço).
 * A face escondida fica `inert`/`aria-hidden`; o foco acompanha a virada.
 */
export function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const back = useRef<HTMLDivElement>(null);
  const moreButton = useRef<HTMLButtonElement>(null);
  const detailId = `detalhe-servico-${service.id}`;

  function show() {
    flushSync(() => setOpen(true));
    back.current?.focus();
  }

  function hide() {
    flushSync(() => setOpen(false));
    moreButton.current?.focus();
  }

  return (
    <article className="relative h-[21rem] [perspective:1400px]">
      <m.div
        className="relative size-full [transform-style:preserve-3d]"
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT }}
      >
        <div className={cn(FACE, "justify-between")} aria-hidden={open} inert={open}>
          <div>
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-muted text-gold-ink">
              <ServiceIcon name={service.icon} className="size-5" />
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
          <button
            ref={moreButton}
            type="button"
            onClick={show}
            aria-expanded={open}
            aria-controls={detailId}
            aria-label={`${SERVICES_SECTION.more} sobre ${service.title}`}
            className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-medium text-primary transition-all duration-200 hover:text-gold-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {SERVICES_SECTION.more}
            <Plus className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div
          id={detailId}
          ref={back}
          tabIndex={-1}
          className={cn(FACE, "justify-between overflow-y-auto outline-none [transform:rotateY(180deg)]")}
          aria-hidden={!open}
          inert={!open}
        >
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-gold-ink uppercase">
              {SERVICES_SECTION.forWhomTitle}
            </p>
            <p className="mt-3 leading-relaxed">{service.forWhom}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <WhatsAppButton
              message={service.message}
              origin={`Card Serviço - ${service.title}`}
              className="h-11 px-5 text-sm"
            >
              {SERVICES_SECTION.cta}
            </WhatsAppButton>
            <button
              type="button"
              onClick={hide}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {SERVICES_SECTION.back}
            </button>
          </div>
        </div>
      </m.div>
    </article>
  );
}
