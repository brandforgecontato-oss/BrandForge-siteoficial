"use client";

import { useEffect, useRef } from "react";

// A entrada: o vídeo toca inteiro em tela cheia, termina no próprio logo (monograma BF) e,
// depois de um tempo parado nele, se fecha no círculo da abertura do hero.
// Só aparece quando o script do layout marca <html data-entrada> (primeira visita da sessão,
// sem movimento reduzido). Sem JavaScript, o CSS mantém esta camada escondida e o hero aparece direto.
const CHAVE = "bf-entrada";
const TEMPO_DO_LOGO = 2000; // quanto o último quadro (o logo) fica parado antes de fechar
const LIMITE = 16000; // se o vídeo travar ou não carregar, o site abre mesmo assim

export function Entrada() {
  const camada = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const raiz = document.documentElement;
    const el = camada.current;
    const v = video.current;
    if (!raiz.hasAttribute("data-entrada") || !el || !v) return;

    let fechando = false;
    let tempoLogo = 0;

    const encerrar = () => {
      raiz.removeAttribute("data-entrada");
      v.pause();
      try {
        sessionStorage.setItem(CHAVE, "1");
      } catch {}
    };

    const fechar = (duracao: number) => {
      if (fechando) return;
      fechando = true;
      const alvo = document.querySelector<HTMLElement>("[data-abertura]");
      if (!alvo) return encerrar();

      // O vídeo do hero recomeça do início do loop: a troca não aparece.
      const videoHero = alvo.querySelector("video");
      if (videoHero) videoHero.currentTime = v.ended ? 0 : v.currentTime;

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

    // Fim do vídeo: o último quadro (o logo) fica parado e, depois de um tempo, tudo se fecha no círculo.
    const mostrarLogo = () => {
      if (fechando || el.hasAttribute("data-fim")) return;
      el.setAttribute("data-fim", "");
      tempoLogo = window.setTimeout(() => fechar(1400), TEMPO_DO_LOGO);
    };

    v.addEventListener("ended", mostrarLogo);
    v.addEventListener("error", mostrarLogo);
    const limite = window.setTimeout(mostrarLogo, LIMITE);

    const pular = () => fechar(700);
    window.addEventListener("wheel", pular, { passive: true });
    window.addEventListener("touchmove", pular, { passive: true });
    window.addEventListener("keydown", pular);
    return () => {
      window.clearTimeout(limite);
      window.clearTimeout(tempoLogo);
      v.removeEventListener("ended", mostrarLogo);
      v.removeEventListener("error", mostrarLogo);
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
      {/* Vinheta leve nas bordas; o centro (onde o logo aparece no fim) fica limpo */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgb(23_20_15/0.85)_100%)]" />

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
