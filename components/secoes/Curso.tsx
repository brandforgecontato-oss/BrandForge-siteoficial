import { Botao } from "@/components/ui/Botao";
import { linkWhatsApp } from "@/lib/site";

// Faixa curta: o curso fica fora da escada de ofertas.
export function Curso() {
  return (
    <section id="curso" aria-labelledby="curso-titulo" className="border-y border-filete bg-obsidiana-alta">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-16 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-8">
          <h2 id="curso-titulo" className="text-h3">
            Prefere aprender a usar IA por conta própria?
          </h2>
          <p className="mt-4 text-areia">
            Além de construir, a gente ensina. O curso de IA é um serviço à parte, para você e a sua equipe produzirem mais
            com as ferramentas do dia a dia. Formato e valor são combinados pelo WhatsApp.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Botao href={linkWhatsApp("curso")} externo variante="contorno">
            Falar sobre o curso
          </Botao>
        </div>
      </div>
    </section>
  );
}
