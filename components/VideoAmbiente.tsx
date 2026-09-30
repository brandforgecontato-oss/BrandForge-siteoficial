"use client";

import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

type Props = VideoHTMLAttributes<HTMLVideoElement> & {
  // Só baixa o vídeo quando ele chega perto da tela (vídeos abaixo da dobra).
  carregarPerto?: boolean;
};

// Vídeo decorativo em loop: com movimento reduzido fica parado no pôster.
export function VideoAmbiente({ carregarPerto = false, src, autoPlay, ...resto }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [perto, setPerto] = useState(!carregarPerto);

  useEffect(() => {
    const video = ref.current;
    if (!video || perto) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPerto(true);
          io.disconnect();
        }
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [perto]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !perto) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => {
      if (mq.matches) video.pause();
      else video.play().catch(() => {});
    };
    aplicar();
    mq.addEventListener("change", aplicar);
    return () => mq.removeEventListener("change", aplicar);
  }, [perto]);

  return <video ref={ref} src={perto ? src : undefined} autoPlay={perto ? autoPlay : false} {...resto} />;
}
