import Link from "next/link";
import { Botao } from "@/components/ui/Botao";
import { linkWhatsApp } from "@/lib/site";
import { Wordmark } from "./Wordmark";

const itens = [
  { href: "/#servicos", rotulo: "Serviços" },
  { href: "/#como-funciona", rotulo: "Como funciona" },
  { href: "/#portfolio", rotulo: "Portfólio" },
  { href: "/#perguntas", rotulo: "Perguntas" },
];

export function Cabecalho() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-filete bg-obsidiana/90 backdrop-blur-sm">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-peca focus:bg-ouro focus:px-4 focus:py-2 focus:text-obsidiana"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link href="/" aria-label="BrandForge, voltar ao início" className="flex min-h-12 items-center">
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {itens.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-apoio text-areia transition-colors hover:text-marfim">
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <Botao href={linkWhatsApp("diagnostico")} externo className="min-h-11 px-5 text-apoio">
            Quero meu diagnóstico
          </Botao>
        </nav>

        {/* Menu do celular só com HTML e CSS */}
        <details className="group relative lg:hidden">
          <summary className="flex min-h-12 cursor-pointer items-center gap-2 rounded-peca px-3 text-apoio text-marfim">
            Menu
            <span aria-hidden="true" className="text-ouro transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <nav
            aria-label="Principal no celular"
            className="absolute right-0 top-full mt-3 w-64 rounded-peca border border-filete bg-obsidiana-alta p-2"
          >
            <ul>
              {itens.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex min-h-12 items-center rounded-peca px-4 text-marfim hover:bg-obsidiana">
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
