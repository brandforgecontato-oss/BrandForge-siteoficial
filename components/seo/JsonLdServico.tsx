import { site, urlDoSite } from "@/lib/site";

type Props = { nome: string; descricao: string; rota: string };

// Dados estruturados de uma página de serviço (schema.org Service), com o negócio como prestador.
// Sem preço: o preço é fechado na proposta (COPY), então não entra aqui.
export function JsonLdServico({ nome, descricao, rota }: Props) {
  const base = urlDoSite();
  const dados = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nome,
    description: descricao,
    url: `${base}${rota}`,
    areaServed: [
      { "@type": "Country", name: "Brasil" },
      { "@type": "Country", name: "Portugal" },
    ],
    provider: { "@type": site.negocio.tipoSchema, name: site.nome, url: base },
  };
  // JSON.stringify não escapa "<": trocar impede fechar a tag <script> por engano.
  const json = JSON.stringify(dados).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
