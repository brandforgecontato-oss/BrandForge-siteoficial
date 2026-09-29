// Wordmark da identidade: "BrandForge" em Playfair com a linha fina dourada.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col font-display text-destaque font-semibold leading-none tracking-tight text-marfim ${className}`}>
      BrandForge
      <span aria-hidden="true" className="mt-1.5 block h-px w-full bg-ouro" />
    </span>
  );
}
