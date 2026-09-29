import { Secao } from "@/components/ui/Secao";

export type Pergunta = { pergunta: string; resposta: string };

export const perguntasHome: Pergunta[] = [
  {
    pergunta: "Já uso WhatsApp Business ou ChatGPT. Preciso de vocês?",
    resposta:
      "A ferramenta você já tem. Falta alguém configurar, conectar ao seu negócio e cuidar dela todo mês. É isso que a gente faz.",
  },
  {
    pergunta: "E se a IA errar com meu cliente?",
    resposta: "Você aprova as respostas antes de irem ao ar e assume qualquer conversa na hora que quiser.",
  },
  { pergunta: "Vou ficar preso a vocês?", resposta: "Não. O site, o domínio e os dados são seus." },
  {
    pergunta: "Deve ser caro.",
    resposta:
      "O preço é fechado e vem na proposta, com o que está incluso escrito. Sem taxa surpresa. E o diagnóstico é grátis e não obriga a nada.",
  },
  { pergunta: "Quanto tempo leva?", resposta: "Depende da peça. O prazo é combinado por escrito na proposta, antes de começar." },
  {
    pergunta: "Preciso entender de tecnologia?",
    resposta: "Não. Você explica como o seu negócio funciona; a parte técnica é nossa.",
  },
  {
    pergunta: "Vocês atendem em Portugal?",
    resposta: "Sim. Atendemos negócios no Brasil e em Portugal, 100% online, pelo mesmo WhatsApp.",
  },
];

type Props = { id?: string; titulo?: string; itens?: Pergunta[] };

// Acordeão com <details>: funciona sem JavaScript.
export function Perguntas({ id = "perguntas", titulo = "Perguntas que a gente sempre ouve", itens = perguntasHome }: Props) {
  return (
    <Secao id={id} rotulo={`${id}-titulo`}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 data-revelar id={`${id}-titulo`} className="text-h3 lg:text-h2">
            {titulo}
          </h2>
          <div data-revelar-grupo className="mt-10 border-t border-filete">
            {itens.map((item) => (
              <details key={item.pergunta} className="group border-b border-filete">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-4 text-destaque text-marfim">
                  {item.pergunta}
                  <span aria-hidden="true" className="shrink-0 text-ouro transition-transform duration-300 ease-ponteiro group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-areia">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Secao>
  );
}
