# Fase 10 — Registro no portfólio

**Objetivo:** registrar as decisões deste site no portfólio compartilhado, para que os próximos não repitam. **Modelo:** Sonnet.

O portfólio vive no **repositório do template** (`template_sites`), em `portfolio/sites/<slug>.md`. Um arquivo por site: dois projetos registrando ao mesmo tempo nunca editam o mesmo arquivo, então não há conflito. A entrada vai por commit e push direto na `main` do template, com a conta da empresa.

## 1. Montar a entrada

1. Copie `modelos/portfolio-entrada.md` e preencha a partir de `projeto/DIRECAO.md`, da seção "Stack" do ESTADO e da URL de produção. `slug`: negócio + cidade, minúsculas e hífens (`barbearia-exemplo-brasilia`).
2. Pergunte (uma de cada vez): o que funcionou? O que não repetir?
3. Mostre a entrada e peça aprovação.

## 2. Enviar para o template (com ok para o push)

Use uma pasta de trabalho separada, para não misturar com o repositório do site:
```
git fetch template
git worktree add ../_portfolio-<slug> template/main
```
Grave a entrada em `../_portfolio-<slug>/portfolio/sites/<slug>.md` e:
```
git -C ../_portfolio-<slug> config user.name "BrandForge"
git -C ../_portfolio-<slug> config user.email "brandforge.contato@gmail.com"
git -C ../_portfolio-<slug> add portfolio/sites/<slug>.md
git -C ../_portfolio-<slug> commit -m "portfolio: <negócio>"
git -C ../_portfolio-<slug> push template HEAD:main
git worktree remove ../_portfolio-<slug>
```
Se o push for recusado porque a `main` do template andou (o sócio registrou outro site ou melhorou o template nesse meio-tempo), não force: `git -C ../_portfolio-<slug> pull --rebase template main` e push de novo. Como cada site tem o próprio arquivo, o rebase não conflita.

Sem remote `template` ou sem login da conta da empresa: salve a entrada em `projeto/portfolio-<slug>.md` e explique como enviá-la depois (a fase 0 configura o remote e o login).

## Fechar

ESTADO: todas as fases concluídas, projeto encerrado, commit do portfólio registrado (hash). Commit `fase 10: portfólio`. Mensagem final: resumo do projeto (datas, URL, rodadas de feedback, pendências que sobraram para o cliente).
