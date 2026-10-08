import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-5 py-16 text-center">
      <Image
        src="/images/monograma.png"
        alt="Monograma ED de Esther Duarte"
        width={480}
        height={383}
        className="h-20 w-auto"
      />
      <p className="text-xs font-semibold tracking-[0.18em] text-gold-ink uppercase">Erro 404</p>
      <h1 className="text-4xl leading-tight tracking-tight text-balance md:text-5xl">
        Essa página não existe.
      </h1>
      <p className="text-base leading-relaxed text-muted-foreground">
        O endereço pode ter mudado ou estar digitado errado. Volte ao início para
        conhecer o atendimento da Esther e agendar sua consulta online.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants(),
          "h-12 gap-2 rounded-full px-7 text-base transition-all duration-200 ease-in-out hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Voltar ao início
      </Link>
    </main>
  );
}
