import { MessageCircle } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

/** Botão fixo de WhatsApp (RF02). Server Component: só o botão interno é client. */
export function FloatingWhatsApp() {
  return (
    <div className="fixed right-4 bottom-4 z-40 md:right-6 md:bottom-6">
      <WhatsAppButton
        message={WHATSAPP_GENERIC_MESSAGE}
        origin="Botão flutuante"
        className="h-14 gap-2 px-5 shadow-sm md:px-6"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        <span className="hidden md:inline">Falar com a Esther</span>
        <span className="sr-only md:hidden">Falar com a Esther no WhatsApp</span>
      </WhatsAppButton>
    </div>
  );
}
