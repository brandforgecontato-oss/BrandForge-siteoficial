import type { Metadata } from "next";
import { site } from "@/lib/site";

// Base do Open Graph para páginas que definem título próprio de compartilhamento.
// No Next, o openGraph de uma página substitui o do layout inteiro; sem esta base a página perderia a imagem.
export const openGraphBase = {
  type: "website",
  locale: "pt_BR",
  siteName: site.nome,
  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Logotipo da BrandForge em fundo escuro com um círculo dourado",
    },
  ],
} satisfies Metadata["openGraph"];
