import SectionWrapper from "@/shared/ui/SectionWrapper";

const cards = [
  {
    id: "boundaries",
    title: "Уважай её границы",
    description: "Ответ «нет» — это ответ. Прими его с достоинством.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3 4 6.5V12c0 4.8 3.4 9.3 8 10.9C16.6 21.3 20 16.8 20 12V6.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "honest",
    title: "Будь честен",
    description: "Не скрывай намерения. Открытость — это сила, а не слабость.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8.5 12l2.5 2.5 4.5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "no-pressure",
    title: "Не создавай давления",
    description: "Подарок не должен рождать долг или обязательство.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 12h6M12 9v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M17 7L7 17"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    id: "no-manipulation",
    title: "Не манипулируй",
    description: "Слова — инструмент тепла, а не способ добиться желаемого.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M15 9L9 15M9 9l6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "value-reaction",
    title: "Цени её реакцию",
    description: "Любой ответ — её право. Не ожидай определённой реакции.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20C12 20 4 15 4 9a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 6-8 11-8 11Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "from-heart",
    title: "Действуй от сердца",
    description: "Только искренность делает подарок настоящим.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l1.8 5.5H19l-4.6 3.4 1.7 5.4L12 14l-4.1 3.3 1.7-5.4L5 8.5h5.2L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function EthicsCards() {
  return (
    <SectionWrapper style={{ background: "var(--color-surface-soft)" }}>
      {/* Label */}
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-text-muted)" }}
      >
        Принципы
      </p>

      <h2
        className="mb-8 text-2xl font-semibold sm:text-3xl"
        style={{ color: "var(--color-text-primary)" }}
      >
        Как это выглядит на практике
      </h2>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl p-4"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Icon */}
            <div
              className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background: "var(--color-accent-subtle)",
                color: "var(--color-accent)",
              }}
            >
              {card.icon}
            </div>

            {/* Title */}
            <p
              className="mb-1.5 text-sm font-semibold leading-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              {card.title}
            </p>

            {/* Description */}
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
