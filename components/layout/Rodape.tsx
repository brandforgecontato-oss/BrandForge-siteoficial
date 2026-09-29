import Link from "next/link";
import { contato, linkWhatsApp, site } from "@/lib/site";
import { Wordmark } from "./Wordmark";

const servicos = [
  { href: "/#servicos", rotulo: "Presença" },
  { href: "/#servicos", rotulo: "Atendimento IA" },
  { href: "/#servicos", rotulo: "Sob medida" },
  { href: "/#curso", rotulo: "Curso de IA" },
];

export function Rodape() {
  return (
    <footer className="border-t border-filete pb-28 pt-16 lg:pb-12">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Wordmark />
          <p className="mt-5 text-areia">IA sob medida para o seu negócio.</p>
        </div>

        <nav aria-label="Serviços" className="lg:col-span-3">
          <h2 className="font-sans text-apoio font-medium text-marfim">Serviços</h2>
          <ul className="mt-4 space-y-1">
            {servicos.map((s) => (
              <li key={s.rotulo}>
                <a href={s.href} className="inline-flex min-h-11 items-center text-areia hover:text-marfim">
                  {s.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-sans text-apoio font-medium text-marfim">Contato</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={linkWhatsApp("diagnostico")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-areia hover:text-marfim">
                WhatsApp {contato.telefoneExibido}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.negocio.email}`} className="inline-flex min-h-11 items-center break-all text-areia hover:text-marfim">
                {site.negocio.email}
              </a>
            </li>
            <li>
              <a href={site.negocio.redes[0]} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-areia hover:text-marfim">
                Instagram {contato.instagram}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-apoio text-areia">
            Atendimento: {contato.atendimento}
            <br />
            {contato.alcance}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1200px] flex-wrap gap-x-6 gap-y-2 border-t border-filete px-5 pt-6 text-apoio text-areia md:px-10">
        <Link href="/privacidade" className="inline-flex min-h-11 items-center hover:text-marfim">
          Política de privacidade
        </Link>
        <span className="inline-flex min-h-11 items-center">© 2026 BrandForge</span>
        {contato.cnpj && <span className="inline-flex min-h-11 items-center">CNPJ: {contato.cnpj}</span>}
      </div>
    </footer>
  );
}
