"use client";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

// Movimento da home, montado uma vez em app/page.tsx. As seções continuam Server Components
// e só marcam os elementos com data-atributos:
//   data-revelar        sobe e aparece ao entrar na tela
//   data-revelar-grupo  os filhos diretos aparecem em sequência
//   data-bisel          anel de marcas do hero, gira com a rolagem
//   data-paralaxe       imagem que se desloca devagar dentro da moldura
//   data-linha          linha do tempo que se preenche de ouro
//   data-mecanismo      a abertura: seção presa, o vídeo se abre do círculo até a tela cheia
// Estado inicial sempre vindo do JS (gsap.from): sem JavaScript ou com movimento reduzido, tudo fica visível e parado.
export function MovimentoHome() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // A abertura, criada primeiro por ter pin (os gatilhos seguintes dependem do espaço que ela ocupa)
      const mecanismo = document.querySelector<HTMLElement>("[data-mecanismo]");
      if (mecanismo) {
        const fundo = mecanismo.querySelector("[data-mecanismo-fundo]");
        const texto = mecanismo.querySelectorAll("[data-mecanismo-texto] > *");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: mecanismo,
              start: "top top",
              end: () => `+=${window.innerHeight * 1.2}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            fundo,
            { clipPath: "circle(16% at 50% 50%)" },
            { clipPath: "circle(75% at 50% 50%)", ease: "power2.inOut", duration: 1 },
          )
          .from(fundo, { scale: 1.15, ease: "none", duration: 1 }, 0)
          .from(texto, { autoAlpha: 0, y: 40, stagger: 0.12, ease: "power2.out", duration: 0.5 }, 0.6);
      }

      // Bisel do hero: gira devagar enquanto o hero sai da tela
      gsap.to("[data-bisel]", {
        rotation: 120,
        transformOrigin: "50% 50%",
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
      });

      // Imagens com paralaxe dentro da moldura
      gsap.utils.toArray<HTMLElement>("[data-paralaxe]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8, scale: 1.18 },
          {
            yPercent: 8,
            scale: 1.18,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      // Linha do tempo que se preenche de ouro
      gsap.utils.toArray<HTMLElement>("[data-linha]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top 70%", end: "bottom 60%", scrub: true },
          },
        );
      });

      // Entradas: um gatilho por elemento, cada um na sua vez
      gsap.utils.toArray<HTMLElement>("[data-revelar]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 48,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-revelar-grupo]").forEach((grupo) => {
        gsap.from(grupo.children, {
          autoAlpha: 0,
          y: 36,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: grupo, start: "top 85%", once: true },
        });
      });

      // Fontes e imagens mudam o layout depois do carregamento
      const recalcular = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(recalcular);
      window.addEventListener("load", recalcular);
      return () => window.removeEventListener("load", recalcular);
    });
  });

  return null;
}
