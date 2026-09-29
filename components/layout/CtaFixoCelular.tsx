import { linkWhatsApp } from "@/lib/site";

// Botão fixo no rodapé da tela, só no celular (DIRECAO: layout do celular).
export function CtaFixoCelular() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-filete bg-obsidiana/95 p-3 backdrop-blur-sm lg:hidden">
      <a
        href={linkWhatsApp("diagnostico")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 w-full items-center justify-center rounded-peca bg-ouro font-medium text-obsidiana"
      >
        Quero meu diagnóstico
      </a>
    </div>
  );
}
