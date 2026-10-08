// Gera as capturas de docs/preview/ usadas no README. Uso: npm run previa
// Requisito: build pronto (`npm run build`) e Chromium do Playwright (`npx playwright install chromium`).
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const CONFIG = {
  consentKey: "lp-esther:cookie-consent",
  consentValue: "denied",
  background: "#faf8f3",
  sections: [
    ["#servicos", "servicos"],
    ["#para-quem", "para-quem"],
    ["#avaliacao-fisica", "avaliacao-fisica"],
    ["#consulta", "consulta"],
    ["#sobre", "sobre"],
    ["#duvidas", "duvidas"],
  ],
  mobileSection: "#servicos",
};

const PORT = 3999;
const BASE = `http://localhost:${PORT}`;
const OUT = path.resolve("docs/preview");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {}
    await sleep(1000);
  }
  throw new Error("servidor não respondeu em 60 s");
}

async function prepare(page) {
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.evaluate(([key, value]) => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }, [CONFIG.consentKey, CONFIG.consentValue]);
  await page.reload({ waitUntil: "networkidle" });
  await sleep(1500);
}

async function scrollTo(page, selector) {
  await page.evaluate((s) => {
    const el = document.querySelector(s);
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "instant" });
  }, selector);
  await sleep(1400);
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore" });
  try {
    await waitForServer();
    const browser = await chromium.launch();

    // Desktop: 1440 px capturado em escala 0.8333 = imagem final de 1200 px.
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1200 / 1440 });
    await prepare(desktop);
    await desktop.screenshot({ path: path.join(OUT, "hero.png") });
    for (const [selector, name] of CONFIG.sections) {
      await scrollTo(desktop, selector);
      await desktop.screenshot({ path: path.join(OUT, `${name}.png`) });
    }
    await desktop.close();

    // Mobile: duas telas (hero e a seção escolhida) lado a lado.
    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    await prepare(mobile);
    const first = await mobile.screenshot();
    await scrollTo(mobile, CONFIG.mobileSection);
    const second = await mobile.screenshot();
    await mobile.close();

    const composer = await browser.newPage({ viewport: { width: 1600, height: 1688 } });
    await composer.setContent(
      `<body style="margin:0;background:${CONFIG.background};display:flex;gap:40px">` +
        `<img src="data:image/png;base64,${first.toString("base64")}" width="780" height="1688">` +
        `<img src="data:image/png;base64,${second.toString("base64")}" width="780" height="1688"></body>`,
    );
    await composer.screenshot({ path: path.join(OUT, "mobile.png") });
    await composer.close();

    await browser.close();
    console.log(`prévias geradas em ${OUT}`);
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
