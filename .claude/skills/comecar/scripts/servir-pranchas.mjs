#!/usr/bin/env node
// Fase 3: serve SÓ a pasta projeto/pranchas/ em http://localhost:4321 para o Playwright
// fotografar as pranchas. Sem dependências, só em localhost, só leitura.
// Uso (na raiz do projeto, em segundo plano): node .claude/skills/comecar/scripts/servir-pranchas.mjs
// Encerrar: parar o processo (Ctrl+C ou encerrar a tarefa em segundo plano).

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";

const PORTA = Number(process.env.PORTA_PRANCHAS) || 4321;
const raiz = resolve(process.cwd(), "projeto", "pranchas");
const tipos = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

createServer(async (req, res) => {
  const caminho = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);
  const alvo = normalize(join(raiz, caminho === "/" ? "index.html" : caminho));
  // Nunca sai da pasta das pranchas.
  if (alvo !== raiz && !alvo.startsWith(raiz + sep)) {
    res.writeHead(403).end("proibido");
    return;
  }
  try {
    const conteudo = await readFile(alvo);
    res.writeHead(200, { "Content-Type": tipos[extname(alvo)] ?? "application/octet-stream" }).end(conteudo);
  } catch {
    res.writeHead(404).end("não encontrado");
  }
}).listen(PORTA, "127.0.0.1", () => {
  console.log(`Pranchas em http://localhost:${PORTA}/  (pasta: ${raiz})`);
});
