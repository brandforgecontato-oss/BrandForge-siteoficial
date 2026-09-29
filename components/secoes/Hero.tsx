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
          <div className="relative aspect-square w-[78%] lg:w-full lg:max-w-[460px]">
            <Marcas />
            <div data-abertura className="absolute inset-[7%] overflow-hidden rounded-full border border-ouro/30">
              <video
                className="absolute inset-0 size-full scale-110 object-cover [filter:sepia(0.45)_saturate(0.85)_brightness(0.95)]"
              src="/midia/abertura.mp4"
              poster="/midia/abertura-poster.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
                aria-hidden="true"
              />
              {/* Bordas escurecidas: o mecanismo aparece do centro, como sob o vidro */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgb(23_20_15/0.9)_100%)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Anel de marcas finas em volta da abertura, como o bisel de um relógio (60 marcas, 12 maiores).
function Marcas() {
  const marcas = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-0 size-full">
      <circle cx="100" cy="100" r="99" fill="none" stroke="var(--color-filete)" strokeWidth="0.4" />
      {marcas.map((i) => {
        const maior = i % 5 === 0;
        return (
          <line
            key={i}
            x1="100"
            y1="2.5"
            x2="100"
            y2={maior ? 6.5 : 4.5}
            stroke={maior ? "var(--color-ouro)" : "var(--color-bronze)"}
            strokeWidth={maior ? 0.6 : 0.35}
            transform={`rotate(${i * 6} 100 100)`}
          />
        );
      })}
    </svg>
  );
}
