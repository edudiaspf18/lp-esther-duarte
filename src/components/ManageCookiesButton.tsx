"use client";

import { resetConsent } from "@/lib/consent";

interface ManageCookiesButtonProps {
  className?: string;
}

/** Reabre o banner de cookies para o visitante mudar a escolha (LGPD). */
export function ManageCookiesButton({ className }: ManageCookiesButtonProps) {
  return (
    <button type="button" onClick={resetConsent} className={className}>
      Gerenciar cookies
    </button>
  );
}
