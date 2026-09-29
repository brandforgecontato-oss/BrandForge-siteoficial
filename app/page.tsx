import { ComoFunciona } from "@/components/secoes/ComoFunciona";
import { Compromissos } from "@/components/secoes/Compromissos";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { Curso } from "@/components/secoes/Curso";
import { Hero } from "@/components/secoes/Hero";
import { MateriaBruta } from "@/components/secoes/MateriaBruta";
import { Mecanismo } from "@/components/secoes/Mecanismo";
import { Ofertas } from "@/components/secoes/Ofertas";
import { Perguntas } from "@/components/secoes/Perguntas";
import { Portfolio } from "@/components/secoes/Portfolio";
import { MovimentoHome } from "@/components/movimento/MovimentoHome";

export default function Inicio() {
  return (
    <main id="conteudo">
      <Hero />
      <MateriaBruta />
      <Mecanismo />
      <Ofertas />
      <ComoFunciona />
      <Compromissos />
      <Portfolio />
      <Perguntas />
      <Curso />
      <CtaFinal />
      <MovimentoHome />
    </main>
  );
}
