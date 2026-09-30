# Revisão — fase 7

Concluída com pendências humanas (ver seção 8). Servidor de produção local (`npm run build && npm run start`), Playwright via Node (o MCP não estava ativo).

## 1. Build limpo
- **ok** — `npm run verificar` passou (lint + build, 12 páginas estáticas), antes e depois das correções.

## 2. Web Interface Guidelines
Busca dirigida nas regras da skill sobre `app/` e `components/`.
- **ok** — sem `transition: all`, `outline: none`, `user-scalable=no`, `<div onClick>`, `<img>` solto nem campo sem label; `text-wrap: balance/pretty` e `color-scheme: dark` presentes; links externos com `rel="noopener noreferrer"`.
- **corrigido** — SVG decorativo sem `aria-hidden` (`components/secoes/ComoFunciona.tsx:73`).
- **corrigido** — faltava `<meta name="theme-color">` (`app/layout.tsx`, export `viewport`, #17140f).
- **corrigido** — faltava `touch-action: manipulation` em links/botões (`app/globals.css`).
- **observação** — nomes de marca sem `translate="no"`: opcional, não aplicado.

## 3. Checagens automáticas (375 / 768 / 1920, 5 páginas + 404)
- **ok** — imagens quebradas: nenhuma.
- **ok** — scroll horizontal: nenhum.
- **ok** — um H1 por página.
- **ok** — nenhuma imagem sem `alt`.
- **ok** — nenhum campo de formulário (site sem formulário).
- **corrigido** — console no 1920 da home: aviso do `next/image` (`fill` com pai `sticky`). `components/secoes/MateriaBruta.tsx`: `sticky` passou para um wrapper. Reconferido: sem aviso.
- **ok** — console: único erro é o 404 da rota inexistente (esperado) e `/_vercel/insights/script.js`, que só existe na Vercel.
- **ok** — alvos de toque a 375: todos ≥ 44 px, exceto o link "Pular para o conteúdo" (oculto até receber foco) e o e-mail dentro de texto corrido em `/privacidade` (exceção WCAG 2.5.8 para links em texto).
- **ok** — teclado: Tab percorre pular, logo, menu, CTAs e rodapé em ordem lógica; foco com contorno de 2 px.
- **corrigido** — movimento reduzido: os vídeos do hero e do "mecanismo" seguiam em loop. Novo `components/VideoAmbiente.tsx` pausa no pôster; usado em `Hero.tsx` e `Mecanismo.tsx`. Reconferido: 0 animações e 0 vídeos tocando, sem pinagem.
- **ok** — sem JavaScript: H1 e 6 CTAs "Quero meu diagnóstico" presentes no HTML servido.
- **ok** — CTA principal acima da dobra nos três tamanhos.

## 4. Screenshots finais
- **ok (dobra)** — `projeto/referencias/revisao/dobra-375.jpg`, `-768.jpg`, `-1920.jpg`. Página inteira não foi usada: as seções pinadas e a entrada em vídeo distorcem a captura; as seções foram aprovadas uma a uma na fase 6.
- **observação** — no 1920, o vídeo do hero mostra cantos pretos dentro do círculo (faixas do próprio vídeo). Decidir se ajusta o enquadramento.

## 5. Performance React/Next
- **ok** — GSAP/Lenis só nos componentes de movimento; listeners de `wheel`/`touchmove` passivos; fontes com preload e `swap`; imagens via `next/image`; pacotes instalados todos em uso (`npm audit` 0).
- **corrigido** — vídeo do mecanismo só baixa perto da tela (`components/VideoAmbiente.tsx`).
- **pendente** — comprimir `abertura.mp4` e `mecanismo.mp4` (sem ffmpeg na máquina; instalar só com ok de Filipe).

## 6. Lighthouse (build de produção local, 2026-09-30)

| Perfil | Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| Desktop | 99 | 100 | 96 | 69 |
| Mobile | 76 | 98 | 96 | 69 |

- SEO 69: esperado, o `noindex` local é de propósito (robots bloqueado até o lançamento).
- Desktop: LCP 0,7 s, CLS 0, TBT 40 ms.
- Mobile: LCP 4,1 s (elemento: H1 do hero, com 2,16 s de atraso de renderização), CLS 0, TBT 280 ms. **Abaixo de 85: investigação aberta.**
  - Corrigido o que era certo: o vídeo do mecanismo (3,4 MB) baixava na carga; agora `VideoAmbiente carregarPerto` só baixa perto da tela (transferência 9,8 MB → 6,4 MB). O LCP não mudou: não era a causa principal.
  - Descartado: fontes (`font-display` ok), imagens (ok), terceiros (nenhum), cadeia de rede (63 ms).
  - Suspeitos restantes: a entrada em vídeo (camada de tela cheia na primeira visita, que o Lighthouse sempre vê), JS de hidratação/GSAP/Lenis sob CPU 4× mais lenta (bootup 1,3 s), CSS bloqueante (11 KB, ~150 ms) e `abertura.mp4` pedido duas vezes (entrada + hero).
  - Medido com movimento reduzido forçado (sem entrada nem animações): **mobile 86**, LCP 3,9 s (o título troca para a fonte Playfair sob CPU 4× mais lenta). A entrada e o movimento custam cerca de 10 pontos só no laboratório; o desktop está em 99.
  - **pendente humano** — Filipe decide se aceita 76 no mobile com a entrada (aprovada como parte da identidade) ou se encurta a entrada; conferir depois no PageSpeed Insights com a URL do preview (fase 8).

## 7. Segurança
- **ok** — `scan_segredos.sh`: sem segredos; `.env` coberto pelo `.gitignore`.
- **ok** — `npm audit`: 0 vulnerabilidades.
- **ok** — cabeçalhos: HSTS, nosniff, Referrer-Policy, X-Frame-Options, CSP (`frame-ancestors`, `base-uri`, `form-action`, `object-src`).
- **observação** — CSP sem `script-src`/`style-src`: exigiria nonce por causa dos scripts inline do Next e do JSON-LD. Site sem formulário, login ou dado de usuário; risco baixo.

## 8. Checklist de entrega
- **ok** — hierarquia, tipografia e paleta conforme `DIRECAO.md` (aprovadas seção a seção na fase 6); assinatura "a abertura" funciona; CTA acima da dobra; 375/768/1920 sem quebra nem scroll horizontal; `prefers-reduced-motion` sem pinagem, loop nem vídeo; hero completo sem JS; Tab em ordem com foco visível; título, description e H1 únicos por página; sitemap com 5 rotas; Open Graph 1200×630; JSON-LD; `robots` bloqueado até `SITE_INDEXAVEL=true`; sem TODO, `markers` nem placeholder; `npm run verificar` passa.
- **decisão registrada** — rastreadores de IA ficam liberados em `app/robots.ts` (padrão do template; negócio quer aparecer em respostas de IA). Filipe pode reverter.
- **pendente humano (Filipe)** — celular real; ícone BF em SVG; imobiliária no portfólio; link do Cal.com; conferir horário de Brasília; advogado sobre o link/selos do Rapé Xingu; aviso "projeto conceitual" nas demos; CNPJ e data da política de privacidade; regenerar o texto sem sentido no `abertura.mp4`; cantos pretos do vídeo do hero em 1920.
- **fase 9** — domínio/HTTPS, Search Console, prévia no WhatsApp, acessos entregues.
