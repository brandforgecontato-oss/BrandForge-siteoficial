import type { Metadata } from "next";
import Link from "next/link";
import { BlocoLista, BlocoTexto, ProximoDegrau } from "@/components/paginas/Blocos";
import { HeroServico } from "@/components/paginas/HeroServico";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { Perguntas } from "@/components/secoes/Perguntas";
import horizonte from "@/public/midia/horizonte.webp";

export const metadata: Metadata = {
  title: { absolute: "Site para pequeno negócio, feito sob medida | BrandForge" },
  description:
    "Site, loja virtual e marca para pequenos negócios no Brasil e em Portugal. Rápido no celular, pronto para o Google e com o WhatsApp a um toque.",
  alternates: { canonical: "/sites" },
};

export default function Sites() {
  return (
    <main id="conteudo">
      <HeroServico
        titulo="Site para pequeno negócio, feito sob medida"
        apoio="Seja encontrado e passe confiança antes da primeira conversa. Site, loja virtual e marca, com o WhatsApp a um toque."
        botao="Falar sobre Presença"
        assunto="presenca"
        imagem={horizonte}
      />
      <BlocoLista
        id="inclui"
        titulo="O que inclui"
        itens={[
          "Site de uma ou mais páginas, pensado primeiro para o celular.",
          "Loja virtual com catálogo e pedido pelo WhatsApp, quando você vende produto.",
          "Marca (logo, cores e tipografia), se você ainda não tem.",
          "Preparado para o Google e para os assistentes de IA: textos claros, carregamento rápido e dados organizados.",
          "Botão de WhatsApp com mensagem pronta, em todas as páginas.",
          "Hospedagem, manutenção e pequenos ajustes na mensalidade.",
        ]}
      />
      <BlocoTexto id="para-quem" titulo="Para quem">
        <p>
          Para quem é procurado no Google ou no Instagram e ainda não tem onde mostrar o próprio trabalho: clínica,
          escritório, loja, prestador de serviço.
        </p>
        <p>
          <Link href="/#portfolio" className="text-ouro underline decoration-ouro/40 underline-offset-4 hover:decoration-ouro">
            Veja dois projetos conceituais
          </Link>
        </p>
      </BlocoTexto>
      <Perguntas
        id="perguntas-sites"
        titulo="Perguntas"
        itens={[
          {
            pergunta: "Já tenho Instagram. Preciso de site?",
            resposta:
              "O Instagram mostra o dia a dia. O site é o que aparece quando alguém procura o seu serviço no Google, e ele é seu: não depende de algoritmo.",
          },
          {
            pergunta: "E se eu quiser mudar algo depois?",
            resposta:
              "Pequenos ajustes estão incluídos na mensalidade. Mudanças maiores entram numa proposta à parte, com preço fechado.",
          },
          { pergunta: "O site e o domínio são meus?", resposta: "Sim. O site, o domínio e os dados são seus." },
          { pergunta: "Quanto tempo leva?", resposta: "O prazo é combinado por escrito na proposta, antes de começar." },
        ]}
      />
      <ProximoDegrau
        texto="Quando o site começar a trazer mensagens, o atendimento com IA responde todas, a qualquer hora."
        href="/atendimento-ia"
        rotulo="Conheça o Atendimento IA"
      />
      <CtaFinal />
    </main>
  );
}
