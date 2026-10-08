/**
 * Tokens de movimento da marca. Todo componente animado importa daqui,
 * para o site inteiro ter o mesmo ritmo: rápido, suave e sem quique.
 */

/** Durações em segundos: rápida (toque/hover), média (clique), lenta (aparecer ao rolar). */
export const DURATION = {
  fast: 0.15,
  medium: 0.25,
  slow: 0.6,
} as const;

/** Curva cubic-bezier de saída suave (desacelera no fim, sem ultrapassar o destino). */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Atraso, em segundos, entre itens de uma sequência. */
export const STAGGER = 0.08;
