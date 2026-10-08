import { useSyncExternalStore } from "react";

// 'loading' = render no servidor / hidratação (banner não pisca para quem já respondeu)
export type Consent = "loading" | "unknown" | "granted" | "denied";

const STORAGE_KEY = "lp-esther:cookie-consent";
const listeners = new Set<() => void>();

/** Revoga o consentimento nos scripts já carregados na página (GA4 e Meta Pixel). */
function revokeTracking(): void {
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.fbq?.("consent", "revoke");
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "unknown";
  } catch {
    return "unknown";
  }
}

function getServerSnapshot(): Consent {
  return "loading";
}

export function setConsent(value: "granted" | "denied"): void {
  if (value === "denied") revokeTracking();
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage bloqueado (modo privado): escolha vale só até recarregar
  }
  listeners.forEach((listener) => listener());
}

/** Apaga a escolha e reabre o banner (heurística: controle do usuário). */
export function resetConsent(): void {
  revokeTracking();
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage bloqueado: nada a limpar
  }
  listeners.forEach((listener) => listener());
}

export function readConsent(): Consent {
  if (typeof window === "undefined") return "loading";
  return getSnapshot();
}

export function useConsent(): Consent {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
