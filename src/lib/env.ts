// Acesso literal a process.env.NEXT_PUBLIC_* é obrigatório: o Next só inlina assim no bundle do cliente.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.estherduartenutri.com.br";

// WhatsApp oficial (somente dígitos, com DDI)
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5562993526881";

export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  "https://www.instagram.com/estherduarte_nutri/";

/** @ exibido, derivado da URL do perfil */
export const INSTAGRAM_HANDLE =
  INSTAGRAM_URL.replace(/\/+$/, "").split("/").pop() ?? "";

/** Perfil do Google Business (link "Compartilhar" do Google Maps). Vazio = fora do JSON-LD. */
const GOOGLE_BUSINESS_URL_RAW = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ?? "";
export const GOOGLE_BUSINESS_URL = /^https:\/\/(maps\.app\.goo\.gl|g\.co|www\.google\.com|maps\.google\.com|business\.google\.com)\//.test(
  GOOGLE_BUSINESS_URL_RAW,
)
  ? GOOGLE_BUSINESS_URL_RAW
  : "";

/** Token do Google Search Console (meta google-site-verification). Vazio = sem a tag. */
const GOOGLE_SITE_VERIFICATION_RAW = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
export const GOOGLE_SITE_VERIFICATION = /^[\w-]{10,100}$/.test(GOOGLE_SITE_VERIFICATION_RAW)
  ? GOOGLE_SITE_VERIFICATION_RAW
  : "";

// IDs entram em script inline: aceitar só o formato esperado (bloqueia injeção via .env)
const GTM_ID_RAW = process.env.NEXT_PUBLIC_GTM_ID ?? "";
export const GTM_ID = /^GTM-[A-Z0-9]{4,12}$/.test(GTM_ID_RAW) ? GTM_ID_RAW : "";
const GA_ID_RAW = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const GA_ID = /^[A-Z0-9-]{4,20}$/.test(GA_ID_RAW) ? GA_ID_RAW : "";
const META_PIXEL_ID_RAW = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const META_PIXEL_ID = /^\d{5,20}$/.test(META_PIXEL_ID_RAW) ? META_PIXEL_ID_RAW : "";
