import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { linkWhatsApp } from "@/lib/site";
import rede from "@/public/midia/rede.webp";

// Faixa curta: o curso fica fora da escada de ofertas.
export function Curso() {
  return (
    <section id="curso" aria-labelledby="curso-titulo" className="relative isolate overflow-hidden border-y border-filete bg-obsidiana-alta">
      {/* A rede dourada, sutil à direita: a inteligência que se aprende a usar */}
      <Image
        src={rede}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[80%_50%] opacity-40 mix-blend-lighten [mask-image:linear-gradient(to_right,transparent_50%,black_85%)] lg:opacity-60"
      />
      <div data-revelar className="mx-auto grid max-w-[1200px] gap-8 px-5 py-16 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-8">
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
