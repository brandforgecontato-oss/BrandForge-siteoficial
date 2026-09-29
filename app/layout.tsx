import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Cabecalho } from "@/components/layout/Cabecalho";
import { CtaFixoCelular } from "@/components/layout/CtaFixoCelular";
import { Rodape } from "@/components/layout/Rodape";
import { JsonLdNegocio } from "@/components/seo/JsonLd";
import { site, siteIndexavel, urlDoSite } from "@/lib/site";
import "./globals.css";

// Tipografia da identidade (DIRECAO A): Playfair Display 600 no display, Inter 400/500 no corpo.
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(urlDoSite()),
  title: { default: "BrandForge | IA sob medida para pequenos negócios", template: "%s" },
  description: site.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: "BrandForge | IA sob medida para o seu negócio",
    description: "Mais clientes e menos trabalho manual, com IA feita sob medida. Comece por um diagnóstico grátis pelo WhatsApp.",
  },
  robots: siteIndexavel() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Cabecalho />
        {children}
        <Rodape />
        <CtaFixoCelular />
        <div aria-hidden="true" className="grao" />
        <JsonLdNegocio />
        <Analytics />
      </body>
    </html>
  );
}
