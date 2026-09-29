import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { contato, linkWhatsApp } from "@/lib/site";

// Igual em todas as páginas (COPY: "Comece pela medida.").
export function CtaFinal() {
  return (
    <Secao rotulo="cta-final-titulo">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div data-revelar className="lg:col-span-7">
          <h2 id="cta-final-titulo" className="text-h2 lg:text-h1">
            Comece pela medida.
          </h2>
          <p className="mt-6 max-w-[44ch] text-destaque text-areia">
            Em 20 a 30 minutos você descobre onde o seu negócio perde tempo e dinheiro. Grátis e sem compromisso.
          </p>
          <Botao href={linkWhatsApp("diagnostico")} externo className="mt-10">
            Quero meu diagnóstico
          </Botao>
          {contato.calcom && (
            <p className="mt-6 text-areia">
              Prefere escolher o horário?{" "}
              <a
                href={contato.calcom}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ouro underline decoration-ouro/40 underline-offset-4 hover:decoration-ouro"
              >
                Agende pelo Cal.com
              </a>
            </p>
          )}
        </div>
      </div>
    </Secao>
  );
}
