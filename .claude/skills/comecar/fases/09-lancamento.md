# Fase 9 — Lançamento

**Objetivo:** o site no domínio definitivo, indexável, com Google configurado e os acessos entregues ao cliente. **Modelo:** Sonnet.

Leia antes: a seção "Lançamento" e as pendências do ESTADO, e o fim da `site-moderno-seo` ("Próximos passos"). A pessoa faz os passos em painéis externos; você guia um por vez, espera o "feito" e confere o que dá para conferir.

## 1. Domínio

1. Domínio já registrado? Onde (registro.br para `.com.br`)? Em nome de quem? **O registro fica no nome do cliente.**
2. Vercel → projeto → Settings → Domains → adicionar `dominio.com.br` e `www.dominio.com.br`; escolha qual é o principal e redirecione o outro (pergunte a preferência).
3. Configure o DNS conforme a Vercel mostrar (no registro.br: "Editar zona" ou apontar os servidores DNS). Propagação pode levar de minutos a algumas horas.
4. Confira: `curl -sI https://dominio.com.br` responde 200 (ou 308 para o principal) com HTTPS.

## 2. Liberar a indexação

1. Vercel → Settings → Environment Variables, **só em Production**:
   - `NEXT_PUBLIC_SITE_URL` = `https://<domínio principal>`
   - `SITE_INDEXAVEL` = `true`
2. Redeploy da produção (Deployments → último → Redeploy).
3. Confira no domínio:
   - `curl -s https://dominio/robots.txt` libera e aponta o sitemap
   - `curl -s https://dominio/sitemap.xml` lista as URLs com o domínio certo
   - `curl -sI https://dominio | grep -i x-robots-tag` não retorna nada
   - HTML com `<link rel="canonical">` no domínio certo e JSON-LD preenchido

## 3. Google

1. **Search Console** (search.google.com/search-console): propriedade do tipo Domínio, verificação por registro TXT no DNS; enviar `sitemap.xml`; pedir indexação da home em "Inspeção de URL". Adicionar o cliente como proprietário.
2. **Google Business Profile**: site preenchido com o domínio; NAP idêntico ao do site (compare com `lib/site.ts`); horário e fotos atualizados.
3. Teste `site:dominio.com.br` no Google: nos primeiros dias pode vir vazio; fica como pendência para conferir em uma semana.

## 4. Compartilhamento

Colar o link no WhatsApp e conferir imagem e título (pendência humana: peça um print). Antes disso, confira as tags `og:` no HTML com `curl`.

## 5. Acessos e entrega

Monte a lista para o cliente, com o que é dele e como entrar:
- Domínio (registro.br) — titular: cliente
- Hospedagem (Vercel): convidar o cliente para o time ou transferir o projeto, conforme o combinado
- Search Console e Google Business Profile — cliente como proprietário
- Repositório no GitHub, se fizer parte do combinado

Gere a mensagem de entrega (curta, sem jargão) para a pessoa enviar.

## 6. README do site

O `README.md` ainda é o do template. Com ok, troque por um README curto do site: o que é, URL, como rodar (`npm install`, `npm run dev`), onde ficam os dados (`lib/site.ts`) e o estado (`projeto/`), e um link para o template.

## Fechar

Registre domínio, URLs e acessos entregues no ESTADO. Commit `fase 9: site no ar`, push com ok. Frase padrão (fase 10 é curta).
