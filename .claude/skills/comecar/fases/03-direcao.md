# Fase 3 — Direção criativa

**Objetivo:** uma direção visual escolhida entre três bem diferentes, registrada em `projeto/DIRECAO.md`. **Modelo:** Opus.

Leia antes: `projeto/BRIEF.md`, `modelos/DIRECAO.md`, `referencias/vocabulario-visual.md`, a skill `frontend-design` inteira (processo e lista de clichês) e, da `design-taste-frontend`, só as seções 0 (leitura do brief), 4 (diretrizes) e 9 (sinais de IA). Conflitos com a stack: tabela de precedência da `stack-web`.

## 1. Portfólio: o que já fizemos

```
git fetch template
git ls-tree --name-only template/main portfolio/sites/
git show template/main:portfolio/sites/<arquivo>.md
```
Leia também `portfolio/sites/` local. Sem remote `template` ou sem acesso: use só o local e avise. Anote fontes, famílias de paleta, estruturas de hero e assinaturas já usadas: a nova direção não repete a mesma combinação, e nenhuma das três repete a fonte display do site mais recente.

## 2. Conceito central

Proponha 2 ou 3 conceitos em uma frase cada, **tirados de fatos do BRIEF** (o ofício, o lugar, o público, a história), nunca de tendência. Pergunte qual segue, aceitando ajuste. Registre.

## 3. Referências fora do nicho

Pergunte se a pessoa tem referências (sites, revistas, embalagens, lugares) **de fora do nicho** do cliente. Prints: peça para salvar em `projeto/referencias/` ou colar na conversa. Para cada uma, diga o que dá para tirar dela (ritmo, tipografia, fotografia, cor). Sem referências: proponha 3 ideias de universos fora do nicho e deixe a pessoa escolher.

## 4. Três direções

Escreva as três em `projeto/DIRECAO.md`, no formato do modelo. Regras:
- **Bem diferentes entre si:** famílias de paleta diferentes, categorias tipográficas diferentes, estruturas de layout diferentes, assinaturas diferentes.
- **Uma é a ousada:** a que o cliente não pediria, mas que o conceito sustenta. Diga o risco.
- **Cada uma** com: ideia, alavancas do vocabulário visual (usadas e invertida), paleta 4–6 tons com papel e contraste AA, tipografia (display + corpo, disponíveis no `next/font`), forma, estrutura + wireframe ASCII, **uma** interação-assinatura (com versão para movimento reduzido), fotografia, riscos.
- **Autocrítica antes de mostrar** (processo da `frontend-design`): se uma direção sairia igual para qualquer negócio parecido, ou cai num clichê da lista, refaça essa parte e diga o que mudou.

## 5. Pranchas descartáveis

Uma prancha por direção, para comparar com os olhos:
1. `projeto/pranchas/a.html`, `b.html`, `c.html` (pasta fora do git). HTML único e estático, com CSS no próprio arquivo: paleta com nomes, amostra tipográfica com o H1 real do negócio, wireframe do hero em escala real no desktop e no celular, e a assinatura descrita (ou demonstrada com CSS simples). Fontes podem vir do Google Fonts por `<link>` **só na prancha**; no site entram por `next/font`.
2. Suba o servidor das pranchas em segundo plano: `node .claude/skills/comecar/scripts/servir-pranchas.mjs`
3. Com o Playwright: `http://localhost:4321/a.html` em 1440×900 e 375×812; screenshots salvos em `projeto/referencias/direcoes/a-1440.png`, `a-375.png` (idem b, c).
4. Mostre os screenshots lado a lado, com um resumo de uma linha por direção.

## 6. Escolha

Pergunte qual segue (A · B · C · misturar, dizendo o quê). Se misturar, reescreva a direção final e mostre de novo. Com o ok:
- Deixe em `projeto/DIRECAO.md` só a escolhida detalhada; as outras viram uma linha em "Descartadas", com o motivo.
- **Apague `projeto/pranchas/`** e encerre o servidor das pranchas. Os screenshots ficam.
- Registre em "Decisões aprovadas".

## Fechar

Fim de fase: ESTADO (fase 4 como próxima, modelo Opus), commit `fase 3: direção criativa`, frase padrão.
