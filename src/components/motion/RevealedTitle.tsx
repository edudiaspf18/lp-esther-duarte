import type { ReactNode } from "react";

interface RevealedTitleProps {
  /** Partes do título; cada parte pode ter classe própria (ex.: destaque dourado). */
  parts: readonly { text: string; className?: string }[];
  id?: string;
  className?: string;
  as?: "h1" | "h2";
  /** Atraso inicial, em segundos. */
  initialDelay?: number;
}

/** Intervalo entre palavras, em segundos. */
const INTERVAL = 0.06;

/**
 * Título que aparece palavra por palavra. CSS puro (`animate-revelar-palavra`): sem JavaScript,
 * sem hidratação; `motion-reduce:animate-none` mostra tudo de uma vez. O texto fica inteiro no HTML.
 */
export function RevealedTitle({ parts, id, className, as: Tag = "h1", initialDelay = 0 }: RevealedTitleProps) {
  let index = 0;
  const nodes: ReactNode[] = [];
  parts.forEach((part, partIndex) => {
    const words = part.text.split(" ");
    words.forEach((word, wordIndex) => {
      const key = `${partIndex}-${wordIndex}`;
      nodes.push(
        <span key={key} className={part.className}>
          <span
            className="inline-block animate-revelar-palavra motion-reduce:animate-none"
            style={{ animationDelay: `${initialDelay + index * INTERVAL}s` }}
          >
            {word}
          </span>
          {wordIndex < words.length - 1 || partIndex < parts.length - 1 ? " " : ""}
        </span>,
      );
      index += 1;
    });
  });

  return (
    <Tag id={id} className={className}>
      {nodes}
    </Tag>
  );
}
