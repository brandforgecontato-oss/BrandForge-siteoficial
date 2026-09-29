# Arquivo

Material que saiu do fluxo ativo do template. Nada aqui é carregado pelo Claude Code: skills só são lidas em `.claude/skills/`. Está guardado para consulta e para poder voltar atrás.

## Skills arquivadas

| Skill | Por que saiu | Para reativar |
|---|---|---|
| `high-end-visual-design` | Receita fixa (card com dupla borda em tudo, botão em pílula, etiqueta acima de todo título, navegação flutuante). Todo site "premium" sairia igual, o que contradiz o objetivo de design único. Também mandava que nenhum elemento aparecesse estático, o que esconde o hero. Os princípios reaproveitáveis foram extraídos para `.claude/skills/comecar/referencias/vocabulario-visual.md`. | Mover a pasta de volta para `.claude/skills/` |
| `minimalist-ui` | Paleta, fontes e bordas com valores fixos: todo site minimalista sairia com a mesma cara. Mandava animar todo bloco. Princípios extraídos para o mesmo `vocabulario-visual.md`. | Idem |
| `theme-factory` | Temas prontos de cor e fonte geram repetição entre sites. Foi feita para slides e documentos. Citava um `theme-showcase.pdf` que nunca veio. | Idem (o `LICENSE.txt` Apache-2.0 foi incluído) |
| `full-output-enforcement` | No Claude Code o código vai para arquivos, então truncamento não é o problema. "Não otimize brevidade" gastava tokens e o protocolo `[PAUSED]` atrapalhava os pontos de aprovação. A regra útil (sem placeholder ou TODO) está no checklist de entrega. | Idem |
| `brainstorming` | Substituída pelas fases 1 e 3 do orquestrador (`/comecar`), que aplicam o mesmo método (uma pergunta por vez, opções, 2–3 alternativas). A cópia tinha nome inválido e apontava para skills que não existem aqui. | Idem, mas conflita com o orquestrador |
| `test-driven-development` | Site institucional quase não tem lógica testável, e a descrição ("use em qualquer feature") dispararia a cada seção. Para projeto com lógica real, instale a versão atual de `github.com/obra/superpowers`. | Preferir a versão atual do upstream |

## Arquivos arquivados

| Arquivo | Por que saiu |
|---|---|
| `install.ps1`, `install.sh` | Instalavam as skills em `~/.claude/skills/` (global). Agora elas vêm dentro do projeto. Pior: uma skill global com o mesmo nome **tem prioridade** sobre a do projeto e esconderia a versão atualizada. A fase 0 do `/comecar` detecta isso e propõe mover. |
| `mcp.json.template` | Substituído pelo `.mcp.json` na raiz, que já vem configurado e funciona igual no Windows e no macOS. |

Os antigos `TRILHAS.md`, `BRIEF-TEMPLATE.md`, `CONTEXT-BASE-PROMPT.md` e `CHECKLIST-ENTREGA.md` não estão aqui: foram movidos (com histórico) para `.claude/skills/comecar/referencias/` e `modelos/`.
