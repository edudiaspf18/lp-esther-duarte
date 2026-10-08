import { readConsent } from "@/lib/consent";

export interface UtmParams {
  source: string | null;
  medium: string | null;
  campaign: string | null;
}

/**
 * Dispara evento de lead (GA4 + Meta Pixel) no clique do WhatsApp.
 * No-op sem consentimento (LGPD) ou sem scripts carregados.
 *
 * @param origin Seção/botão de origem (ex: "Hero", "Card Serviço - Emagrecimento").
 * @param utm UTMs do anúncio, quando existirem.
 */
export function trackWhatsAppClick(origin: string, utm: UtmParams): void {
  if (readConsent() !== "granted") return;

  window.gtag?.("event", "generate_lead", {
    method: "WhatsApp",
    origin_section: origin,
    campaign_source: utm.source ?? "organico",
    campaign_medium: utm.medium ?? "direto",
    campaign_name: utm.campaign ?? "nenhuma",
  });

  window.fbq?.("track", "Lead", {
    content_name: origin,
    campaign_source: utm.source ?? "organico",
  });
}
