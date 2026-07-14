import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports a complete portfolio page", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
  assert.match(html, /Douglas Soares/);
  assert.match(html, /Conecto/);
  assert.match(html, /Secure Face/);
  assert.doesNotMatch(html, /Intelbras Secure Face/);
  assert.match(html, /images\/secure-face-interface\.png/);
  assert.match(html, /Servidor de eventos - multimo/);
  assert.match(html, /images\/multimo-events\.png/);
  assert.match(html, /images\/multimo-settings\.png/);
  assert.match(html, /Case confidencial/);
  assert.doesNotMatch(html, /Outros projetos públicos|Access Control Server|Catálogo PHP MVC|My Money/);
  assert.doesNotMatch(html, /Komlog|2016 — 2017/);
  assert.match(html, /https:\/\/wa\.me\/5548996940124/);
  assert.match(html, /class="back-to-top"/);
  assert.match(html, /Remoto · disponível globalmente/);
  assert.doesNotMatch(html, /Florianópolis|FLN · BR/);
  assert.doesNotMatch(html, /Aberto a novas oportunidades/);
  assert.match(html, /class="button secondary" href="#contact">Vamos conversar/);
  assert.match(html, /href="curriculo-douglas-soares\.pdf"/);
  assert.match(html, /download="Douglas-Soares-Curriculo\.pdf"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
  assert.ok(html.indexOf("Trajetória") < html.indexOf("Trabalhos selecionados"));
});

test("includes share and crawler assets", async () => {
  await Promise.all([
    access(new URL("../dist/client/og-techblue.png", import.meta.url)),
    access(new URL("../dist/client/robots.txt", import.meta.url)),
    access(new URL("../dist/client/sitemap.xml", import.meta.url)),
    access(new URL("../dist/client/curriculo-douglas-soares.pdf", import.meta.url)),
  ]);
});

test("uses the requested mobile content order", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.profile-photo\{order:1;/);
  assert.match(css, /\.hero-content\{order:2\}/);
  assert.match(css, /\.project-content h3\{order:1;/);
  assert.match(css, /\.project-type\{order:3;/);
});

test("internal navigation avoids blocking hash animations", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(page, /function navigateToSection/);
  assert.match(page, /navigateToSection\("work"\)/);
  assert.match(page, /navigateToSection\("contact"\)/);
  assert.doesNotMatch(css, /html \{ scroll-behavior: smooth;/);
});
