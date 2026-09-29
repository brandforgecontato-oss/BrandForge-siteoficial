// Fonte única dos dados do negócio. Alimenta metadata, JSON-LD, sitemap e robots.
// Preenchido na fase 6 (construção) a partir de projeto/BRIEF.md. Nunca invente dados:
// campo sem informação real fica vazio e o JSON-LD omite o que estiver vazio.

export type Endereco = {
  rua: string; // "Rua Exemplo, 123"
  bairro: string;
  cidade: string;
  uf: string; // "DF"
  cep: string; // "70000-000"
};

export type Negocio = {
  // Subtipo mais preciso de schema.org quando existir: "Dentist", "BarberOrHairSalon", "Attorney"...
  tipoSchema: string;
  telefone: string; // formato internacional: "+55-61-90000-0000"
  whatsapp: string; // só dígitos com DDI: "5561900000000"
  email: string;
  endereco: Endereco | null; // null se o negócio não atende em endereço físico
  horario: string[]; // formato schema.org: ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"]
  redes: string[]; // URLs completas dos perfis oficiais
  registroProfissional: string; // "CRO-DF 12345", se o nicho exigir
};

export type Site = {
  nome: string;
  descricao: string; // até ~155 caracteres; vira a meta description padrão
  paginas: string[]; // rotas públicas e indexáveis; o sitemap é gerado a partir desta lista
  negocio: Negocio;
};

export const site: Site = {
  nome: "BrandForge",
  descricao:
    "Sites, atendimento com IA no WhatsApp e automações sob medida para pequenos negócios no Brasil e em Portugal. Comece por um diagnóstico grátis.",
  paginas: ["/"],
  negocio: {
    tipoSchema: "ProfessionalService",
    telefone: "+55-61-99901-5955",
    whatsapp: "5561999015955",
    email: "brandforge.contato@gmail.com",
    endereco: null, // 100% online, sem endereço
    horario: ["Mo-Sa 09:00-18:00"],
    redes: ["https://www.instagram.com/brandforgetech"],
    registroProfissional: "",
  },
};

// Dados de contato exibidos no site (fonte: projeto/ESTADO.md, decisões de 29/09/2026).
export const contato = {
  telefoneExibido: "+55 61 99901-5955",
  instagram: "@brandforgetech",
  atendimento: "segunda a sábado, das 9h às 18h (horário de Brasília)",
  alcance: "100% online, no Brasil e em Portugal",
  calcom: "", // pendente: link do Cal.com (Filipe). Vazio = o link não aparece.
  cnpj: "", // pendente, opcional
};

// Mensagens prontas do WhatsApp (projeto/COPY.md).
const mensagensWhatsApp = {
  diagnostico: "Olá! Vim pelo site da BrandForge e quero fazer meu diagnóstico gratuito.",
  presenca: "Olá! Vim pelo site da BrandForge e quero fazer um orçamento de site.",
  atendimento: "Olá! Vim pelo site da BrandForge e quero fazer um orçamento de atendimento com IA.",
  sobMedida: "Olá! Vim pelo site da BrandForge e quero fazer um orçamento de uma solução sob medida.",
  curso: "Olá! Vim pelo site da BrandForge e quero saber mais sobre o curso de IA.",
} as const;

export type AssuntoWhatsApp = keyof typeof mensagensWhatsApp;

export function linkWhatsApp(assunto: AssuntoWhatsApp): string {
  return `https://wa.me/${site.negocio.whatsapp}?text=${encodeURIComponent(mensagensWhatsApp[assunto])}`;
}

// URL canônica do site: variável explícita, depois o domínio de produção da Vercel, depois localhost.
export function urlDoSite(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

// Nada é indexado até o lançamento (fase 9), quando SITE_INDEXAVEL=true é definida no ambiente de
// produção da Vercel. Assim o endereço provisório (projeto.vercel.app) enviado ao cliente na fase 8,
// os previews e os builds locais nunca aparecem no Google antes da hora.
export function siteIndexavel(): boolean {
  return process.env.SITE_INDEXAVEL === "true";
}
