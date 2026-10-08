// Acesso literal a process.env.NEXT_PUBLIC_* é obrigatório: o Next só inlina assim no bundle do cliente.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.estherduartenutri.com.br";

// WhatsApp oficial (somente dígitos, com DDI)
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000"; // TODO (cliente): número real da Esther

export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  "https://www.instagram.com/estherduartenutri/";

/** @ exibido, derivado da URL do perfil */
export const INSTAGRAM_HANDLE =
  INSTAGRAM_URL.replace(/\/+$/, "").split("/").pop() ?? "";

// IDs entram em script inline: aceitar só o formato esperado (bloqueia injeção via .env)
const GA_ID_RAW = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const GA_ID = /^[A-Z0-9-]{4,20}$/.test(GA_ID_RAW) ? GA_ID_RAW : "";
const META_PIXEL_ID_RAW = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const META_PIXEL_ID = /^\d{5,20}$/.test(META_PIXEL_ID_RAW) ? META_PIXEL_ID_RAW : "";
