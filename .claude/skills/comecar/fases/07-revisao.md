# Fase 7 — Revisão

**Objetivo:** tudo verificado de verdade, com evidência, antes de o cliente ver. **Modelo:** Sonnet.

Leia antes: `referencias/checklist-entrega.md` e `referencias/revisao-playwright.md`. Skills: `web-design-guidelines`, `verification-before-completion`, `site-moderno-seo` (checagem final), `seguranca-web` (se houver dado de usuário), `stack-web` (checagem final e `references/react-vercel/`), e a checagem final da `design-taste-frontend` (seção 14) só para os itens que não contradizem a direção aprovada.

Crie `projeto/REVISAO.md` com uma seção por bloco abaixo. Cada achado: status (ok · corrigido · pendente humano), evidência e, se corrigido, arquivo e linha.

## Ordem

1. **Build limpo**: `npm run verificar`.
2. **Web Interface Guidelines**: skill `web-design-guidelines` sobre `app/**/*.tsx` e `components/**/*.tsx`. Corrija o que for defeito real.
3. **Checagens automáticas no navegador** (`revisao-playwright.md`): imagens quebradas, scroll horizontal, H1 único, alt, labels, console, alvos de toque, teclado, movimento reduzido, hero sem JS.
4. **Screenshots finais** em 375, 768 e 1920.
5. **Performance React/Next**: percorra `stack-web/references/react-vercel/README.md`.
6. **Lighthouse medido** (build de produção), com ok para o `npx lighthouse`. Registre as notas. Se ficar abaixo de 85 em performance, investigue a causa (skill `systematic-debugging`) antes de mexer.
7. **Segurança** (se aplicável): `bash .claude/skills/seguranca-web/scripts/scan_segredos.sh .`, `npm audit`, CSP completada em `next.config.ts` para o que o site carrega.
8. **Checklist de entrega**, item a item. O que não dá para checar daqui (celular real, confirmação do cliente, painel do Google) fica "pendente humano", com quem resolve.

## Fechar

Mostre um resumo: quantos ok, corrigidos e pendentes, e as notas do Lighthouse. Pendências humanas vão para o ESTADO. Fim de fase: ESTADO (fase 8 como próxima, modelo Sonnet), commit `fase 7: revisão`, frase padrão.
