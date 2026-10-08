import Image from "next/image";

import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { MobileMenu } from "@/components/sections/MobileMenu";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BRAND, NAV_LINKS, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";
import { INSTAGRAM_URL } from "@/lib/env";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#topo"
          aria-label={`${BRAND.name}, nutricionista: início`}
          className="flex items-center gap-3 transition-all duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src="/images/monograma.png"
            alt=""
            width={480}
            height={383}
            className="h-9 w-auto"
            priority
          />
          <span className="text-[13px] font-semibold tracking-[0.22em] whitespace-nowrap uppercase">
            {BRAND.name}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-4 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm whitespace-nowrap text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            <InstagramIcon className="size-4" />
            <span className="sr-only lg:not-sr-only">Instagram</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppButton
            message={WHATSAPP_GENERIC_MESSAGE}
            origin="Header"
            className="hidden h-10 px-5 text-sm md:inline-flex"
          >
            Agendar consulta
          </WhatsAppButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
