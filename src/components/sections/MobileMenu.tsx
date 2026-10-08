"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { NAV_LINKS } from "@/data/content";
import { INSTAGRAM_URL } from "@/lib/env";

/** Menu mobile (único pedaço do Header que precisa de estado). */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Abrir menu"
        className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-200 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-background p-8">
        <SheetTitle className="font-heading text-2xl font-semibold tracking-tight">Menu</SheetTitle>
        <nav aria-label="Principal" className="mt-6 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-heading text-xl font-medium tracking-tight transition-all duration-200 hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border-b border-border py-4 font-heading text-xl font-medium tracking-tight transition-all duration-200 hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring"
          >
            <InstagramIcon className="size-6" />
            Instagram
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
