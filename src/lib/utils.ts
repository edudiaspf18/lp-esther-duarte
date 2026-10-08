import type { UtmParams } from "@/lib/tracking";

export { cn } from "cn";

/** Monta a URL wa.me com mensagem pré-preenchida e codificada. */
export function generateWhatsAppLink(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/** Acrescenta a origem da campanha à mensagem, quando o visitante veio de anúncio/busca. */
export function buildMessage(base: string, utm: UtmParams): string {
  if (utm.source === "instagram") return `${base} (Vim pelo seu Instagram!)`;
  if (utm.source === "google") return `${base} (Te encontrei no Google!)`;
  return base;
}
