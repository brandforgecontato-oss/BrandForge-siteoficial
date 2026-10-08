import type { StaticImageData } from "next/image";
import capturaMemphis from "@/public/midia/projeto-memphis.webp";
import capturaPaola from "@/public/midia/projeto-paola.webp";
import capturaRape from "@/public/midia/projeto-rape-xingu.webp";

// Fonte única dos projetos do portfólio. Para entrar um projeto novo (ex.: a imobiliária, quando Filipe
// enviar endereço e descrição), basta uma entrada nesta lista: índice, página de detalhe, sitemap e
// JSON-LD saem daqui. Nunca invente dados: só o que está em projeto/COPY.md e projeto/ESTADO.md.

export type ServicoRelacionado = { rotulo: string; href: string };

export type Projeto = {
  slug: string;
  nome: string;
  categoria: string; // linha curta sob o nome
  linha: string; // descrição aprovada na copy
  url: string; // site ao vivo, hospedado na Vercel
  captura: StaticImageData;
  alt: string;
  demonstra: string[]; // o que o projeto mostra, derivado da linha aprovada
  servico: ServicoRelacionado;
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    slug: "memphis-burger",
    nome: "Memphis Burger",
    categoria: "Hamburgueria em Brasília",
    linha:
      "Hamburgueria em Brasília. Cardápio fácil de ler no celular e pedido direto pelo WhatsApp, com endereço e horário a um toque.",
    url: "https://chicagoburgersite.vercel.app/",
    captura: capturaMemphis,
    alt: "Página inicial do site conceitual da hamburgueria Memphis Burger, com foto de hambúrguer em fundo escuro",
    demonstra: [
      "Cardápio fácil de ler no celular.",
      "Pedido direto pelo WhatsApp.",
      "Endereço e horário a um toque.",
    ],
    servico: { rotulo: "Presença: site, loja e marca", href: "/sites" },
    destaque: true,
  },
  {
    slug: "rape-xingu",
    nome: "Rapé Xingu",
    categoria: "Loja virtual de produto artesanal",
    linha:
      "Loja virtual de produto artesanal. Catálogo com duas linhas, carrinho e pedido finalizado pelo WhatsApp, com confirmação de maioridade na entrada.",
    url: "https://site-rapechingu.vercel.app",
    captura: capturaRape,
    alt: "Página inicial do site conceitual da loja Rapé Xingu",
    demonstra: [
      "Catálogo organizado em duas linhas de produto.",
      "Carrinho com pedido finalizado pelo WhatsApp.",
      "Confirmação de maioridade na entrada do site.",
    ],
    servico: { rotulo: "Presença: site, loja e marca", href: "/sites" },
  },
  {
    slug: "paola-marra-advocacia",
    nome: "Paola Marra Advocacia",
    categoria: "Advocacia de família e trabalho em Brasília",
    linha:
      "Site de advocacia de família e do trabalho em Brasília, com linguagem simples e cada etapa explicada, sem juridiquês.",
    url: "https://site-paola-kappa.vercel.app/",
    captura: capturaPaola,
    alt: "Página inicial do site conceitual de advocacia Paola Marra, com a palavra clareza em letras grandes sobre fundo escuro",
    demonstra: [
      "Linguagem simples, com cada etapa do processo explicada.",
      "Duas áreas de atuação, família e trabalho, com página para cada uma.",
      "Agendamento de consulta, presencial ou online, em destaque.",
      "Perguntas frequentes em acordeão.",
    ],
    servico: { rotulo: "Presença: site, loja e marca", href: "/sites" },
  },
];

export function projetoPorSlug(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
