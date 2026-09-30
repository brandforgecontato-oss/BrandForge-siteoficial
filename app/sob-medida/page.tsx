import type { Metadata } from "next";
import { BlocoLista, BlocoTexto } from "@/components/paginas/Blocos";
import { JsonLdServico } from "@/components/seo/JsonLdServico";
import { openGraphBase } from "@/lib/metadados";
import { HeroServico } from "@/components/paginas/HeroServico";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { Perguntas } from "@/components/secoes/Perguntas";
import torreCircuitos from "@/public/midia/mecanismo-poster.webp";

export const metadata: Metadata = {
  title: { absolute: "Automação com IA sob medida para empresas | BrandForge" },
  description:
    "Sistemas, automações e integrações com IA, desenhados a partir de um diagnóstico da sua operação. Para negócios no Brasil e em Portugal.",
  alternates: { canonical: "/sob-medida" },
  openGraph: { ...openGraphBase, title: "Automação com IA sob medida para empresas | BrandForge", description: "Sistemas, automações e integrações com IA, desenhados a partir de um diagnóstico da sua operação. Para negócios no Brasil e em Portugal.", url: "/sob-medida" },
};

export default function SobMedida() {
  return (
    <main id="conteudo">
      <HeroServico
        titulo="Automação com IA sob medida para a sua operação"
        apoio="Resolvemos o gargalo específico do seu negócio, conectando as ferramentas que você já usa. Tudo começa pelo diagnóstico."
        botao="Falar sobre Sob medida"
        assunto="sobMedida"
        imagem={torreCircuitos}
      />
      <BlocoLista
        id="exemplos"
        titulo="Exemplos do que dá para construir"
        texto="Cada peça sai do diagnóstico, então nenhuma é igual. Alguns exemplos do tipo de gargalo que resolvemos:"
        itens={[
          "O orçamento que junta dados do WhatsApp, da planilha e do estoque e sai pronto para enviar.",
          "A agenda que confirma, remarca e lembra o cliente sem ninguém digitar.",
          "O pedido que cai direto no sistema, sem copiar e colar.",
          "O relatório do mês que se monta sozinho.",
        ]}
      />
      <BlocoLista
        id="como-e-feito"
        titulo="Como é feito"
        numerada
        itens={[
          "Diagnóstico da operação: onde o processo trava e quanto tempo ele consome.",
          "Proposta de uma página, com escopo, prazo e preço fechados.",
          "Construção e integração com as ferramentas que você já usa.",
          "Testes com você antes de ir ao ar.",
          "Manutenção, pequenos ajustes e relatório mensal.",
        ]}
      />
      <BlocoTexto id="empresa-maior" titulo="Empresa maior?" destaque>
        <p>O caminho é o mesmo: diagnóstico primeiro, proposta por escrito depois, com escopo, prazo e preço fechados.</p>
      </BlocoTexto>
      <Perguntas
        id="perguntas-sob-medida"
        titulo="Perguntas"
        itens={[
          {
            pergunta: "Preciso trocar os sistemas que já uso?",
            resposta:
              "A ideia é conectar o que você já tem. Se algo precisar mudar, isso aparece na proposta, antes de começar.",
          },
          { pergunta: "Os dados da minha empresa ficam com quem?", resposta: "Os dados são seus." },
          {
            pergunta: "Quanto custa e quanto tempo leva?",
            resposta: "Depende do gargalo. Preço e prazo vêm fechados e por escrito na proposta.",
          },
        ]}
      />
      <BlocoTexto id="fecho" titulo="Não sabe qual peça o seu negócio precisa?">
        <p>É para isso que existe o diagnóstico.</p>
      </BlocoTexto>
      <CtaFinal />
      <JsonLdServico nome="Automação com IA sob medida" descricao="Sistemas, automações e integrações com IA, desenhados a partir de um diagnóstico da sua operação. Para negócios no Brasil e em Portugal." rota="/sob-medida" />
    </main>
  );
}
