import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

// Rascunho aprovado na fase 4 (projeto/COPY.md). Revisar com advogado antes da fase 9.
// Provisórios: data da última atualização e razão social/CNPJ (ver ESTADO, "Provisórios a trocar").
export const metadata: Metadata = {
  title: { absolute: "Política de privacidade | BrandForge" },
  description:
    "Como a BrandForge trata os dados de quem visita o site, fala pelo WhatsApp ou agenda uma conversa pelo Cal.com, segundo a LGPD e o RGPD.",
  alternates: { canonical: "/privacidade" },
};

const email = site.negocio.email;

function Topico({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="border-t border-filete py-8">
      <h2 className="text-h3">{titulo}</h2>
      <div className="mt-4 space-y-3 text-areia">{children}</div>
    </section>
  );
}

export default function Privacidade() {
  return (
    <main id="conteudo" className="mx-auto max-w-[1200px] px-5 pb-secao-cel pt-32 md:px-10 lg:pb-secao lg:pt-44">
      <div className="max-w-[46rem]">
        <h1 className="text-h1-cel lg:text-h1">Política de privacidade</h1>
        <p className="mt-5 text-apoio text-areia">Última atualização: a definir na publicação.</p>

        <div className="mt-12">
          <Topico titulo="Quem somos">
            <p>
              BrandForge. Contato para assuntos de privacidade:{" "}
              <a href={`mailto:${email}`} className="text-ouro underline decoration-ouro/40 underline-offset-4">
                {email}
              </a>
              .
            </p>
          </Topico>
          <Topico titulo="O que coletamos pelo site">
            <p>O site não tem formulário. Coletamos só:</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-bronze">
              <li>
                dados técnicos de acesso (endereço IP, navegador, páginas visitadas), registrados pela hospedagem para
                segurança e funcionamento;
              </li>
              <li>nome, e-mail e o que você escrever ao agendar uma conversa pelo Cal.com.</li>
            </ul>
          </Topico>
          <Topico titulo="WhatsApp">
            <p>
              Ao tocar num botão de WhatsApp, você sai do site e a conversa acontece no aplicativo, sob a política de
              privacidade do WhatsApp. Usamos o que você nos manda só para responder e preparar o diagnóstico.
            </p>
          </Topico>
          <Topico titulo="Para que usamos">
            <p>
              Responder o seu contato, marcar e preparar a conversa, e manter o site seguro. Não vendemos nem
              compartilhamos seus dados para publicidade.
            </p>
          </Topico>
          <Topico titulo="Com quem compartilhamos">
            <p>
              Só com os serviços que fazem o site funcionar: hospedagem e medição de visitas (Vercel) e agendamento
              (Cal.com). Esses serviços podem guardar dados fora do Brasil e de Portugal.
            </p>
          </Topico>
          <Topico titulo="Base legal">
            <p>
              Seu consentimento ao nos procurar e o nosso interesse legítimo em manter o site seguro (LGPD art. 7; RGPD
              art. 6).
            </p>
          </Topico>
          <Topico titulo="Por quanto tempo">
            <p>Enquanto durar a conversa comercial ou o contrato e, depois, pelo prazo que a lei exigir.</p>
          </Topico>
          <Topico titulo="Seus direitos">
            <p>
              Você pode pedir acesso, correção, exclusão ou cópia dos seus dados e retirar o consentimento a qualquer
              momento, pelo e-mail{" "}
              <a href={`mailto:${email}`} className="text-ouro underline decoration-ouro/40 underline-offset-4">
                {email}
              </a>
              . No Brasil, também pode reclamar à ANPD; em Portugal, à CNPD.
            </p>
          </Topico>
          <Topico titulo="Cookies">
            <p>
              O site não usa cookies de rastreamento. Contamos as visitas de forma agregada, sem identificar você, pelo
              Vercel Web Analytics.
            </p>
          </Topico>
        </div>
      </div>
    </main>
  );
}
