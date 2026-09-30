// Anel de marcas finas em volta da abertura, como o bisel de um relógio (60 marcas, 12 maiores).
export function Marcas() {
  const marcas = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg data-bisel aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-0 size-full">
      <circle cx="100" cy="100" r="99" fill="none" stroke="var(--color-filete)" strokeWidth="0.4" />
      {marcas.map((i) => {
        const maior = i % 5 === 0;
        return (
          <line
            key={i}
            x1="100"
            y1="2.5"
            x2="100"
            y2={maior ? 6.5 : 4.5}
            stroke={maior ? "var(--color-ouro)" : "var(--color-bronze)"}
            strokeWidth={maior ? 0.6 : 0.35}
            transform={`rotate(${i * 6} 100 100)`}
          />
        );
      })}
    </svg>
  );
}
