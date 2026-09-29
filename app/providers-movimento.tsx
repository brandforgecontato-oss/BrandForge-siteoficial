// Rolagem suave (Lenis) sincronizada com o ScrollTrigger (modelo: stack-web/assets/providers-movimento.tsx,
// sem Motion, que foi desinstalado na fase 5). children continuam Server Components.
"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import "lenis/dist/lenis.css";

export function ProvidersMovimento({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RolagemSuave />
      {children}
    </>
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

  // Durante a entrada em vídeo (<html data-entrada>) a página não rola.
  useEffect(() => {
    const raiz = document.documentElement;
    const sincronizar = () => {
      const lenis = lenisRef.current?.lenis;
      if (!lenis) return;
      if (raiz.hasAttribute("data-entrada")) lenis.stop();
      else lenis.start();
    };
    const observador = new MutationObserver(sincronizar);
    observador.observe(raiz, { attributes: true, attributeFilter: ["data-entrada"] });
    const inicio = window.setTimeout(sincronizar, 0);
    return () => {
      observador.disconnect();
      window.clearTimeout(inicio);
    };
  }, []);

  // respectReducedMotion (padrão true): com prefers-reduced-motion, sem suavização.
  // anchors: links #secao rolam suavemente, descontando o cabeçalho fixo.
  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, anchors: { offset: -96 }, lerp: 0.09, respectReducedMotion: true }} />
  );
}
