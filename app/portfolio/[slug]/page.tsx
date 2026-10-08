import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlocoLista } from "@/components/paginas/Blocos";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { openGraphBase } from "@/lib/metadados";
import { projetoPorSlug, projetos } from "@/lib/portfolio";
import { linkWhatsApp, urlDoSite } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projetoPorSlug(slug);
  if (!p) return {};
  const titulo = `${p.nome}, projeto conceitual | BrandForge`;
  return {
    title: { absolute: titulo },
    description: p.linha,
    alternates: { canonical: `/portfolio/${p.slug}` },
    openGraph: { ...openGraphBase, title: titulo, description: p.linha, url: `/portfolio/${p.slug}` },
  };
}

export default async function ProjetoPagina({ params }: Props) {
  const { slug } = await params;
  const p = projetoPorSlug(slug);
  if (!p) notFound();

  const i = projetos.findIndex((x) => x.slug === p.slug);
  const proximo = projetos[(i + 1) % projetos.length];
  const base = urlDoSite();
  const dados = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.nome,
    description: p.linha,
    url: `${base}/portfolio/${p.slug}`,
    sameAs: p.url,
    creator: { "@type": "ProfessionalService", name: "BrandForge", url: base },
  };
  const json = JSON.stringify(dados).replace(/</g, "\\u003c");

  return (
    <main id="conteudo">
      <section id="hero" aria-labelledby="hero-titulo" className="pb-secao-cel pt-32 lg:pb-secao lg:pt-44">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <nav aria-label="Você está em" className="text-apoio text-areia">
            <Link href="/portfolio" className="inline-flex min-h-11 items-center hover:text-marfim">
              <span aria-hidden="true" className="mr-2">←</span>Portfólio
            </Link>
          </nav>

          <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <span className="inline-block rounded-peca border border-filete px-2.5 py-1 text-apoio text-areia">
                Projeto conceitual
              </span>
              <h1 id="hero-titulo" className="mt-6 text-h1-cel lg:text-h1">
                {p.nome}
              </h1>
              <p className="mt-3 text-apoio text-ouro">{p.categoria}</p>
              <p className="mt-6 max-w-[52ch] text-destaque text-areia">{p.linha}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Botao href={p.url} externo>
                  Abrir o site ao vivo<span className="sr-only"> (abre em nova aba)</span>
                </Botao>
                <Botao href={linkWhatsApp("presenca")} externo variante="contorno">
                  Quero um site assim
                </Botao>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-peca border border-filete bg-obsidiana-alta p-3 md:p-5 lg:mt-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-peca border border-filete bg-obsidiana">
              <Image
                src={p.captura}
                alt={p.alt}
                fill
                preload
                sizes="(min-width: 1200px) 1100px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <BlocoLista id="demonstra" titulo="O que este projeto mostra" itens={p.demonstra} />

      <Secao id="servico" rotulo="servico-titulo">
        <div data-revelar className="border-y border-filete py-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-8">
            <h2 id="servico-titulo" className="font-sans text-apoio font-medium text-areia">
              Serviço por trás da peça
            </h2>
            <p className="mt-3 font-display text-h3 text-marfim">{p.servico.rotulo}</p>
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0 lg:text-right">
            <Link
              href={p.servico.href}
              className="inline-flex min-h-12 items-center gap-2 text-ouro underline decoration-ouro/40 underline-offset-4 hover:decoration-ouro"
            >
              Conheça o serviço<span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Secao>

      {proximo.slug !== p.slug && (
        <Secao id="proximo-projeto" rotulo="proximo-projeto-titulo">
          <div data-revelar>
            <h2 id="proximo-projeto-titulo" className="font-sans text-apoio font-medium text-areia">
              Próximo projeto
            </h2>
            <Link
              href={`/portfolio/${proximo.slug}`}
              className="mt-3 inline-flex min-h-12 items-center gap-3 font-display text-h3 text-marfim hover:text-ouro lg:text-h2"
            >
              {proximo.nome}
              <span aria-hidden="true" className="text-ouro">→</span>
            </Link>
          </div>
        </Secao>
      )}

      <CtaFinal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
    </main>
  );
}
