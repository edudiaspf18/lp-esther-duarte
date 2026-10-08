"use client";

import { Suspense, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/env";
import { trackWhatsAppClick, type UtmParams } from "@/lib/tracking";
import { buildMessage, cn, generateWhatsAppLink } from "@/lib/utils";

type Variant = "solid" | "outline" | "link" | "light";

interface WhatsAppButtonProps {
  /** Texto-base da mensagem; a origem (UTM) é acrescentada automaticamente */
  message: string;
  /** Onde o botão está na página (vai para o evento de lead) */
  origin: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  solid:
    "h-12 rounded-full bg-primary px-7 text-base text-primary-foreground hover:bg-primary/90",
  outline:
    "h-12 rounded-full border-primary/30 bg-transparent px-7 text-base text-primary hover:bg-primary/5",
  light:
    "h-12 rounded-full bg-background px-7 text-base text-primary hover:bg-background/90",
  link: "h-auto min-h-11 gap-1.5 rounded-none border-0 bg-transparent p-0 hover:bg-transparent text-sm font-bold text-gold-ink underline decoration-gold/50 underline-offset-4 hover:decoration-gold-ink",
};

const BASE_CLASSES =
  "transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const EMPTY_UTM: UtmParams = { source: null, medium: null, campaign: null };

interface AnchorProps extends WhatsAppButtonProps {
  utm: UtmParams;
}

function WhatsAppAnchor({
  message,
  origin,
  children,
  variant = "solid",
  className,
  utm,
}: AnchorProps) {
  const href = generateWhatsAppLink(WHATSAPP_NUMBER, buildMessage(message, utm));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(origin, utm)}
      className={cn(
        buttonVariants({ variant: "default" }),
        BASE_CLASSES,
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

/** UTM vem da URL (não confiável): limita tamanho e caracteres antes de ir ao GA/Pixel */
function cleanUtm(value: string | null): string | null {
  if (!value) return null;
  const clean = value.replace(/[^\w\-.+ ]/g, "").slice(0, 60);
  return clean || null;
}

function WhatsAppWithUtm(props: WhatsAppButtonProps) {
  const searchParams = useSearchParams();
  const utm: UtmParams = {
    source: cleanUtm(searchParams.get("utm_source")),
    medium: cleanUtm(searchParams.get("utm_medium")),
    campaign: cleanUtm(searchParams.get("utm_campaign")),
  };
  return <WhatsAppAnchor {...props} utm={utm} />;
}

/** Botão de WhatsApp com mensagem dinâmica, UTM e tracking (RF02/RF03/RF05/RF06). */
export function WhatsAppButton(props: WhatsAppButtonProps) {
  return (
    <Suspense fallback={<WhatsAppAnchor {...props} utm={EMPTY_UTM} />}>
      <WhatsAppWithUtm {...props} />
    </Suspense>
  );
}
