import Link from "next/link";
import { Botao } from "@/components/ui/Botao";
import { Marcas } from "@/components/ui/Marcas";
import { linkWhatsApp } from "@/lib/site";

// 404 (COPY: "Essa peça não está aqui."): o bisel vazio, sem o mecanismo dentro.
export default function NaoEncontrada() {
  return (
    <main id="conteudo" className="mx-auto flex min-h-svh max-w-[1200px] items-center px-5 pb-28 pt-32 md:px-10">
      <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 className="text-h1-cel lg:text-h1">Essa peça não está aqui.</h1>
          <p className="mt-6 text-destaque text-areia">O endereço pode ter mudado ou o link está incompleto.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-peca bg-ouro px-6 font-medium text-obsidiana transition-colors duration-300 ease-ponteiro hover:bg-marfim"
            >
              Voltar ao início
            </Link>
            <Botao href={linkWhatsApp("diagnostico")} externo variante="contorno">
              Quero meu diagnóstico
            </Botao>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
          <div className="relative aspect-square w-full max-w-[360px]">
            <Marcas />
          </div>
        </div>
      </div>
    </main>
  );
}
