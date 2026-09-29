import { Secao } from "@/components/ui/Secao";

const compromissos = [
  { nome: "Prazo.", texto: "Combinado por escrito antes de começar." },
  { nome: "Preço fechado.", texto: "Sem taxa surpresa, com o que está incluso escrito na proposta." },
  { nome: "Você no controle da IA.", texto: "Aprova as respostas antes de irem ao ar e assume a conversa quando quiser." },
  { nome: "Sem amarras.", texto: "O site, o domínio e os dados são seus." },
  { nome: "Relatório mensal.", texto: "O número do que mudou, todo mês." },
];

// "Ficha da peça": poucas especificações exatas, como numa manufatura.
export function Compromissos() {
  return (
    <Secao rotulo="compromissos-titulo">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 id="compromissos-titulo" className="text-h3 lg:text-h2">
            O que fica por escrito
          </h2>
          <p className="mt-5 text-areia">
            Em vez de promessa bonita, compromisso que você pode cobrar. Tudo isso entra na proposta.
          </p>
        </div>
        <dl className="mt-10 border-t border-filete lg:col-span-7 lg:col-start-6 lg:mt-0">
          {compromissos.map((c) => (
            <div key={c.nome} className="grid gap-1 border-b border-filete py-5 md:grid-cols-[14rem_1fr] md:gap-6">
              <dt className="font-medium text-ouro">{c.nome}</dt>
              <dd className="text-marfim">{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Secao>
  );
}
