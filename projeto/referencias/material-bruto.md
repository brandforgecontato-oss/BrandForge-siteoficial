# Material bruto

Registro do material recebido, para rastrear de onde veio cada dado do BRIEF.

## 2026-09-29 — PDF "BrandForge-identidade-visual.pdf" (6 páginas, colado no chat por Filipe)

O arquivo original não está no repositório. Se ele for necessário, salvar como `projeto/referencias/BrandForge-identidade-visual.pdf`.

### p.1 — Capa
- "BrandForge — sites e sistemas construídos com precisão"
- "Identidade visual · setembro de 2026"
- Capa em fundo escuro, com o wordmark dourado e uma linha fina por baixo

### p.2 — Sobre a marca: "Obsidian e Ouro"
- BrandForge é a marca por trás dos sites e sistemas digitais entregues a pequenos negócios e profissionais independentes no Brasil e em Portugal.
- Fundo escuro e sólido (solidez, artesania, "forjar" algo bem feito) com um dourado contido, usado como assinatura, nunca como decoração excessiva.
- Marca premium e sóbria: poucas cores, serifada no nome, sans-serif limpa no restante, sem elementos supérfluos.
- Tom de voz: direto, sem jargão de marketing, frases curtas, foco no resultado para o cliente.

### p.3 — Paleta
| Token | Hex | Uso |
|---|---|---|
| surface-100 | #F7F1E3 | fundo de página e seções claras |
| surface-200 | #FFFFFF | cartões e blocos elevados |
| surface-dark | #17140F | hero, rodapé, capa |
| ink | #17140F | texto principal sobre fundo claro |
| ink-secondary | #4A4032 | texto de apoio, legendas |
| ink-on-dark | #F1E9D8 | texto principal sobre surface-dark |
| border | #E3D9C2 | bordas e divisores sobre fundo claro |
| gold | #7A5B22 | destaque em texto, links e botões (AA sobre fundo claro) |
| gold-light | #D4AF6A | decorativo sobre surface-dark; não usar em texto sobre fundo claro |
| bronze | #8C5A2B | apoio: tags, ícones, elementos secundários |

### p.4 — Tipografia
- Playfair Display (serifada): só o nome da marca e títulos de destaque
- Inter (sans): corpo e interface
- display 56/58 · 600 · h1 36/42 · 600 · h2 24/30 · 600 · body 16/26 · 400 · body-small 14/22 · 400 · caption 12/17 · 400 (caixa alta)

### p.5 — Espaçamento e raio
- Espaçamento: 8 · 16 · 24 · 32 px (escala curta de propósito, sem valores fora dela)
- Raio: 4 · 8 · 16 px

### p.6 — Logotipo (wordmark)
- "BrandForge" em Playfair, com uma linha fina de assinatura por baixo
- Duas versões: tinta (sobre claro) e dourado (sobre escuro)
- Regras: não recolorir fora dessas duas versões; não distorcer; sem sombra nem efeito; área de respiro igual à altura do "B" em todos os lados

## 2026-09-29 — Entrevista com Filipe (chat)

- Objetivo: A · vender / converter
- Prazo: normal (1 a 2 semanas)
- O negócio, nas palavras de Filipe: "a BrandForge cria sites, automações, agentes integrados, consultoria sobre IA, e ensina a como você pode usar a IA para ser mais produtivo"
- Frase aprovada: "A BrandForge cria sites, automações e agentes de IA para pequenos negócios e profissionais independentes no Brasil e em Portugal, e oferece consultoria e treinamento para quem quer usar IA para produzir mais."

## 2026-09-29 — Sites de referência ("use de inspiração", enviados por Filipe)

- https://viverdeia.ai/paid (link original veio de um anúncio do Google Ads; removi os parâmetros de rastreamento)
- https://www.sitecomai.com/pt
- Uso: inspiração para a direção (fase 3) e para a estrutura da copy (fase 4). Não copiar textos nem layout.

## 2026-09-29 — Fotos e vídeos (pasta `site-BrandForge/imagens-videos`, fora do repositório)

Pedido de Filipe: usar esses arquivos no site. Os vídeos entram com animação e imersão futurista e tecnológica, e o segundo vídeo da pasta vai no hero.

| Arquivo | Tipo | Observação |
|---|---|---|
| `BrandForge_website_hero_section_…_20260929115240.mp4` | vídeo, 2,7 MB | 1º na ordem por nome. O nome sugere hero |
| `Digital_architecture_forms_brand…_20260929112841.mp4` | vídeo, 3,0 MB | 2º na ordem por nome, 1º na ordem de criação (11:28) |
| `Glowing_digital_core_floating_2K_….jpg` | imagem 2752×1536 | rede de nós dourados com núcleo brilhante. Tem o texto "THE INTELLIGENCE / BRANDFORGE" gravado na imagem, em fonte que não é Playfair nem Inter |
| `WhatsApp Image … 12.02.53.jpeg` | imagem | estrutura de linhas douradas com horizonte iluminado; sem texto |
| `WhatsApp Image … 12.03.06.jpeg` | imagem | torre arquitetônica escura com contornos dourados. Tem texto gerado por IA gravado à esquerda ("The Forge" e um subtítulo sem sentido: "Visuallcatie, engineerable achitactical…"). Precisa recortar ou regenerar sem texto |

As duas imagens do WhatsApp vieram comprimidas; para usar em tela cheia, pedir os originais. A paleta das imagens (preto e dourado) combina com a identidade "Obsidian e Ouro".

## 2026-09-29 — Diferenciais (entrevista com Filipe)

- Casos com resultado, números de entregas e prazo médio: ainda não existem
- "Sempre no prazo": é uma promessa sem histórico que a prove. Na copy, vira compromisso verificável (ex.: prazo combinado por escrito antes de começar), não afirmação de histórico
- Quem está por trás: uma equipe de desenvolvedores
- Portfólio: Filipe vai enviar alguns projetos para entrar no site
- Consequência: sem prova social por enquanto. O site se apoia no portfólio, no próprio site como demonstração, em processo transparente e em compromisso de prazo

## 2026-09-29 — Projetos para o portfólio (links enviados por Filipe)

Os links da Vercel são do painel da equipe `brandforgecontato-oss`. O conector da Vercel desta sessão não tem acesso a essa equipe (403), então testei os endereços públicos padrão:

| Projeto Vercel | Endereço público testado | Título da página | Situação |
|---|---|---|---|
| — | https://chicagoburgersite.vercel.app/ | "Memphis Burger \| Hamburgueria no Sudoeste, Brasília" | ok. O endereço diz "chicago", o site diz "Memphis" |
| imobiliaria | imobiliaria.vercel.app | "Frontend" | provavelmente NÃO é nosso. Falta o endereço real |
| site-rapechingu | https://site-rapechingu.vercel.app | "Rapé Xingu \| O Rapé do Índio — Ervas naturais, tradição indígena" | confere com o nome |
| site-paola | https://site-paola.vercel.app | "Paola Queen VIP \| Conteúdo Exclusivo & Close Friends" | confere com o nome |

## 2026-09-29 — Contato (enviado por Filipe)

- WhatsApp: "(61)9 99015955" → +55 61 99901-5955 (link: https://wa.me/5561999015955)
- Mensagem automática no WhatsApp: dizer que a pessoa veio pelo site e quer um orçamento de (nome do serviço). Cada página de serviço leva a sua mensagem
- E-mail: "Brandoforge.contato@gmail.com" (como veio). O CLAUDE.md do projeto usa brandforge.contato@gmail.com, sem o "o": confirmar
- Instagram: @brandforgetech (https://instagram.com/brandforgetech)
