import Image, { type StaticImageData } from "next/image";
import { Botao } from "@/components/ui/Botao";
import { Marcas } from "@/components/ui/Marcas";
import { linkWhatsApp, type AssuntoWhatsApp } from "@/lib/site";

type Props = {
  titulo: string;
  apoio: string;
  botao: string; // "Falar sobre <serviço>"
  assunto: AssuntoWhatsApp;
  imagem: StaticImageData;
};

// Hero das páginas de serviço: mesma abertura circular da home, com imagem parada no lugar do vídeo.
export function HeroServico({ titulo, apoio, botao, assunto, imagem }: Props) {
  return (
    <section id="hero" aria-labelledby="hero-titulo" className="pb-secao-cel pt-32 lg:pb-secao lg:pt-44">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 id="hero-titulo" className="max-w-[20ch] text-h1-cel lg:text-h1">
            {titulo}
          </h1>
          <p className="mt-6 max-w-[46ch] text-destaque text-areia">{apoio}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Botao href={linkWhatsApp(assunto)} externo>
              {botao}
            </Botao>
            <Botao href={linkWhatsApp("diagnostico")} externo variante="contorno">
              Quero meu diagnóstico
            </Botao>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative aspect-square w-[78%] lg:w-full lg:max-w-[420px]">
            <Marcas />
            <div className="absolute inset-[7%] overflow-hidden rounded-full border border-ouro/30">
              <Image
                src={imagem}
                alt=""
                fill
                preload
                sizes="(min-width: 1024px) 380px, 70vw"
                className="object-cover [filter:sepia(0.2)]"
              />
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
