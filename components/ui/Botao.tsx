import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variante?: "cheio" | "contorno";
  externo?: boolean;
  className?: string;
};

// Botão como link: todo CTA do site leva a outro lugar (WhatsApp, Cal.com ou âncora).
export function Botao({ href, children, variante = "cheio", externo = false, className = "" }: Props) {
  const estilo =
    variante === "cheio"
      ? "bg-ouro text-obsidiana hover:bg-marfim"
      : "border border-ouro/60 text-marfim hover:border-ouro hover:text-ouro";
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center rounded-peca px-6 text-corpo font-medium transition-colors duration-300 ease-ponteiro ${estilo} ${className}`}
    >
      {children}
    </a>
  );
}
