# Template de site BrandForge

Cada site novo nasce deste repositório. Você clica em **Use this template**, abre no VS Code, diz **"vamos começar"** e o Claude Code conduz o projeto inteiro: briefing, nicho regulado, direção visual, copy, construção, revisão, preview para o cliente, lançamento e registro no portfólio. Ele pergunta uma coisa por vez, propõe e espera o seu ok antes de avançar.

O template traz só infraestrutura invisível (Next.js, SEO, segurança, skills, Playwright). A página inicial nasce em branco: o visual de cada site sai do negócio do cliente.

## Pré-requisitos (uma vez por máquina)

| | Windows | macOS |
|---|---|---|
| Node.js 20.9+ (LTS) | nodejs.org ou `winget install OpenJS.NodeJS.LTS` | nodejs.org ou `brew install node` |
| Git | git-scm.com (inclui o Git Bash) | já vem com as ferramentas do Xcode (`xcode-select --install`) |
| VS Code + extensão Claude Code | code.visualstudio.com | idem |
| Conta | A da empresa, `brandforgecontato-oss`, no GitHub e na Vercel (ver abaixo) | idem |

### Conta única da empresa

Os dois sócios usam **só a conta `brandforgecontato-oss`**, no GitHub e na Vercel. Motivo: o plano Hobby da Vercel não tem colaboradores, e um deploy disparado por commit de outro autor pode ser bloqueado. Por isso:

- Em cada repositório de site (e neste), o git usa a identidade da empresa **só naquele repositório**:
  ```
  git config --local user.name "BrandForge"
  git config --local user.email "brandforge.contato@gmail.com"
  ```
- As URLs dos remotes levam o usuário da empresa: `https://brandforgecontato-oss@github.com/brandforgecontato-oss/<repositório>.git`. Assim o Git Credential Manager guarda uma credencial separada para a empresa, e a sua conta pessoal do GitHub continua valendo nos outros repositórios.
- No primeiro `fetch` ou `push` abre uma janela de login do GitHub: entre com a conta da empresa. Depois não pergunta mais.

A fase 0 confere e configura tudo isso em cada projeto novo.

Nada mais precisa ser instalado à mão: skills, Playwright e dependências vêm com o projeto, e a fase 0 cuida do resto (inclusive do navegador que o Claude usa para conferir o site).

## Site novo em 5 passos

1. No GitHub, logado como `brandforgecontato-oss`, neste repositório: **Use this template → Create a new repository**. Dono: `brandforgecontato-oss`. Nome sugerido: `site-<negocio>-<cidade>` (ex.: `site-barbearia-exemplo-brasilia`). Privado.
2. No VS Code: **Clone Git Repository** e cole a URL **com o usuário da empresa**: `https://brandforgecontato-oss@github.com/brandforgecontato-oss/<repositório>.git`. (Se clonar sem o usuário, a fase 0 corrige.)
3. Abra o terminal do VS Code e rode `npm install`.
4. Abra o Claude Code e diga **"vamos começar"** (ou digite `/comecar`).
5. Siga a conversa. Na primeira vez, a fase 0 pode pedir para reabrir o Claude Code (para ativar o Playwright ou recarregar as skills). Depois é só dizer "vamos continuar".

## O que dizer ao Claude

| Você diz | O que acontece |
|---|---|
| "vamos começar" / `/comecar` | Lê `projeto/ESTADO.md` e começa ou retoma a fase atual |
| "vamos continuar" / "onde paramos?" | Idem, depois de um `/clear` ou em outro dia |
| `/comecar fase 6` | Pula para uma fase (ele avisa o que ainda não foi aprovado) |
| Colar texto, áudio transcrito, prints do cliente | Vale como resposta: ele extrai o que der e pergunta só o que faltou |
| "ok" / "aprovado" | Registra a decisão e segue |

Ao fim de cada fase ele faz um commit local e diz: *"Fase N concluída. Recomendo /clear antes da próxima (e /model opus ou sonnet)"*. Opus nas fases 1–4 (decisões criativas), Sonnet nas demais (execução). Push e deploy só acontecem quando você pede.

## Retomar um projeto (ou passar para o sócio)

Tudo o que foi decidido fica em `projeto/` (versionado no git): `ESTADO.md` (fase atual, decisões, pendências, próximo passo), `BRIEF.md`, `DIRECAO.md`, `COPY.md`, `REVISAO.md` e `FEEDBACK.md`.

- **Mesma máquina:** abra o projeto e diga "vamos continuar".
- **Outra pessoa ou outra máquina:** quem estava trabalhando faz push (`git push`); quem assume clona (URL com o usuário da empresa) ou dá `git pull`, roda `npm install` e diz "vamos continuar". Se a máquina for nova para o projeto, ele confere o ambiente (inclusive a identidade da empresa no git) antes de retomar.

## As 11 fases

| # | Fase | Resultado |
|---|---|---|
| 0 | Ambiente | Node, git, dependências, Playwright, skills globais conflitantes, remote do template |
| 1 | Briefing | `projeto/BRIEF.md` + trilha (A venda · B presença · C redesign · D app · E pitch) |
| 2 | Nicho regulado | O que a profissão proíbe no site (preço, antes/depois, depoimento…) |
| 3 | Direção criativa | 3 direções bem diferentes com pranchas visuais; você escolhe uma |
| 4 | Copy | Texto do site, seção por seção, aprovado |
| 5 | Stack | Quais camadas de animação/3D entram, e por quê |
| 6 | Construção | Estrutura com texto real → seção a seção com screenshot 375/1440 → animações |
| 7 | Revisão | Guidelines, testes no navegador, Lighthouse medido, checklist de entrega |
| 8 | Preview e feedback | Endereço provisório na Vercel, mensagem pronta para o cliente, ajustes em lote |
| 9 | Lançamento | Domínio, indexação liberada, Search Console, Google Business, acessos ao cliente |
| 10 | Portfólio | Registro do site no portfólio compartilhado, com commit e push na `main` deste repositório |

## Atualizar o template (e puxar melhorias para um projeto em andamento)

Melhorias no processo, nas skills ou no scaffold são feitas **aqui**, neste repositório, com commit na `main` (identidade da empresa). Guia completo: [`docs/EVOLUIR-TEMPLATE.md`](docs/EVOLUIR-TEMPLATE.md).

Sites criados antes da melhoria não mudam sozinhos. Para trazer as skills e o processo novos para um projeto em andamento (sem tocar no código do site nem em `projeto/`; o remote `template` é configurado na fase 0):
```
git fetch template
git checkout template/main -- .claude/ CLAUDE.md .mcp.json
git commit -m "atualiza processo e skills do template"
```
Arquivos que o template apagou continuam no projeto; remova à mão se precisar.

## Onde fica cada coisa

```
CLAUDE.md                     instruções gerais do Claude (curtas)
.claude/skills/comecar/       o orquestrador: fases/, referencias/, modelos/, scripts/
.claude/skills/…              skills de design, stack, SEO, segurança e método
.claude/skills/ATTRIBUTION.md origem, versão e licença de cada skill
.claude/settings.json         permissões do projeto e Playwright pré-aprovado
.mcp.json                     servidor Playwright (conferência visual)
app/  components/  lib/       o site (Next.js); dados do negócio em lib/site.ts
projeto/                      estado e decisões do site (criado na fase 0)
portfolio/                    decisões de cada site entregue (anti-repetição)
docs/EVOLUIR-TEMPLATE.md      como mudar o template
_arquivo/                     o que saiu, com o motivo
```

## Problemas comuns

- **O Claude não conhece o `/comecar`** ou usa uma versão antiga de uma skill: há uma skill global com o mesmo nome em `~/.claude/skills/`, que tem prioridade sobre a do projeto. Diga "vamos começar": a fase 0 detecta e, com o seu ok, move para um backup.
- **O Playwright não aparece em `/mcp`**: rode `npm install` e reabra o Claude Code.
- **"Ignoring … permissions from .claude/settings.json: this workspace has not been trusted"** ou o Playwright "Pending approval": abra o projeto no Claude Code e aceite a pergunta de confiança do workspace uma vez.
- **`npm warn allow-scripts … unrs-resolver`** no `npm install`: esperado e inofensivo.
- **`npm warn deprecated eslint@9…`**: esperado. O ESLint 10 ainda quebra a configuração do Next (`eslint-config-next` 16.3.6); o template fica no 9, que é o que o `create-next-app` fixa. Reavalie ao atualizar o Next.
