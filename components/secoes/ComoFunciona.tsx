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
          <h2 id="como-titulo" className="text-h3 lg:text-h2">
            Do primeiro contato ao relatório do mês
          </h2>

          {/* Linha do tempo vertical: é sequência real */}
          <ol className="mt-12 border-l border-filete">
            {passos.map((p, i) => (
              <li key={p.titulo} className="relative pb-10 pl-8 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-ouro" />
                <h3 className="text-destaque">
                  <span className="mr-2 text-ouro">{i + 1}.</span>
                  {p.titulo}
                </h3>
                <p className="mt-2 text-areia">{p.texto}</p>
              </li>
            ))}
          </ol>

          <Botao href={linkWhatsApp("diagnostico")} externo className="mt-12">
            Quero meu diagnóstico
          </Botao>
        </div>
      </div>
    </Secao>
  );
}
