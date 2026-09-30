import Link from "next/link";
import type { ReactNode } from "react";
import { Secao } from "@/components/ui/Secao";

// Blocos de texto das páginas de serviço, no mesmo desenho da home (texto em 7 colunas, traço em bronze).

type Lista = { id: string; titulo: string; texto?: string; itens: string[]; numerada?: boolean };

export function BlocoLista({ id, titulo, texto, itens, numerada = false }: Lista) {
  const Tag = numerada ? "ol" : "ul";
  return (
    <Secao id={id} rotulo={`${id}-titulo`}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <div data-revelar>
            <h2 id={`${id}-titulo`} className="text-h3 lg:text-h2">
              {titulo}
            </h2>
            {texto && <p className="mt-5 text-destaque text-areia">{texto}</p>}
          </div>
          <Tag data-revelar-grupo className="mt-10 border-t border-filete">
            {itens.map((item, i) => (
              <li key={item} className="flex gap-5 border-b border-filete py-5 text-marfim">
                {numerada ? (
                  <span className="w-5 shrink-0 font-display text-ouro">{i + 1}.</span>
                ) : (
                  <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-bronze" />
                )}
                {item}
              </li>
            ))}
          </Tag>
        </div>
      </div>
    </Secao>
  );
}

type Texto = { id: string; titulo: string; children: ReactNode; destaque?: boolean };

// Bloco curto de texto. destaque = painel elevado com o filete de luz (exemplo prático, empresa maior).
export function BlocoTexto({ id, titulo, children, destaque = false }: Texto) {
  return (
    <Secao id={id} rotulo={`${id}-titulo`}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          data-revelar
          className={
            destaque
              ? "relative overflow-hidden rounded-peca border border-filete bg-obsidiana-alta p-6 md:p-10 lg:col-span-8"
              : "lg:col-span-7"
          }
        >
          {destaque && (
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ouro/60 to-transparent"
            />
          )}
          <h2 id={`${id}-titulo`} className="text-h3 lg:text-h2">
            {titulo}
          </h2>
          <div className="mt-5 space-y-4 text-destaque text-areia">{children}</div>
        </div>
      </div>
    </Secao>
  );
}

type Proximo = { texto: string; href: string; rotulo: string };

// Próximo degrau da escada: aponta para o serviço seguinte.
export function ProximoDegrau({ texto, href, rotulo }: Proximo) {
  return (
    <Secao id="proximo-degrau" rotulo="proximo-degrau-titulo">
      <div data-revelar className="border-y border-filete py-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-8">
          <h2 id="proximo-degrau-titulo" className="font-sans text-apoio font-medium text-areia">
            Próximo degrau
          </h2>
          <p className="mt-3 font-display text-h3 text-marfim">{texto}</p>
        </div>
        <div className="mt-6 lg:col-span-4 lg:mt-0 lg:text-right">
          <Link
            href={href}
            className="inline-flex min-h-12 items-center gap-2 text-ouro underline decoration-ouro/40 underline-offset-4 hover:decoration-ouro"
          >
            {rotulo}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Secao>
  );
}
