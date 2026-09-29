import type { Metadata } from "next";
import { JsonLdNegocio } from "@/components/seo/JsonLd";
import { site, siteIndexavel, urlDoSite } from "@/lib/site";
import "./globals.css";

// Sem fonte, cor ou layout de propósito: tudo isso nasce da direção visual aprovada (fase 3).
// As fontes entram aqui via next/font na fase 6.

export const metadata: Metadata = {
  metadataBase: new URL(urlDoSite()),
  title: site.nome ? { default: site.nome, template: `%s | ${site.nome}` } : "Site em construção",
  description: site.descricao || undefined,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome || undefined,
  },
  robots: siteIndexavel() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <JsonLdNegocio />
      </body>
    </html>
  );
}
