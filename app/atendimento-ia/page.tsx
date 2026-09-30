import type { Metadata } from "next";
import { BlocoLista, BlocoTexto, ProximoDegrau } from "@/components/paginas/Blocos";
import { HeroServico } from "@/components/paginas/HeroServico";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { Perguntas } from "@/components/secoes/Perguntas";
import rede from "@/public/midia/rede.webp";

export const metadata: Metadata = {
  title: { absolute: "Atendente de IA no WhatsApp para o seu negócio | BrandForge" },
  description:
    "Atendente de IA no WhatsApp do seu negócio: responde a qualquer hora, passa a conversa para você quando precisa e registra cada cliente num CRM.",
  alternates: { canonical: "/atendimento-ia" },
};

export default function AtendimentoIA() {
  return (
    <main id="conteudo">
      <HeroServico
        titulo="Atendente de IA no WhatsApp, sob medida para o seu negócio"
        apoio="Atenda todo mundo, sem perder venda por demora. A IA responde as perguntas de sempre e você assume quando quiser."
        botao="Falar sobre Atendimento IA"
        assunto="atendimento"
        imagem={rede}
      />
      <BlocoTexto id="na-pratica" titulo="Na prática" destaque>
        <p>
          Um cliente manda às 22h: &ldquo;Vocês abrem sábado? Quanto custa?&rdquo;. A IA responde na hora, com o horário e o
          preço que você aprovou, e oferece um horário. Se ele quiser falar com alguém, a conversa fica para você, já
          registrada no CRM.
        </p>
      </BlocoTexto>
      <BlocoLista
        id="inclui"
        titulo="O que inclui"
        itens={[
          "Atendente de IA no WhatsApp do seu negócio, respondendo a qualquer hora.",
          "Respostas montadas a partir do seu negócio: serviços, preços, horários e formas de pagamento.",
          "Você aprova as respostas antes de irem ao ar.",
          "A conversa passa para você quando precisa, e você assume qualquer uma na hora que quiser.",
          "CRM para acompanhar cada cliente, do primeiro contato até fechar.",
          "Relatório mensal: mensagens respondidas, tempo de resposta e conversas que viraram venda.",
          "Hospedagem, manutenção e pequenos ajustes na mensalidade.",
        ]}
      />
      <BlocoTexto id="para-quem" titulo="Para quem">
        <p>Para quem recebe mensagem todo dia e já perdeu cliente por demora.</p>
      </BlocoTexto>
      <Perguntas
        id="perguntas-atendimento"
        titulo="Perguntas"
        itens={[
          {
            pergunta: "Já uso respostas automáticas do WhatsApp Business. É a mesma coisa?",
            resposta:
              "Não. Resposta automática manda sempre o mesmo texto. O atendente de IA entende a pergunta e responde com as informações do seu negócio.",
          },
          {
            pergunta: "E se a IA errar com meu cliente?",
            resposta: "Você aprova as respostas antes de irem ao ar e assume qualquer conversa na hora que quiser.",
          },
          { pergunta: "As conversas e os dados são meus?", resposta: "Sim. Os dados são seus." },
          { pergunta: "Quanto tempo leva?", resposta: "O prazo é combinado por escrito na proposta, antes de começar." },
        ]}
      />
      <ProximoDegrau
        texto="Se o gargalo está depois do atendimento, no orçamento, na agenda ou no estoque, a peça é sob medida."
        href="/sob-medida"
        rotulo="Conheça o Sob medida"
      />
      <CtaFinal />
    </main>
  );
}
