# Site BrandForge

Este repositório é um site criado a partir do template da BrandForge. O projeto é conduzido em fases, do briefing ao site no ar, pela skill `comecar`.

## Como trabalhar aqui

- Quando a pessoa disser **"vamos começar"**, "começar", "continuar", "onde paramos", "próxima fase" ou algo parecido, **invoque a skill `comecar`** antes de qualquer outra coisa. Ela lê `projeto/ESTADO.md` e retoma do ponto certo.
- Pedido avulso fora do fluxo (corrigir um bug, trocar um texto): atenda, e registre em `projeto/ESTADO.md` se mudar alguma decisão aprovada.
- Nenhum código do site antes da direção visual e da copy aprovadas (fases 3 e 4).
- Nunca invente dados do negócio; nunca faça push, deploy em produção ou mudança fora deste repositório sem ok explícito.
- Conflito entre skills: vale a tabela de precedência da skill `stack-web`.
- Os dados do negócio vivem só em `lib/site.ts`. O estado e as decisões vivem em `projeto/`.

## Referências

- Repositório do template (remote `template`, usado pelo portfólio e para puxar melhorias): https://brandforgecontato-oss@github.com/brandforgecontato-oss/template_sites.git
- Conta única: GitHub e Vercel só com a conta da empresa `brandforgecontato-oss`. Neste repositório o git usa `user.name` "BrandForge" e `user.email` "brandforge.contato@gmail.com" (config local, nunca global), e os remotes levam o usuário `brandforgecontato-oss` na URL. A fase 0 confere.
- Comandos: `npm run dev` · `npm run lint` · `npm run build` · `npm run verificar` (lint + build)
- Origem e licença das skills: `.claude/skills/ATTRIBUTION.md`

@AGENTS.md
