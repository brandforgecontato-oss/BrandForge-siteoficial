import { Secao } from "@/components/ui/Secao";

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
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 id="materia-titulo" className="text-h3 lg:text-h2">
            Onde o seu negócio perde tempo hoje
          </h2>
          <p className="mt-5 text-destaque text-areia">
            Quase nunca falta ferramenta. Falta alguém arrumar o trabalho que se repete todo dia.
          </p>
          <ul className="mt-10 border-t border-filete">
            {problemas.map((p) => (
              <li key={p} className="border-b border-filete py-5 text-marfim">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-display text-destaque text-ouro">
            Cada um desses problemas é matéria bruta. O nosso trabalho é medir e forjar a peça que resolve.
          </p>
        </div>
      </div>
    </Secao>
  );
}
