// Copiar para app/providers-movimento.tsx e envolver {children} no app/layout.tsx:
//   <body><ProvidersMovimento rolagemSuave>{children}</ProvidersMovimento></body>
// children continuam Server Components; só este arquivo é client.
//
// - rolagemSuave: liga o Lenis sincronizado com o ScrollTrigger. Só ative se a camada
//   Lenis foi escolhida (há scrub/pin e o conceito pede). Sem GSAP, remova o bloco do Lenis.
// - MotionConfig reducedMotion="user": com prefers-reduced-motion, o Motion desliga
//   animações de transform/layout e mantém opacity/cor. Sem Motion, remova o MotionConfig.
"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { MotionConfig } from "motion/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import "lenis/dist/lenis.css";

type Props = { children: React.ReactNode; rolagemSuave?: boolean };

export function ProvidersMovimento({ children, rolagemSuave = false }: Props) {
  return (
    <MotionConfig reducedMotion="user">
      {rolagemSuave && <RolagemSuave />}
      {children}
    </MotionConfig>
  );
}

function RolagemSuave() {
  const lenisRef = useRef<LenisRef>(null);

  // Cada rolagem do Lenis atualiza as posições do ScrollTrigger.
  useLenis(ScrollTrigger.update);

  // O ticker do GSAP move o Lenis: um único loop de animação para os dois.
  useEffect(() => {
    function atualizar(tempo: number) {
      lenisRef.current?.lenis?.raf(tempo * 1000);
    }
    gsap.ticker.add(atualizar);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(atualizar);
      gsap.ticker.lagSmoothing(500, 33); // valor padrão do GSAP
    };
  }, []);

  // respectReducedMotion (padrão true): com prefers-reduced-motion, sem suavização.
  // anchors: links #secao rolam suavemente. Modais/listas com scroll próprio: data-lenis-prevent.
  return <ReactLenis root ref={lenisRef} options={{ autoRaf: false, anchors: true, respectReducedMotion: true }} />;
}
