const quotes = [
  {
    id: "niyyah",
    text: "Поистине, дела оцениваются только по намерениям.",
    source: "аль-Бухари, Муслим",
  },
  {
    id: "family",
    text: "Лучший из вас — тот, кто лучше всех обращается со своими близкими.",
    source: "ат-Тирмизи, Ибн Маджа",
  },
];

function QuoteCard({ text, source }) {
  return (
    <div
      className="rounded-2xl py-5 pl-6 pr-5"
      style={{
        background: "var(--color-surface)",
        borderLeft: "3px solid var(--color-faith-border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <p
        className="mb-3 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-text-muted)" }}
      >
        В хадисе передаётся смысл:
      </p>
      <p
        className="text-base font-medium leading-relaxed"
        style={{ color: "var(--color-text-primary)" }}
      >
        «{text}»
      </p>
      <p
        className="mt-3 text-xs"
        style={{ color: "var(--color-text-muted)" }}
      >
        — {source}
      </p>
    </div>
  );
}

export default function FaithBlock() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: "var(--color-faith-bg)" }}
    >
      <div className="mx-auto w-full max-w-[500px]">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}
        >
          Слова, которые стоит помнить
        </p>

        <h2
          className="mb-3 text-2xl font-semibold sm:text-3xl"
          style={{ color: "var(--color-text-primary)" }}
        >
          О нийяте — намерении
        </h2>

        <p
          className="mb-8 text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Для тех, кому близка исламская традиция — и для всех,
          кто ценит смысл, стоящий за словами.
        </p>

        <div className="space-y-4">
          {quotes.map((q) => (
            <QuoteCard key={q.id} text={q.text} source={q.source} />
          ))}
        </div>

        <div
          className="mt-6 rounded-2xl px-5 py-5"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-faith-border)",
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Если за этим поступком стоит намерение к дозволенному —
            серьёзные чувства, честный путь —
            то это совсем другой разговор.
          </p>
          <p
            className="mt-3 text-sm font-medium"
            style={{ color: "var(--color-text-primary)" }}
          >
            LoveLink может стать началом чего-то настоящего.
          </p>
        </div>

        <p
          className="mt-6 text-sm leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Эти слова — напоминание, а не давление. Уважение к человеку
          — ценность, понятная всем, вне зависимости от веры.
        </p>
      </div>
    </section>
  );
}
