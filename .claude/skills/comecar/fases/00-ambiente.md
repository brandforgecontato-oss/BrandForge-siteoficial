# Fase 0 — Ambiente

**Objetivo:** a máquina de quem vai trabalhar (você ou o sócio, Windows ou macOS) está pronta, e `projeto/ESTADO.md` existe. **Modelo:** Sonnet.

Esta fase roda uma vez por projeto **e de novo sempre que o projeto mudar de máquina**: se o ESTADO diz fase > 0 mas o diagnóstico acusa problema (sócio abriu no Mac dele, por exemplo), resolva o ambiente antes de retomar a fase.

## 1. Diagnóstico (só leitura)

```
node .claude/skills/comecar/scripts/checar-ambiente.mjs
```

Se `node` não existir, o script nem roda: vá direto ao item "Node" abaixo. Resuma o resultado para a pessoa em uma tabela curta (ok / falta / atenção) e resolva **um item por vez, na ordem**, sempre explicando o que vai fazer e pedindo ok antes de instalar, baixar ou mover qualquer coisa.

## 2. Resolver, na ordem

**Repositório certo.** Se `git.origin` for o próprio repositório do template (URL em `CLAUDE.md`), avise: para um site novo, o caminho é "Use this template" no GitHub. Pergunte se é um teste; só continue se for.

**Node ≥ 20.9.** Se faltar ou for antigo, explique e pare até resolver:
- Windows: instalador LTS em nodejs.org, ou `winget install OpenJS.NodeJS.LTS`
- macOS: instalador LTS em nodejs.org, ou `brew install node`
- Depois: fechar e abrir o VS Code.

**Git.** Precisa existir. Se `git` não for encontrado: Windows, git-scm.com; macOS, `xcode-select --install`.

**Conta única da empresa (`contaEmpresa` no diagnóstico).** Todo projeto usa só a conta `brandforgecontato-oss`, no GitHub e na Vercel. Motivo: no plano Hobby da Vercel não há colaboradores; um deploy disparado por commit de outro autor pode ser bloqueado. Então todo commit sai com a identidade da empresa, e o git conversa com o GitHub como a empresa, sem mexer na conta pessoal de ninguém (que continua valendo nos outros repositórios). Se `identidadeOk`, `originComUsuario` ou `templateComUsuario` vierem `false`, explique isso e, com ok, rode **só neste repositório** (nunca `--global`):
```
git config --local user.name "BrandForge"
git config --local user.email "brandforge.contato@gmail.com"
git remote set-url origin https://brandforgecontato-oss@github.com/brandforgecontato-oss/<nome-do-repositório>.git
```
O usuário na URL faz o Git Credential Manager guardar uma credencial separada para a conta da empresa. No primeiro `fetch` ou `push` abre uma janela de login do GitHub: entre com a conta `brandforgecontato-oss` (não com a pessoal). Depois disso não pergunta mais. Confira com `git fetch origin`.

**Dependências (`dependenciasInstaladas: false`).** Com ok: `npm install`. O aviso `npm warn allow-scripts … unrs-resolver` é esperado e inofensivo (script opcional de uma dependência do ESLint; lint e build funcionam sem ele). Não aprove scripts de instalação sem motivo.

**Navegador do Playwright.** Com ok, rode sempre (é idempotente e garante a revisão certa para a versão instalada):
```
npx playwright install chromium
```
Baixa o Chromium oficial da Microsoft (~150 MB) para o cache do usuário.

**Playwright MCP ativo.** Confira se as ferramentas do servidor `playwright` estão disponíveis nesta sessão. Se não:
- Acabou de rodar `npm install`? O servidor só sobe numa sessão nova: peça para fechar e reabrir o Claude Code (ou a janela do VS Code) e dizer "vamos continuar".
- Aparece em `/mcp` como pendente? Aprovar. (O `.claude/settings.json` já pré-aprova; em pasta não confiável a pessoa precisa confiar no workspace primeiro.)
- Teste rápido: abrir `about:blank` e tirar um screenshot.

**Skills globais com o mesmo nome (a pegadinha).** Uma skill em `~/.claude/skills/` com o mesmo nome de uma do projeto **tem prioridade e esconde a do projeto**. Mostre as três listas do diagnóstico:
- `conflitosComGlobais`: escondem as versões do template. Recomendado mover.
- `globaisArquivadasNoTemplate`: skills antigas que o template arquivou de propósito; podem disparar no meio do fluxo. Recomendado mover.
- `outrasGlobais`: não conflitam; só informe.

Pergunte (uma pergunta, com opções): mover conflitos + arquivadas (recomendado) · mover só os conflitos · não mover agora. Com ok, rode com os nomes escolhidos:
```
node .claude/skills/comecar/scripts/mover-skills-globais.mjs nome1 nome2 ...
```
O script faz backup em `~/.claude/skills-backup-<data>/` e não apaga nada. Depois, peça para reabrir o Claude Code. Para desfazer: mover as pastas de volta.

**Remote do template (portfólio e atualizações).** Se `git.template` for `null`, com ok (a URL, já com o usuário da empresa, está no `CLAUDE.md`):
```
git remote add template https://brandforgecontato-oss@github.com/brandforgecontato-oss/template_sites.git
git fetch template
```
Se existir sem o usuário na URL: `git remote set-url template <a URL acima>`. Se o fetch falhar, o login do Credential Manager foi feito com a conta errada: remova a credencial salva de `github.com` para `brandforgecontato-oss` (Windows: Gerenciador de Credenciais; macOS: Acesso às Chaves) e tente de novo.

**Vercel (só informativo agora).** A conta é a da empresa, logada com o GitHub `brandforgecontato-oss`. Não precisa resolver agora; a fase 8 guia a conexão pelo painel. Não é necessário instalar a CLI.

## 3. Criar o estado

1. Crie `projeto/` e `projeto/referencias/`.
2. Copie `modelos/ESTADO.md` para `projeto/ESTADO.md`: nome do negócio "a definir", fase 0 concluída, fase 1 como próxima, pendências de ambiente que sobraram.
3. Commit: `git add -A && git commit -m "fase 0: ambiente conferido"`.
4. Frase de fim de fase, recomendando `/model opus` para a fase 1.
