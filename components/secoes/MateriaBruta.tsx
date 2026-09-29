import Image from "next/image";
import { Secao } from "@/components/ui/Secao";
import horizonte from "@/public/midia/horizonte.webp";

const problemas = [
  "A mensagem que chega às 22h e só é respondida no dia seguinte, quando o cliente já fechou com outro.",
  "A mesma pergunta sobre preço, horário e forma de pagamento, respondida à mão, uma por uma.",
  "O orçamento que atrasa porque a informação está espalhada entre WhatsApp, planilha e caderno.",
  "O cliente que some depois do primeiro contato porque ninguém lembrou de retomar a conversa.",
  "Quem procura seu serviço no Google e não encontra nada que passe confiança.",
];

export function MateriaBruta() {
  return (
    <Secao rotulo="materia-titulo">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        <div data-revelar className="lg:col-span-7">
          <h2 id="materia-titulo" className="text-h3 lg:text-h2">
            Onde o seu negócio perde tempo hoje
          </h2>
          <p className="mt-5 text-destaque text-areia">
            Quase nunca falta ferramenta. Falta alguém arrumar o trabalho que se repete todo dia.
          </p>
        </div>

        {/* Apoio visual: a estrutura ainda em obra, a matéria antes de virar peça */}
        <div className="lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-peca border border-filete lg:sticky lg:top-28 lg:aspect-[3/4]">
            <Image
              src={horizonte}
              alt=""
              fill
              data-paralaxe
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover object-[20%_50%] [filter:sepia(0.2)]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_40%_45%,transparent_40%,rgb(23_20_15/0.75)_100%)]" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul data-revelar-grupo className="border-t border-filete lg:mt-10">
            {problemas.map((p) => (
              <li key={p} className="flex gap-5 border-b border-filete py-6 text-marfim">
                <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-bronze" />
                {p}
              </li>
            ))}
          </ul>
          <p data-revelar className="mt-10 max-w-[36ch] font-display text-destaque text-ouro lg:text-h3">
            Cada um desses problemas é matéria bruta. O nosso trabalho é medir e forjar a peça que resolve.
          </p>
        </div>
      </div>
    </Secao>
  );
}
