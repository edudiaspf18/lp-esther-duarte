# LP Esther Duarte · Nutricionista

Landing page de conversão da nutricionista **Esther Duarte** (Anápolis-GO, CRN-1 | 27592). Atendimento **online** para todo o Brasil, com **avaliação física presencial** em Anápolis. O objetivo é gerar autoridade e levar o visitante a agendar a consulta pelo WhatsApp.

> Slogan (H1 e logo): **"Transformando hábitos, conquistando resultados!"**

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (base-nova) + lucide-react
- Fontes `next/font`: Cormorant Garamond (títulos, a serifa da logo) e Montserrat (texto e rótulos)
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
| `NEXT_PUBLIC_GA_ID` | ID do GA4. Vazio = desligado |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel. Vazio = desligado |

## Estrutura

```
src/
├── app/                 layout, página, privacidade, sitemap, robots, ícones
├── components/
│   ├── sections/        Header, Hero, Marquee, Statement, Services, Plans, PhysicalAssessment, Process, About, Credentials, FAQ, InstagramStrip, FinalCta, Footer
│   ├── ui/              shadcn (button, accordion, sheet) + ServiceRow + Botanical (SVG)
│   ├── WhatsAppButton   link wa.me com mensagem dinâmica, UTM e tracking
│   ├── FloatingWhatsApp botão fixo
│   ├── CookieConsent    banner LGPD
│   └── TrackingScripts  GA4 + Meta Pixel (só após aceite)
├── data/content.ts      marca, textos, serviços, planos, FAQ, formas de atendimento
├── lib/                 env, utils (WhatsApp), consent, tracking
└── types/global.d.ts    tipos de window.gtag / window.fbq
```

## Marca

- `public/images/logo.svg`: logo completa vetorizada (monograma ED + nome + CRN + slogan).
- `public/images/monograma.svg`: só o monograma ED. Os PNGs (`monograma.png`, `monograma-claro.png`, ícones, OG) são rasterizados a partir dele.
- Original (mockup JPEG) em `logo/`; fotos originais em `imagens/`. Ambos ficam fora do repositório.
- Paleta em `src/app/globals.css`: verde-floresta (`--primary`) + marfim (`--background`) + dourado (`--gold*`), tirada da logo.

## Como funciona

- **WhatsApp com mensagem pronta:** cada botão monta `https://wa.me/<número>?text=...`. Os cards de serviço levam o nome do serviço na mensagem.
- **UTM:** `?utm_source=instagram&utm_medium=stories&utm_campaign=agenda_aberta` é lido no cliente. A origem entra na mensagem ("Vim pelo seu Instagram!") e nos eventos de lead.
- **LGPD:** GA4 e Meta Pixel só carregam depois do "Aceitar" no banner. A escolha fica no `localStorage`. Sem consentimento, o evento de clique não dispara.
- **Animações:** só CSS (`@utility` no `globals.css`): entrada no hero, revelação ao rolar com `animation-timeline: view()` (sem suporte = sem animação, conteúdo visível), marquee e traço desenhado. `prefers-reduced-motion` desliga tudo.
- **SEO:** metadata + Open Graph, JSON-LD (`MedicalBusiness`, área de atendimento Brasil), `sitemap.xml`, `robots.txt`, HTML semântico com um único `h1`.

## Conteúdo pendente antes de publicar

- Número real do WhatsApp, Instagram e domínio (`.env` e `src/lib/env.ts`).
- Confirmar os textos da seção "Sobre" (`ABOUT` em `src/data/content.ts`) e o local da avaliação física presencial em Anápolis-GO.
- Depoimentos reais autorizados em `TESTIMONIALS` (a seção fica oculta enquanto vazio).
- IDs do GA4 e do Meta Pixel.

## Deploy (VPS)

Ver [`DEPLOY.md`](DEPLOY.md). Resumo: PM2 (`landing-esther`) + Nginx como proxy reverso 80/443 → `localhost:3000`, certificado via Certbot, e GitHub Actions fazendo `git pull → npm ci → build → pm2 reload` a cada push na `main`.
