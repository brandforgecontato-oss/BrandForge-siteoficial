import Link from "next/link";
import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { linkWhatsApp, type AssuntoWhatsApp } from "@/lib/site";

type Peca = {
  numero: string;
  nome: string;
  preco?: string;
  frase: string;
  oQueE: string;
  paraQuem: string;
  botao: string;
  assunto: AssuntoWhatsApp;
  pagina?: string;
};

const pecas: Peca[] = [
  {
    numero: "0",
    nome: "Diagnóstico",
    preco: "grátis",
    frase: "Descubra onde o seu negócio perde tempo e dinheiro.",
    oQueE:
      "Uma conversa de 20 a 30 minutos, marcada pelo WhatsApp. Antes de marcar, três perguntas rápidas para ver se faz sentido para você.",
    paraQuem: "qualquer negócio que quer saber por onde começar.",
    botao: "Quero meu diagnóstico",
    assunto: "diagnostico",
  },
  {
    numero: "1",
    nome: "Presença",
    frase: "Seja encontrado e passe confiança antes da primeira conversa.",
    oQueE: "Site, loja virtual e marca. Rápido no celular, preparado para o Google e com o WhatsApp a um toque.",
    paraQuem: "quem é procurado no Google ou no Instagram e ainda não tem onde mostrar o próprio trabalho.",
    botao: "Falar sobre Presença",
    assunto: "presenca",
    pagina: "/sites",
  },
  {
    numero: "2",
    nome: "Atendimento IA",
    frase: "Atenda todo mundo, sem perder venda por demora.",
    oQueE:
      "Um atendente de IA no seu WhatsApp que responde as perguntas de sempre a qualquer hora e passa a conversa para você quando precisa. Com um CRM para acompanhar cada cliente até fechar.",
    paraQuem: "quem recebe mensagem todo dia e já perdeu cliente por demora.",
    botao: "Falar sobre Atendimento IA",
    assunto: "atendimento",
    pagina: "/atendimento-ia",
  },
  {
    numero: "3",
    nome: "Sob medida",
    frase: "Resolvemos o gargalo específico da sua operação.",
    oQueE: "Sistemas, automações e integrações entre as ferramentas que você já usa, desenhados a partir do diagnóstico.",
    paraQuem: "negócios com um processo que trava e empresas maiores que precisam colocar a IA dentro da operação.",
    botao: "Falar sobre Sob medida",
    assunto: "sobMedida",
    pagina: "/sob-medida",
  },
];

export function Ofertas() {
  return (
    <Secao id="servicos" rotulo="ofertas-titulo">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div data-revelar className="lg:col-span-7">
          <h2 id="ofertas-titulo" className="text-h3 lg:text-h2">
            Uma peça de cada vez, na ordem que o seu negócio precisa
          </h2>
          <p className="mt-5 text-destaque text-areia">
            Você começa pelo degrau que resolve o problema de agora. Os outros ficam para quando fizerem sentido.
          </p>
        </div>
      </div>

      <ol data-revelar-grupo className="mt-14 space-y-6">
        {pecas.map((p) => (
          <li key={p.numero} className="rounded-peca border border-filete bg-obsidiana-alta p-6 md:p-10 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="font-display text-h2 leading-none text-ouro" aria-hidden="true">
                {p.numero}
              </p>
              <h3 className="mt-4 text-h3">
                {p.pagina ? (
                  <Link href={p.pagina} className="hover:text-ouro">
                    {p.nome}
                  </Link>
                ) : (
                  p.nome
                )}
                {p.preco && <span className="ml-3 font-sans text-apoio font-medium text-ouro">({p.preco})</span>}
              </h3>
              <p className="mt-3 text-destaque text-marfim">{p.frase}</p>
            </div>
            <div className="mt-6 lg:col-span-7 lg:mt-0">
              <dl className="space-y-5">
                <div>
                  <dt className="text-apoio font-medium text-areia">O que é</dt>
                  <dd className="mt-1 text-marfim">{p.oQueE}</dd>
                </div>
                <div>
                  <dt className="text-apoio font-medium text-areia">Para quem</dt>
                  <dd className="mt-1 text-marfim first-letter:uppercase">{p.paraQuem}</dd>
                </div>
              </dl>
              <Botao href={linkWhatsApp(p.assunto)} externo variante={p.numero === "0" ? "cheio" : "contorno"} className="mt-8">
                {p.botao}
              </Botao>
            </div>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
