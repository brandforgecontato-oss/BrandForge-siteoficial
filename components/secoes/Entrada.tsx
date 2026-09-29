"use client";

import { useEffect, useRef } from "react";

// A entrada: o vídeo toca em tela cheia e se fecha no círculo da abertura do hero.
// Só aparece quando o script do layout marca <html data-entrada> (primeira visita da sessão,
// sem movimento reduzido). Sem JavaScript, o CSS mantém esta camada escondida e o hero aparece direto.
const CHAVE = "bf-entrada";

export function Entrada() {
  const camada = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const raiz = document.documentElement;
    if (!raiz.hasAttribute("data-entrada")) return;

    let fechando = false;
    const encerrar = () => {
      raiz.removeAttribute("data-entrada");
      video.current?.pause();
      try {
        sessionStorage.setItem(CHAVE, "1");
      } catch {}
    };

    const fechar = (duracao: number) => {
      if (fechando) return;
      fechando = true;
      const el = camada.current;
      const alvo = document.querySelector<HTMLElement>("[data-abertura]");
      if (!el || !alvo) return encerrar();

      // O vídeo do hero continua do mesmo ponto: a troca não aparece.
      const videoHero = alvo.querySelector("video");
      if (videoHero && video.current) videoHero.currentTime = video.current.currentTime;

      const r = alvo.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const inicio = Math.hypot(window.innerWidth, window.innerHeight);
      const fecho = el.animate(
        [{ clipPath: `circle(${inicio}px at ${cx}px ${cy}px)` }, { clipPath: `circle(${r.width / 2}px at ${cx}px ${cy}px)` }],
        { duration: duracao, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" },
      );
      fecho.onfinish = () => {
        el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 350, fill: "forwards" }).onfinish = encerrar;
      };
    };

    const tempo = window.setTimeout(() => fechar(1400), 3200);
    const pular = () => fechar(700);
    window.addEventListener("wheel", pular, { passive: true });
    window.addEventListener("touchmove", pular, { passive: true });
    window.addEventListener("keydown", pular);
    return () => {
      window.clearTimeout(tempo);
      window.removeEventListener("wheel", pular);
      window.removeEventListener("touchmove", pular);
      window.removeEventListener("keydown", pular);
    };
  }, []);

  return (
    <div ref={camada} className="entrada fixed inset-0 z-[70] items-center justify-center bg-obsidiana">
      <video
        ref={video}
        className="absolute inset-0 size-full object-cover [filter:sepia(0.45)_saturate(0.85)_brightness(0.95)]"
        src="/midia/abertura.mp4"
        poster="/midia/abertura-poster.webp"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Escurece o vídeo para o wordmark ler bem por cima */}
      <div aria-hidden="true" className="absolute inset-0 bg-obsidiana/55" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgb(23_20_15/0.9)_100%)]" />
      <p className="entrada-marca relative inline-flex flex-col font-display text-h2 font-semibold leading-none text-marfim lg:text-h1">
        BrandForge
        <span aria-hidden="true" className="mt-3 block h-px w-full bg-ouro" />
      </p>
      <button
        type="button"
        onClick={(e) => {
          e.currentTarget.blur();
          window.dispatchEvent(new KeyboardEvent("keydown"));
        }}
        className="absolute bottom-8 right-5 min-h-12 rounded-peca border border-ouro/60 px-5 text-apoio text-marfim hover:border-ouro hover:text-ouro md:right-10"
      >
        Pular
      </button>
    </div>
  );
}
