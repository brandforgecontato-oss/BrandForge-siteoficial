# Fase 8 — Preview e feedback

**Objetivo:** o cliente vê o site num endereço provisório, o feedback vira uma lista única e os ajustes entram em lote. **Modelo:** Sonnet.

Leia antes: `modelos/mensagem-cliente.md` e as pendências do ESTADO.

## 1. Publicar o endereço provisório

O site continua com noindex (`SITE_INDEXAVEL` só vira `true` na fase 9), então pode ir ao ar sem risco de aparecer no Google.

1. **Push** do repositório para o GitHub: `git push origin main` — **só com ok explícito**.
2. **Primeira vez neste projeto: conectar na Vercel** (a pessoa faz no navegador; guie passo a passo):
   1. vercel.com → Add New → Project → importar o repositório do site pelo GitHub (se o repositório não aparecer: "Adjust GitHub App Permissions" e liberar o acesso).
   2. Framework: Next.js (detectado sozinho). Não definir variáveis de ambiente agora.
   3. Deploy. O endereço provisório é `https://<projeto>.vercel.app`.
   4. A partir daí, todo push na `main` atualiza esse endereço sozinho.
   Registre a URL no ESTADO ("Lançamento → Preview").
3. **Conferir o endereço**:
   - Abre no Playwright, screenshot em 375 e 1440.
   - `curl -sI https://<projeto>.vercel.app | grep -i x-robots-tag` mostra `noindex`.
   - Se a URL pedir login da Vercel, a proteção de deployment está ativa para esse endereço: em Settings → Deployment Protection, deixe o domínio de produção `.vercel.app` público (ou gere um link compartilhável). A pessoa decide.
4. **PageSpeed Insights** (pagespeed.web.dev) com a URL provisória: registre as notas mobile e desktop em `projeto/REVISAO.md`.

## 2. Mensagem ao cliente

Monte a mensagem a partir do modelo, com a URL e as pendências cujo responsável é o cliente. Mostre para a pessoa copiar e enviar. **Você não envia nada.**

## 3. Consolidar o feedback

Quando a pessoa trouxer a resposta (texto, áudio transcrito, prints, várias mensagens soltas):
1. Salve o bruto em `projeto/referencias/feedback-<rodada>.md`.
2. Crie ou atualize `projeto/FEEDBACK.md`, rodada N, com uma lista numerada. Para cada item: o que o cliente pediu (nas palavras dele), onde fica no site, tipo (texto · visual · dado errado · conteúdo novo · fora do escopo) e a proposta (aplicar · discutir · recusar com motivo).
3. Sinalize: pedido que fere regra de nicho (BRIEF §2), pedido que contradiz a direção aprovada (vale discutir, não aplicar calado) e escopo novo (pode mudar prazo ou preço).
4. Mostre a lista e peça aprovação item a item só onde houver dúvida; o resto em bloco.

## 4. Aplicar em lote

1. Aplique todos os itens aprovados de uma vez. Textos: atualize `projeto/COPY.md` primeiro, depois o código.
2. Screenshots das seções afetadas em 375 e 1440; `npm run verificar`.
3. Commit `fase 8: ajustes da rodada N`, push com ok, e uma mensagem curta ao cliente dizendo o que mudou.
4. Nova rodada, se vier mais feedback. Mais de 2 rodadas: avise a pessoa (escopo e prazo).

## Fechar

Com o ok do cliente para publicar (a confirmação vem do cliente, não se assume), registre a aprovação em "Decisões aprovadas". Fim de fase: ESTADO (fase 9 como próxima, modelo Sonnet), commit `fase 8: aprovado pelo cliente`, frase padrão.
