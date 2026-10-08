import type { MetadataRoute } from "next";
import { projetos } from "@/lib/portfolio";
import { site, urlDoSite } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = urlDoSite();
  const rotas = [...site.paginas, ...projetos.map((p) => `/portfolio/${p.slug}`)];
  return rotas.map((rota) => ({
    url: `${base}${rota === "/" ? "" : rota}`,
    lastModified: new Date(),
  }));
}
