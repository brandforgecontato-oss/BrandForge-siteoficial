import Image from "next/image";
import Link from "next/link";
import { projetos } from "@/lib/portfolio";

// Índice do portfólio: peças grandes, numeradas, com a captura real em moldura escura.
export function ListaProjetos() {
  return (
    <ul className="space-y-20 lg:space-y-32">
      {projetos.map((p, i) => (
        <li key={p.slug} data-revelar className="group lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          <Link
            href={`/portfolio/${p.slug}`}
            aria-label={`Ver detalhes do projeto ${p.nome}`}
            className={`block lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
          >
            <div className="rounded-peca border border-filete bg-obsidiana-alta p-3 md:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-peca border border-filete bg-obsidiana">
                <Image
                  src={p.captura}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-ponteiro group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Link>

          <div className={`mt-8 lg:col-span-5 lg:mt-0 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <p className="flex items-center gap-4 text-apoio text-areia">
              <span className="font-display text-h3 text-ouro">{String(i + 1).padStart(2, "0")}</span>
              <span aria-hidden="true" className="h-px w-10 bg-bronze" />
              <span className="rounded-peca border border-filete px-2.5 py-1">Projeto conceitual</span>
            </p>
            <h2 className="mt-6 text-h3 lg:text-h2">{p.nome}</h2>
            <p className="mt-2 text-apoio text-ouro">{p.categoria}</p>
            <p className="mt-5 text-areia">{p.linha}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
              <Link
                href={`/portfolio/${p.slug}`}
                className="inline-flex min-h-12 items-center gap-2 text-ouro underline decoration-ouro/40 underline-offset-4 hover:decoration-ouro"
              >
                Ver detalhes<span className="sr-only"> do projeto {p.nome}</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center text-areia underline decoration-areia/30 underline-offset-4 hover:text-marfim hover:decoration-marfim"
              >
                Abrir o site ao vivo<span className="sr-only"> {p.nome} (abre em nova aba)</span>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
