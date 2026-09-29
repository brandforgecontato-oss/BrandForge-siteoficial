import { Botao } from "@/components/ui/Botao";
import { linkWhatsApp } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pb-secao-cel pt-32 lg:pb-secao lg:pt-44">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 id="hero-titulo" className="max-w-[19ch] text-h1-cel lg:text-h1">
            Mais clientes e menos trabalho manual, com IA feita sob medida para o seu negócio.
          </h1>
          <p className="mt-6 max-w-[46ch] text-destaque text-areia">
            A gente descobre onde seu negócio perde tempo e dinheiro, constrói a solução e mede o resultado todo mês.
          </p>
          <div className="mt-10">
            <Botao href={linkWhatsApp("diagnostico")} externo>
              Quero meu diagnóstico
            </Botao>
            <p className="mt-3 text-apoio text-areia">Grátis, de 20 a 30 minutos, pelo WhatsApp.</p>
          </div>
        </div>

        {/* A abertura: o vídeo visto através de um círculo, como o fundo de caixa de um relógio */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative aspect-square w-[70%] overflow-hidden rounded-full border border-filete lg:w-full lg:max-w-[440px]">
            <video
              className="absolute inset-0 size-full object-cover"
              src="/midia/abertura.mp4"
              poster="/midia/abertura-poster.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
