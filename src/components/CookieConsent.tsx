"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { setConsent, useConsent } from "@/lib/consent";

/** Banner LGPD (RF07). Só aparece na primeira visita; escolha fica no localStorage. */
export function CookieConsent() {
  const consent = useConsent();

  if (consent !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl border border-border bg-card p-5 shadow-sm md:bottom-6 md:p-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Usamos cookies de medição para entender como o site é usado e melhorar
          o atendimento. Você escolhe. Saiba mais na{" "}
          <Link
            href="/privacidade"
            className="font-bold text-foreground underline underline-offset-4 transition-all duration-200 hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring"
          >
            política de privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button
            variant="outline"
            onClick={() => setConsent("denied")}
            className="h-10 flex-1 rounded-full px-5 transition-all duration-200 md:flex-none"
          >
            Recusar
          </Button>
          <Button
            onClick={() => setConsent("granted")}
            className="h-10 flex-1 rounded-full px-5 transition-all duration-200 md:flex-none"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
