import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidade",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 md:py-24">
      <Link
        href="/"
        className="text-sm font-bold text-gold-ink underline underline-offset-4 transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        Voltar ao site
      </Link>
      <h1 className="mt-8 text-5xl font-medium">Política de privacidade</h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Este site é a página de apresentação da nutricionista Esther Duarte e
          existe para facilitar o agendamento de consultas pelo WhatsApp.
        </p>
        <h2 className="text-3xl font-medium text-foreground">O que coletamos</h2>
        <p>
          O site não possui formulários nem armazena dados pessoais em servidor.
          Ao clicar em um botão de WhatsApp, a conversa acontece diretamente no
          aplicativo, com as regras de privacidade dele.
        </p>
        <h2 className="text-3xl font-medium text-foreground">Cookies de medição</h2>
        <p>
          Com o seu consentimento, usamos Google Analytics e Meta Pixel para
          entender de onde vêm as visitas e quais botões são clicados. Sem o seu
          aceite, esses scripts não são carregados. Você pode recusar sem perder
          nenhuma funcionalidade do site. Para rever a escolha, use o botão
          &ldquo;Gerenciar cookies&rdquo; no rodapé do site.
        </p>
        <h2 className="text-3xl font-medium text-foreground">Seus direitos (LGPD)</h2>
        <p>
          Você pode solicitar informações, correção ou exclusão de dados
          pessoais a qualquer momento pelo WhatsApp ou Instagram da profissional.
        </p>
      </div>
    </main>
  );
}
