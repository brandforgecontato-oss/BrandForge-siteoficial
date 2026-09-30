import Image, { type StaticImageData } from "next/image";
import { Secao } from "@/components/ui/Secao";
import capturaMemphis from "@/public/midia/projeto-memphis.webp";
import capturaRape from "@/public/midia/projeto-rape-xingu.webp";

type Projeto = { nome: string; linha: string; url: string; captura: StaticImageData; alt: string; destaque?: boolean };

// A imobiliária entra quando Filipe enviar endereço e descrição (pendência no ESTADO).
const projetos: Projeto[] = [
  {
    nome: "Memphis Burger",
    linha:
      "Hamburgueria em Brasília. Cardápio fácil de ler no celular e pedido direto pelo WhatsApp, com endereço e horário a um toque.",
    url: "https://chicagoburgersite.vercel.app/",
    captura: capturaMemphis,
    alt: "Página inicial do site conceitual da hamburgueria Memphis Burger, com foto de hambúrguer em fundo escuro",
    destaque: true,
  },
  {
    nome: "Rapé Xingu",
    linha:
      "Loja virtual de produto artesanal. Catálogo com duas linhas, carrinho e pedido finalizado pelo WhatsApp, com confirmação de maioridade na entrada.",
    url: "https://site-rapechingu.vercel.app",
    captura: capturaRape,
    alt: "Página inicial do site conceitual da loja Rapé Xingu",
  },
];

export function Portfolio() {
  return (
    <Secao id="portfolio" rotulo="portfolio-titulo">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div data-revelar className="lg:col-span-7">
          <h2 id="portfolio-titulo" className="text-h3 lg:text-h2">
            Peças de mostruário
          </h2>
          <p className="mt-5 text-areia">
            Projetos conceituais que a equipe criou para mostrar o que entrega. Não são clientes: são demonstrações, feitas
            com o mesmo cuidado de um projeto real.
          </p>
        </div>
      </div>

      <ul data-revelar-grupo className="mt-14 grid gap-6 lg:grid-cols-12">
        {projetos.map((p) => (
          <li
            key={p.nome}
            className={`group flex flex-col rounded-peca border border-filete bg-obsidiana-alta p-4 md:p-5 ${p.destaque ? "lg:col-span-7" : "lg:col-span-5"}`}
          >
            {/* Captura real do projeto em moldura escura fina */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-peca border border-filete bg-obsidiana">
              <Image
                src={p.captura}
                alt={p.alt}
                fill
                sizes={p.destaque ? "(min-width: 1024px) 680px, 100vw" : "(min-width: 1024px) 480px, 100vw"}
                className="object-cover object-top transition-transform duration-700 ease-ponteiro group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col px-2 pb-2 pt-6 md:px-3">
              <span className="self-start rounded-peca border border-filete px-2.5 py-1 text-apoio text-areia">Projeto conceitual</span>
              <h3 className="mt-5 text-h3">{p.nome}</h3>
              <p className="mt-3 text-areia">{p.linha}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex pt-6 min-h-11 items-center self-start text-ouro underline decoration-ouro/40 underline-offset-4 hover:decoration-ouro"
              >
                Ver o projeto<span className="sr-only"> {p.nome} (abre em nova aba)</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
