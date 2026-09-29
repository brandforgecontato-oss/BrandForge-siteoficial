import { Secao } from "@/components/ui/Secao";

type Projeto = { nome: string; linha: string; url: string; destaque?: boolean };

// A imobiliária entra quando Filipe enviar endereço e descrição (pendência no ESTADO).
const projetos: Projeto[] = [
  {
    nome: "Memphis Burger",
    linha:
      "Hamburgueria em Brasília. Cardápio fácil de ler no celular e pedido direto pelo WhatsApp, com endereço e horário a um toque.",
    url: "https://chicagoburgersite.vercel.app/",
    destaque: true,
  },
  {
    nome: "Rapé Xingu",
    linha:
      "Loja virtual de produto artesanal. Catálogo com duas linhas, carrinho e pedido finalizado pelo WhatsApp, com confirmação de maioridade na entrada.",
    url: "https://site-rapechingu.vercel.app",
  },
];

export function Portfolio() {
  return (
    <Secao id="portfolio" rotulo="portfolio-titulo">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 id="portfolio-titulo" className="text-h3 lg:text-h2">
            Peças de mostruário
          </h2>
          <p className="mt-5 text-areia">
            Projetos conceituais que a equipe criou para mostrar o que entrega. Não são clientes: são demonstrações, feitas
            com o mesmo cuidado de um projeto real.
          </p>
        </div>
      </div>

      <ul className="mt-14 grid gap-6 lg:grid-cols-12">
        {projetos.map((p) => (
          <li
            key={p.nome}
            className={`flex flex-col rounded-peca border border-filete bg-obsidiana-alta p-6 md:p-8 ${p.destaque ? "lg:col-span-7" : "lg:col-span-5"}`}
          >
            <span className="self-start rounded-peca border border-filete px-2.5 py-1 text-apoio text-areia">Projeto conceitual</span>
            <h3 className="mt-5 text-h3">{p.nome}</h3>
            <p className="mt-3 text-areia">{p.linha}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center self-start text-ouro underline decoration-ouro/40 underline-offset-4 hover:decoration-ouro"
            >
              Ver o projeto<span className="sr-only"> {p.nome} (abre em nova aba)</span>
            </a>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
