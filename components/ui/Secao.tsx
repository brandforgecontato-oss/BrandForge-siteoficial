import type { ReactNode } from "react";

type Props = {
  id?: string;
  rotulo?: string; // id do título que nomeia a seção (aria-labelledby)
  children: ReactNode;
  className?: string;
};

// Moldura comum: largura máxima, respiro vertical e grade de 12 colunas (texto em 7).
export function Secao({ id, rotulo, children, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={rotulo} className={`py-secao-cel lg:py-secao ${className}`}>
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">{children}</div>
    </section>
  );
}
