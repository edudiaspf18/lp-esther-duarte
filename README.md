# LP Esther Duarte · Nutricionista

Landing page de conversão da nutricionista **Esther Duarte** (Anápolis-GO, CRN-1 | 27592). Atendimento **online** para todo o Brasil, com **avaliação física presencial** em Anápolis. O objetivo é gerar autoridade e levar o visitante a agendar a consulta pelo WhatsApp.

> Slogan (H1 e logo): **"Transformando hábitos, conquistando resultados!"**

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (base-nova) + lucide-react
- Fontes `next/font`: Manrope (títulos) e Inter (texto e rótulos)
- `motion` (animações: aparecer ao rolar, linha do tempo, halo do retrato, selo giratório, cartões que viram)
- Deploy self-hosted: VPS Ubuntu + PM2 + Nginx + Certbot + GitHub Actions

## Rodando localmente

```bash
npm install
cp .env.example .env   # ajuste as variáveis se necessário
npm run dev            # http://localhost:3000
```

Outros scripts:

| Comando | O que faz |
|---|---|
| `npm run build` | build de produção |
| `npm run start` | serve o build |
| `npm run lint` | ESLint |
| `npx next typegen && npx tsc --noEmit` | checagem de tipos (typegen gera `LayoutProps`) |

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, OG, sitemap) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp com DDI, só dígitos (ex.: `5562999999999`) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Link do Instagram |
| `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` | Link do perfil no Google Business (Maps). Entra no JSON-LD como `sameAs`. Vazio = fora |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token do Google Search Console (`google-site-verification`). Vazio = sem a tag |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager (`GTM-XXXXXXX`). Vazio = desligado |
| `NEXT_PUBLIC_GA_ID` | ID do GA4 (carregado direto, sem GTM). Vazio = desligado |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel. Vazio = desligado |

## Estrutura

```
src/
├── app/                 layout, página, privacidade, sitemap, robots, ícones
├── components/
│   ├── sections/        Header, Hero, Marquee, Services, ForWhom, PhysicalAssessment, Process, About, Credentials, FAQ, InstagramStrip, FinalCta, Footer
│   ├── motion/          Reveal, RevealedTitle, PortraitFrame, AnimatedJourney, ServiceCard/ServicesCarousel, FactsTrack, ScrollProgress
│   ├── ui/              shadcn (button, accordion, sheet) + RotatingBadge + ServiceIcon
│   ├── WhatsAppButton   link wa.me com mensagem dinâmica, UTM e tracking
│   ├── FloatingWhatsApp botão fixo
│   ├── CookieConsent    banner LGPD
│   └── TrackingScripts  GA4 + Meta Pixel (só após aceite)
├── data/content.ts      marca, textos, serviços, perfis, FAQ, formas de atendimento
├── lib/                 env, utils (WhatsApp), consent, tracking
└── types/global.d.ts    tipos de window.gtag / window.fbq
```

## Marca

- `public/images/logo.svg`: logo completa vetorizada (monograma ED + nome + CRN + slogan).
- `public/images/monograma.svg`: só o monograma ED. Os PNGs (`monograma.png`, `monograma-claro.png`, ícones, OG) são rasterizados a partir dele.
- Original (mockup JPEG) em `logo/`; fotos originais em `imagens/`. Ambos ficam fora do repositório.
- Paleta em `src/app/globals.css`: verde-floresta (`--primary`) + marfim (`--background`) + dourado (`--gold*`), tirada da logo. Cantos arredondados (`--radius: 1rem`), cartões brancos com borda de 1px.

## Como funciona

- **WhatsApp com mensagem pronta:** cada botão monta `https://wa.me/<número>?text=...`. Os cards de serviço levam o nome do serviço na mensagem.
- **UTM:** `?utm_source=instagram&utm_medium=stories&utm_campaign=agenda_aberta` é lido no cliente. A origem entra na mensagem ("Vim pelo seu Instagram!") e nos eventos de lead.
- **LGPD:** GTM, GA4 e Meta Pixel só carregam depois do "Aceitar" no banner. A escolha fica no `localStorage`. Sem consentimento, o evento de clique não dispara.
- **Lead:** cada clique no WhatsApp dispara `generate_lead` (GA4), `Lead` (Pixel) e `whatsapp_click` no `dataLayer` (para tags do GTM), com a seção de origem e as UTMs.
- **Animações:** título palavra por palavra e faixa de fatos em CSS puro; `motion` (LazyMotion) para aparecer ao rolar, linha do tempo que se desenha, halo do retrato, selo giratório e cartões de serviço que viram; carrossel com inclinação via `animation-timeline: view(inline)`. `prefers-reduced-motion` desliga tudo.
- **SEO:** metadata + Open Graph + keywords, JSON-LD `MedicalBusiness` (endereço Anápolis, área Brasil, `sameAs` Instagram e Google Business) e `FAQPage`, `sitemap.xml`, `robots.txt`, `manifest`, verificação do Search Console por env, HTML semântico com um único `h1`.
- **Google Business Profile:** não é configurado no site; crie o perfil em business.google.com com o mesmo nome, telefone e site (NAP igual ao do rodapé) e cole o link do Maps em `NEXT_PUBLIC_GOOGLE_BUSINESS_URL`.

## Conteúdo pendente antes de publicar

- Confirmar o domínio final (`NEXT_PUBLIC_SITE_URL` em `.env` e `src/lib/env.ts`).
- Confirmar os textos da seção "Sobre" (`ABOUT` em `src/data/content.ts`) e o local da avaliação física presencial em Anápolis-GO.
- Depoimentos reais autorizados em `TESTIMONIALS` (a seção fica oculta enquanto vazio).
- IDs do GTM, GA4 e Meta Pixel; link do Google Business e token do Search Console.

## Deploy (VPS)

Ver [`DEPLOY.md`](DEPLOY.md). Resumo: PM2 (`landing-esther`) + Nginx como proxy reverso 80/443 → `localhost:3000`, certificado via Certbot, e GitHub Actions fazendo `git pull → npm ci → build → pm2 reload` a cada push na `main`.
