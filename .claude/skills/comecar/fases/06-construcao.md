# Fase 6 — Construção

**Objetivo:** o site construído com a copy aprovada, conferido seção a seção no navegador, com as animações por último. **Modelo:** Sonnet.

Leia antes: `projeto/DIRECAO.md`, `projeto/COPY.md`, a seção "Stack" do ESTADO, `referencias/regras-de-ouro.md` e `referencias/revisao-playwright.md`. Skills: `stack-web` (e só as referências das camadas aprovadas), `site-moderno-seo`, `responsive-design`, e `seguranca-web` se houver dado de usuário.

Esta fase é longa. Atualize a tabela "Construção" do ESTADO a cada seção concluída e faça commit local por etapa (`fase 6: estrutura`, `fase 6: seção hero`, …): assim um `/clear` no meio não perde nada.

## Etapa A — Fundação (sem animação)

1. **`lib/site.ts`** com os dados reais do BRIEF (só o que existe; vazio continua vazio).
2. **Tokens em `app/globals.css`** (`@theme`): cores, escala e curvas da DIRECAO.
3. **Fontes em `app/layout.tsx`** via `next/font`, ligadas aos tokens com `@theme inline`.
4. **Estrutura**: `components/secoes/` com um componente por seção (Server Components), montados em `app/page.tsx` com a copy **exata** do `COPY.md`, sem animação e sem enfeite.
5. Suba `npm run dev` em segundo plano e tire screenshot da página inteira em 375 e 1440. Mostre. O esqueleto com conteúdo real precisa ler bem antes de qualquer refinamento.

## Etapa B — Seção a seção

Para cada seção, na ordem da página:
1. Aplique o design da DIRECAO (layout, forma, imagem, detalhes).
2. Screenshot em 375×812 e 1440×900 (ver `revisao-playwright.md`). Compare com a DIRECAO e corrija até bater.
3. Mostre o resultado e pergunte: segue · ajustar (o quê). Ajustes pequenos: aplique e mostre de novo.
4. Marque a seção como conferida no ESTADO.

Imagens: fotos reais do cliente em `public/`, via `next/image` (hero com `preload` e `sizes`). Imagem provisória só como rascunho declarado, registrada em "Provisórios a trocar" do ESTADO.

## Etapa C — SEO e compartilhamento

- `metadata` de cada página (title, description, canonical) do `COPY.md`; rotas novas em `site.paginas`.
- `JsonLd`: `tipoSchema` com o subtipo certo; outros tipos (Service, FAQPage) seguindo `site-moderno-seo/assets/jsonld-exemplos.md`.
- `app/opengraph-image.tsx` (ou imagem 1200×630) na identidade aprovada.
- Favicon e ícone Apple a partir do logo.

## Etapa D — Animações, por último

Só com tudo estático aprovado:
1. Copie os modelos de `stack-web/assets/` para `lib/` e `app/` conforme as camadas aprovadas.
2. Implemente primeiro a interação-assinatura; depois as microinterações.
3. Confira: hero visível sem JS, `prefers-reduced-motion` respeitado, voltar de outra rota não duplica nada.
4. Screenshot ou descrição do comportamento para aprovação.

## Fechar

`npm run verificar` passa. Todas as seções conferidas no ESTADO. Fim de fase: ESTADO (fase 7 como próxima, modelo Sonnet), commit `fase 6: construção concluída`, frase padrão.
