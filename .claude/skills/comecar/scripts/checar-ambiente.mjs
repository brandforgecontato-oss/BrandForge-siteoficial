#!/usr/bin/env node
// Fase 0: diagnóstico do ambiente. Só LÊ; não instala, não move e não apaga nada.
// Uso (na raiz do projeto): node .claude/skills/comecar/scripts/checar-ambiente.mjs
// Funciona igual no Windows e no macOS. Saída em JSON para o Claude interpretar.

import { execSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { homedir, platform } from "node:os";
import { join } from "node:path";

const raiz = process.cwd();

function rodar(cmd) {
  try {
    return execSync(cmd, { cwd: raiz, stdio: ["ignore", "pipe", "ignore"], encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

function pastasCom(dir, arquivo) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, arquivo)))
    .map((d) => d.name);
}

// Node
const versaoNode = process.versions.node;
const [maior, menor] = versaoNode.split(".").map(Number);
const nodeOk = maior > 20 || (maior === 20 && menor >= 9);

// Git e remotes
const versaoGit = rodar("git --version");
const remotes = rodar("git remote -v") ?? "";
const remoteTemplate = /^template\s+(\S+)/m.exec(remotes)?.[1] ?? null;
const remoteOrigin = /^origin\s+(\S+)/m.exec(remotes)?.[1] ?? null;
const usuarioGit = rodar("git config user.name");
// Conta única da empresa: identidade local do repositório e usuário na URL do origin (ver fase 0).
const CONTA_EMPRESA = "brandforgecontato-oss";
const EMAIL_EMPRESA = "brandforge.contato@gmail.com";
const nomeLocal = rodar("git config --local user.name");
const emailLocal = rodar("git config --local user.email");
const contaEmpresa = {
  nomeLocal,
  emailLocal,
  identidadeOk: emailLocal === EMAIL_EMPRESA,
  originComUsuario: !!remoteOrigin && remoteOrigin.startsWith(`https://${CONTA_EMPRESA}@github.com/`),
  templateComUsuario: !!remoteTemplate && remoteTemplate.startsWith(`https://${CONTA_EMPRESA}@github.com/`),
};

// Dependências do projeto
const dependenciasInstaladas = existsSync(join(raiz, "node_modules", "next")) && existsSync(join(raiz, "node_modules", "@playwright", "mcp"));

// Navegador do Playwright (Chromium) no cache padrão de cada sistema
const cachePlaywright =
  process.env.PLAYWRIGHT_BROWSERS_PATH ||
  (platform() === "win32"
    ? join(process.env.LOCALAPPDATA ?? join(homedir(), "AppData", "Local"), "ms-playwright")
    : platform() === "darwin"
      ? join(homedir(), "Library", "Caches", "ms-playwright")
      : join(homedir(), ".cache", "ms-playwright"));
const navegadores = existsSync(cachePlaywright) ? readdirSync(cachePlaywright) : [];
// A revisão exigida muda com a versão do Playwright; na dúvida, "npx playwright install chromium" é idempotente.
const chromiumPresente = navegadores.some((n) => n.startsWith("chromium"));

// Skills globais (pessoais) com o mesmo nome das do projeto: a global TEM PRIORIDADE e esconde a do projeto.
const dirConfig = process.env.CLAUDE_CONFIG_DIR || join(homedir(), ".claude");
const dirSkillsGlobais = join(dirConfig, "skills");
const skillsProjeto = pastasCom(join(raiz, ".claude", "skills"), "SKILL.md");
const skillsGlobais = pastasCom(dirSkillsGlobais, "SKILL.md");
const conflitos = skillsGlobais.filter((s) => skillsProjeto.includes(s));
// Globais antigas do kit que não existem mais no projeto: não escondem nada, mas podem disparar no meio do fluxo.
const arquivadasNoTemplate = pastasCom(join(raiz, "_arquivo", "skills"), "SKILL.md");
const globaisArquivadas = skillsGlobais.filter((s) => arquivadasNoTemplate.includes(s));

// Vercel: CLI não é obrigatória (o fluxo padrão é GitHub + Vercel pelo painel).
const vercelLinkado = existsSync(join(raiz, ".vercel", "project.json")) || existsSync(join(raiz, ".vercel", "repo.json"));

// Estado do projeto
const estadoExiste = existsSync(join(raiz, "projeto", "ESTADO.md"));

console.log(
  JSON.stringify(
    {
      sistema: platform(),
      node: { versao: versaoNode, ok: nodeOk, minimo: "20.9.0" },
      git: { versao: versaoGit, usuario: usuarioGit, origin: remoteOrigin, template: remoteTemplate },
      contaEmpresa,
      dependenciasInstaladas,
      playwright: { cache: cachePlaywright, chromiumPresente },
      skills: {
        dirGlobal: dirSkillsGlobais,
        projeto: skillsProjeto,
        conflitosComGlobais: conflitos,
        globaisArquivadasNoTemplate: globaisArquivadas,
        outrasGlobais: skillsGlobais.filter((s) => !conflitos.includes(s) && !globaisArquivadas.includes(s)),
      },
      vercel: { projetoLinkado: vercelLinkado },
      estadoExiste,
    },
    null,
    2,
  ),
);
