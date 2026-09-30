import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { linkWhatsApp } from "@/lib/site";

const passos = [
  {
    titulo: "Diagnóstico.",
    texto:
      "Você responde três perguntas pelo WhatsApp e marcamos de 20 a 30 minutos para entender a sua rotina: por onde o cliente chega e onde o tempo se perde.",
  },
  {
    titulo: "Proposta.",
    texto: "Uma página com o que encontramos, a peça que resolve, o prazo e o preço fechado. Nada começa sem o seu ok.",
  },
  {
    titulo: "Entrega.",
    texto: "A equipe constrói, você testa e aprova. No atendimento com IA, você aprova as respostas antes de irem ao ar.",
  },
  {
    titulo: "Relatório mensal.",
    texto:
      "Todo mês, o número do que mudou: mensagens respondidas, horas poupadas, conversas que viraram venda. A mensalidade cobre hospedagem, manutenção e pequenos ajustes.",
  },
];

export function ComoFunciona() {
  return (
    <Secao id="como-funciona" rotulo="como-titulo">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 data-revelar id="como-titulo" className="text-h3 lg:text-h2">
            Do primeiro contato ao relatório do mês
          </h2>

          {/* Linha do tempo vertical: é sequência real */}
          <div className="relative mt-12">
            <span data-linha aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-ouro" />
            <ol data-revelar-grupo data-passos className="border-l border-filete">
              {passos.map((p, i) => (
                <li key={p.titulo} className="relative pb-10 pl-8 transition-opacity duration-500 ease-ponteiro last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-ouro" />
                  <h3 className="text-destaque">
                    <span className="mr-2 text-ouro">{i + 1}.</span>
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-areia">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>

          <div data-revelar className="mt-12">
            <Botao href={linkWhatsApp("diagnostico")} externo>
              Quero meu diagnóstico
            </Botao>
          </div>
        </div>

        {/* Mostrador (só no computador, com movimento): o arco se completa a cada passo */}
        <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
          <Mostrador />
        </div>
      </div>
    </Secao>
  );
}

// Decorativo: o JS (Movimento) mostra o mostrador, move o arco e troca o número do passo.
function Mostrador() {
  const marcas = Array.from({ length: 48 }, (_, i) => i);
  return (
    <div data-mostrador aria-hidden="true" className="invisible sticky top-[30vh] mx-auto aspect-square w-full max-w-[300px]">
      <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-0 size-full">
        {marcas.map((i) => (
          <line
            key={i}
            x1="100"
            y1="4"
            x2="100"
            y2={i % 12 === 0 ? 11 : 8}
            stroke={i % 12 === 0 ? "var(--color-ouro)" : "var(--color-bronze)"}
            strokeWidth={i % 12 === 0 ? 0.8 : 0.4}
            transform={`rotate(${i * 7.5} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="82" fill="none" stroke="var(--color-filete)" strokeWidth="1" />
        <circle
          data-mostrador-arco
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="var(--color-ouro)"
          strokeWidth="1.5"
          pathLength={100}
          strokeDasharray="100"
          strokeDashoffset="100"
          transform="rotate(-90 100 100)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span data-mostrador-numero className="font-display text-[5.5rem] leading-none text-ouro">
          1
        </span>
        <span className="mt-2 text-apoio text-areia">de 4</span>
      </div>
    </div>
  );
}
