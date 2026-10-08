"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ServiceCard } from "@/components/motion/ServiceCard";
import type { Service } from "@/data/content";
import { cn } from "@/lib/utils";

interface Drag {
  startX: number;
  startScroll: number;
  moved: boolean;
}

/**
 * Carrossel horizontal com snap no celular/tablet: arrastar (mouse), deslizar (toque), setas e
 * pontos; o cartão central fica reto e os vizinhos inclinam (CSS `tilt-card`).
 * Em telas largas (lg+) vira grade de 3 colunas, plana e sem controles.
 */
export function ServicesCarousel({ services }: { services: readonly Service[] }) {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef<Drag | null>(null);
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);

  function goTo(index: number) {
    const target = track.current?.children[index];
    if (!(target instanceof HTMLElement)) return;
    target.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  function onScroll(event: React.UIEvent<HTMLUListElement>) {
    const list = event.currentTarget;
    const center = list.scrollLeft + list.clientWidth / 2;
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;
    Array.from(list.children).forEach((child, index) => {
      if (!(child instanceof HTMLElement)) return;
      const distance = Math.abs(child.offsetLeft + child.offsetWidth / 2 - center);
      if (distance < best) {
        best = distance;
        nearest = index;
      }
    });
    if (nearest !== active) setActive(nearest);
  }

  function onPointerDown(event: React.PointerEvent<HTMLUListElement>) {
    if (event.pointerType !== "mouse") return;
    drag.current = { startX: event.clientX, startScroll: event.currentTarget.scrollLeft, moved: false };
  }

  function onPointerMove(event: React.PointerEvent<HTMLUListElement>) {
    const current = drag.current;
    if (!current) return;
    const delta = event.clientX - current.startX;
    if (!current.moved && Math.abs(delta) > 4) {
      current.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    if (current.moved) event.currentTarget.scrollLeft = current.startScroll - delta;
  }

  function onPointerUp(event: React.PointerEvent<HTMLUListElement>) {
    if (!drag.current?.moved) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);
    goTo(active);
  }

  function onPointerCancel(event: React.PointerEvent<HTMLUListElement>) {
    const moved = drag.current?.moved ?? false;
    drag.current = null;
    if (!moved) return;
    setDragging(false);
    goTo(active);
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function onClickCapture(event: React.MouseEvent<HTMLUListElement>) {
    const moved = drag.current?.moved ?? false;
    drag.current = null;
    if (!moved) return;
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className="relative">
      <ul
        ref={track}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClickCapture={onClickCapture}
        className={cn(
          "flex gap-5 overflow-x-auto px-[calc(50%-min(41vw,10rem))] py-6 [scrollbar-width:none] md:cursor-grab lg:grid lg:cursor-auto lg:grid-cols-3 lg:overflow-visible lg:px-0",
          dragging ? "snap-none cursor-grabbing select-none" : "snap-x snap-mandatory",
        )}
      >
        {services.map((service) => (
          <li
            key={service.id}
            className="tilt-card w-[min(82vw,20rem)] shrink-0 snap-center motion-reduce:animate-none lg:w-auto lg:[animation:none]"
          >
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-center gap-4 lg:hidden">
        <button
          type="button"
          onClick={() => goTo(Math.max(0, active - 1))}
          aria-label="Serviço anterior"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-200 hover:border-gold hover:text-gold-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <ol className="flex items-center gap-2" aria-label="Serviços">
          {services.map((service, index) => (
            <li key={service.id}>
              <button
                type="button"
                onClick={() => goTo(index)}
                aria-label={service.title}
                aria-current={index === active ? "true" : undefined}
                className={cn(
                  "block size-2.5 rounded-full transition-all duration-200",
                  index === active ? "scale-125 bg-gold" : "bg-border hover:bg-gold/60",
                )}
              />
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => goTo(Math.min(services.length - 1, active + 1))}
          aria-label="Próximo serviço"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-200 hover:border-gold hover:text-gold-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
