import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports a complete portfolio page", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
  assert.match(html, /Douglas Soares/);
  assert.match(html, /Software que conecta/);
  assert.match(html, /Intelbras Secure Face/);
  assert.match(html, /Case confidencial/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("includes share and crawler assets", async () => {
  await Promise.all([
    access(new URL("../dist/client/og.png", import.meta.url)),
    access(new URL("../dist/client/robots.txt", import.meta.url)),
    access(new URL("../dist/client/sitemap.xml", import.meta.url)),
  ]);
});
