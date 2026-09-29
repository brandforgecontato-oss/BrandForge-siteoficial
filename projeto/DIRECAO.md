# Direção criativa — BrandForge

Preenchido na fase 3. Três direções foram propostas; só a aprovada fica detalhada, e as descartadas estão no fim com o motivo.

## Conceito central

**A forja:** forjar peça por peça. O site mostra a matéria bruta (o problema do negócio: mensagem sem resposta, trabalho repetido) virando uma peça sob medida.

De onde veio: o nome (*forge*, forjar), a assinatura "IA sob medida para o seu negócio" e o processo real (diagnóstico → proposta → entrega → relatório), que é literalmente medir, cortar e acabar uma peça. Aprovado por Filipe em 29/09/2026.

## Referências (fora do nicho)

Universo escolhido: **relojoaria e cutelaria artesanal** (Filipe, 29/09/2026). Sem prints enviados; o que tiramos do universo:

- **Precisão visível:** a peça é mostrada em close macro, com o mecanismo à vista (fundo de caixa transparente, fio da lâmina). No site: mostrar *como* a solução funciona por dentro, não só o resultado.
- **Ritmo lento e poucos elementos por tela:** uma peça por vez, muito respiro. Combina com "premium" sem precisar de adjetivo.
- **Material como protagonista:** aço, latão, luz rasante. O dourado aparece como reflexo num material escuro, nunca como tinta chapada.
- **Ficha da peça:** manufaturas descrevem cada peça com poucas especificações exatas. No site: cada degrau da escada de ofertas vira uma "peça" com o que ela faz, sem número inventado.

## Portfólio consultado

`portfolio/sites/` local e remoto (`template/main`, atualizado em 29/09/2026): **vazio**, só `.gitkeep`. É o primeiro site do template; não há fonte, paleta ou hero a evitar. Esta entrada será a primeira na fase 10.

## Base fixa

A identidade "Obsidian e Ouro" já existe e manda: wordmark em Playfair com linha fina, dourado contido, fundo escuro sólido. A direção define **como** a identidade se expressa no site (layout, movimento, textura); o wordmark não muda. Mídia: o vídeo `Digital_architecture…112841.mp4` no hero; imagens de rede dourada e de estrutura com horizonte como apoio (recortadas sem o texto gravado). Página com tema único escuro (sem seção clara no meio).

---

## Direção A: Manufatura (fiel à identidade)

- **Ideia em uma frase:** o site como o fundo de caixa de um relógio: escuro, silencioso, e o mecanismo dourado à vista através de uma abertura.
- **Alavancas do vocabulário visual:** *espaço como material* (respiro arejado, uma ideia por tela, porque a marca vende calma de quem sabe o que faz); *profundidade por camadas* (a abertura circular é uma segunda camada sobre o fundo); *movimento com massa* (curvas lentas, como um ponteiro). **Invertida:** *neutros com temperatura* levada ao extremo: nada de cinza, tudo puxa para o marrom-obsidiana da identidade.
- **Paleta** (a da identidade, só a parte escura):
  - Obsidiana `#17140F` — fundo da página inteira
  - Obsidiana alta `#221D16` — superfícies elevadas (painéis das ofertas)
  - Marfim `#F1E9D8` — texto principal (contraste 15,2:1 sobre obsidiana, AA)
  - Areia `#B7AB93` — texto de apoio (8,1:1, AA)
  - Ouro claro `#D4AF6A` — acento: botão, linha do wordmark, detalhes (8,9:1; texto escuro sobre o botão também 8,9:1)
  - Bronze `#8C5A2B` — só filetes e ícones decorativos (não em texto)
- **Tipografia:** display **Playfair Display** 600 · corpo **Inter** 400/500 — escala 1,333 (quarta justa), H1 56/60 desktop, 36/40 celular. Por quê: é a tipografia da identidade (o PDF nomeia as duas); Playfair tem o contraste de traço de gravação em metal, e Inter some para deixar a Playfair falar.
- **Forma:** raio 4 px em tudo (botões, painéis), sem sombra; separação por borda interna de 1 px em ouro a 20%. Grão fino fixo por cima de tudo (textura de metal escovado, 3% de opacidade).
- **Estrutura de layout:** colunas assimétricas 7/5, texto sempre alinhado à esquerda, cada seção com altura diferente.
  ```
  ┌──────────────────────────────────────────────────────────┐
  │ BrandForge‗          Serviços  Portfólio  Como funciona [Quero meu diagnóstico] │
  ├──────────────────────────────────────────────────────────┤
  │                                     ╭──────────╮          │
  │ Mais clientes e menos trabalho      │  vídeo   │          │
  │ manual, com IA feita sob medida     │ (abertura│          │
  │ para o seu negócio.                 │ circular)│          │
  │ sub (1 linha)                       ╰──────────╯          │
  │ [Quero meu diagnóstico]                                   │
  ├──────────────────────────────────────────────────────────┤
  │  Escada de ofertas: 4 peças em coluna, cada uma uma tela  │
  │  curta: nome · o que faz · para quem · [falar no WhatsApp]│
  ├──────────────────────────────────────────────────────────┤
  │  Como funciona: linha do tempo vertical (é sequência real)│
  │  Portfólio: 3 projetos conceituais, 1 grande + 2 menores  │
  │  Objeções: pergunta/resposta em acordeão                  │
  │  Rodapé: CTA final + contatos                             │
  └──────────────────────────────────────────────────────────┘
  celular: título em cima, abertura circular abaixo (70% da largura), botão fixo no rodapé da tela
  ```
- **Interação-assinatura:** **a abertura**. No hero, o vídeo aparece só através de um círculo, como o fundo transparente de um relógio. Ao rolar, o círculo se abre até ocupar a tela inteira e o vídeo vira fundo da seção seguinte ("veja o mecanismo por dentro"). Movimento reduzido: o vídeo vira uma imagem parada já em tela cheia, sem animação de abertura.
- **Fotografia e imagem:** só a mídia da BrandForge (vídeos e imagens preto e dourado), tratada com o mesmo grão e escurecida nas bordas. Projetos do portfólio como capturas de tela reais dentro de moldura escura fina.
- **Riscos:** é a mais segura e a mais próxima do que o cliente já imagina: pode ficar "bonita e esperada". Playfair + escuro + dourado é território comum de marca de luxo; a assinatura da abertura é o que tira do genérico, então ela não pode ser cortada por prazo. Custo: médio (uma animação com GSAP/ScrollTrigger + vídeo).
- **Prancha:** `projeto/referencias/direcoes/a-1440.png`, `a-375.png`

---

## Autocrítica (antes de mostrar)

- **A** saía, no primeiro rascunho, com vídeo em tela cheia atrás de título centralizado: o hero de qualquer agência "premium dark". Troquei pela abertura circular (vem da relojoaria) e pelo título à esquerda.
- Na prancha, o título quebrava em 6 linhas (largura máxima de 13 caracteres). Corrigido para 19: 4 linhas no desktop, 5 no celular.
- Sem rótulo em caixa alta acima de cada seção, sem três cards iguais, sem travessão no texto do site.

---

## Escolhida: A (Manufatura) — aprovada em 2026-09-29 por Filipe

Ajustes pedidos na aprovação: nenhum.

Descartadas (pranchas guardadas em `projeto/referencias/direcoes/`):
- **B · Lâmina** (grafite frio, Archivo larga + Geist, fio de luz dourado): afastava-se do marrom quente da identidade.
- **C · Brasa** (carvão, brasa laranja e ouro, Big Shoulders condensada, têmpera da cor com a rolagem): trazia uma cor nova, fora do "dourado contido" da identidade.
