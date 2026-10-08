import type { Metadata } from "next";
import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { Marcas } from "@/components/ui/Marcas";
import { Secao } from "@/components/ui/Secao";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { ListaProjetos } from "@/components/secoes/ListaProjetos";
import { openGraphBase } from "@/lib/metadados";
import { projetos } from "@/lib/portfolio";
import { linkWhatsApp, urlDoSite } from "@/lib/site";
import rede from "@/public/midia/rede.webp";

const titulo = "Portfólio de sites e lojas virtuais | BrandForge";
const descricao =
  "Projetos conceituais da BrandForge: sites e lojas virtuais para pequenos negócios, publicados na Vercel e abertos para você ver ao vivo.";

export const metadata: Metadata = {
  title: { absolute: titulo },
  description: descricao,
  alternates: { canonical: "/portfolio" },
  openGraph: { ...openGraphBase, title: titulo, description: descricao, url: "/portfolio" },
};

export default function Portfolio() {
  const base = urlDoSite();
  const dados = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfólio BrandForge",
    description: descricao,
    url: `${base}/portfolio`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projetos.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}/portfolio/${p.slug}`,
        name: p.nome,
      })),
    },
  };
  const json = JSON.stringify(dados).replace(/</g, "\\u003c");

  return (
    <main id="conteudo">
      <section id="hero" aria-labelledby="hero-titulo" className="pb-secao-cel pt-32 lg:pb-secao lg:pt-44">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-apoio text-ouro">Portfólio</p>
            <h1 id="hero-titulo" className="mt-4 max-w-[18ch] text-h1-cel lg:text-h1">
              Peças de mostruário
            </h1>
            <p className="mt-6 max-w-[46ch] text-destaque text-areia">
              Projetos conceituais que a equipe criou para mostrar o que entrega. Cada um está no ar, na Vercel, e você pode
              abrir e testar no seu celular.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Botao href="#projetos">Ver os projetos</Botao>
              <Botao href={linkWhatsApp("diagnostico")} externo variante="contorno">
                Quero meu diagnóstico
              </Botao>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative aspect-square w-[78%] lg:w-full lg:max-w-[420px]">
              <Marcas />
              <div className="absolute inset-[7%] overflow-hidden rounded-full border border-ouro/30">
                <Image
                  src={rede}
                  alt=""
                  fill
                  preload
                  sizes="(min-width: 1024px) 380px, 70vw"
                  className="object-cover [filter:sepia(0.2)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgb(23_20_15/0.9)_100%)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Secao id="projetos" rotulo="projetos-titulo">
        <div data-revelar className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 id="projetos-titulo" className="text-h3 lg:text-h2">
              Projetos no ar
            </h2>
            <p className="mt-5 text-areia">
              Não são clientes: são demonstrações, feitas com o mesmo cuidado de um projeto real. Em cada uma você vê o que
              ela mostra e abre o site completo.
            </p>
          </div>
        </div>
        <div className="mt-16 lg:mt-24">
          <ListaProjetos />
        </div>
      </Secao>

      <CtaFinal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
    </main>
  );
}
