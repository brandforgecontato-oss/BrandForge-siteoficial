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
        <div data-revelar className="self-start lg:sticky lg:top-32 lg:col-span-4">
          <h2 id="compromissos-titulo" className="text-h3 lg:text-h2">
            O que fica por escrito
          </h2>
          <p className="mt-5 text-areia">
            Em vez de promessa bonita, compromisso que você pode cobrar. Tudo isso entra na proposta.
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden rounded-peca border border-filete bg-obsidiana-alta px-6 py-4 md:px-10 md:py-6 lg:col-span-7 lg:col-start-6 lg:mt-0">
          {/* Filete de luz no topo, como nas peças da escada */}
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ouro/60 to-transparent" />
          {/* Cada linha ganha um traço dourado que se desenha ao aparecer (--traco, animado em MovimentoHome) */}
          <dl data-revelar-grupo>
            {compromissos.map((c) => (
              <div
                key={c.nome}
                data-traco
                className="relative grid gap-1 border-b border-filete py-6 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-[var(--traco,1)] after:bg-ouro/70 last:border-b-0 last:after:hidden md:grid-cols-[14rem_1fr] md:gap-6"
              >
                <dt className="font-medium text-ouro">{c.nome}</dt>
                <dd className="text-marfim">{c.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Secao>
  );
}
