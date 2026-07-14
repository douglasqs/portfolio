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
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
  assert.ok(html.indexOf("Trajetória") < html.indexOf("Trabalhos selecionados"));
});

test("includes share and crawler assets", async () => {
  await Promise.all([
    access(new URL("../dist/client/og-techblue.png", import.meta.url)),
    access(new URL("../dist/client/robots.txt", import.meta.url)),
    access(new URL("../dist/client/sitemap.xml", import.meta.url)),
  ]);
});

test("keeps the mobile introduction before the profile photo", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.hero-content \{ order: 1; \}/);
  assert.match(css, /\.hero-side \{ order: 2;/);
});
