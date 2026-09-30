// O mecanismo por dentro: a torre de circuitos que acende e se conecta aos painéis, em tela cheia.
export function Mecanismo() {
  return (
    <section data-mecanismo aria-labelledby="mecanismo-titulo" className="relative isolate overflow-hidden bg-obsidiana">
      {/* A abertura: com movimento, este fundo nasce num círculo e se abre até a tela cheia */}
      <div data-mecanismo-fundo className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 size-full object-cover object-[65%_50%] [filter:sepia(0.15)]"
          src="/midia/mecanismo.mp4"
          poster="/midia/mecanismo-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        {/* Escurecimento para manter o texto em contraste AA sobre o vídeo */}
        <div data-mecanismo-veu aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-obsidiana via-obsidiana/80 to-obsidiana/25" />
      </div>

      <div className="mx-auto flex min-h-svh max-w-[1200px] items-center px-5 py-secao-cel md:px-10 lg:py-secao">
        <div data-mecanismo-texto className="max-w-[40rem]">
          <h2 id="mecanismo-titulo" className="text-h3 lg:text-h2">
            Primeiro a gente mede. Depois constrói.
          </h2>
          <p className="mt-6 text-destaque text-marfim">
            Antes de propor qualquer coisa, olhamos como o seu negócio funciona hoje: por onde o cliente chega, quanto
            tempo espera, onde a conversa para. A solução sai dessa medida e se encaixa no que você já usa.
          </p>
          <figure className="mt-12 border-l border-ouro pl-6">
            <blockquote className="text-marfim">
              <p>45% dos 150 líderes brasileiros ouvidos pela KPMG relatam projetos de IA desconectados entre si.</p>
            </blockquote>
            <figcaption className="mt-3 text-apoio text-areia">
              Fonte:{" "}
              <a
                href="https://kpmg.com/co/es/tendencias/2026/05/global-tech-report-2026.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-ouro/60 underline-offset-4 hover:text-marfim"
              >
                KPMG Global Tech Report 2026
              </a>
            </figcaption>
          </figure>
          <p className="mt-8 font-display text-destaque text-ouro">IA solta não resolve. IA encaixada no seu negócio, sim.</p>
        </div>
      </div>
    </section>
  );
}
