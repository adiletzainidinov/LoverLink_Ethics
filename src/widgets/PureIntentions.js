import SectionWrapper from "@/shared/ui/SectionWrapper";

const restrictions = [
  "Давления на чувства или создания чувства вины",
  "Манипуляций через эмоции",
  "Преследования или навязчивого внимания",
  "Достижения корыстных целей",
  "Скрытых или нечестных намерений",
];

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <circle cx="12" cy="12" r="9" stroke="var(--color-accent)" strokeWidth="1.5" />
      <path
        d="M15 9l-6 6M9 9l6 6"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PureIntentions() {
  return (
    <SectionWrapper>
      {/* Label */}
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-text-muted)" }}
      >
        Намерение — это основа
      </p>

      <h2
        className="mb-5 text-2xl font-semibold sm:text-3xl"
        style={{ color: "var(--color-text-primary)" }}
      >
        Одно дело — форма.
        <br />Другое — намерение.
      </h2>

      <p
        className="mb-6 text-base leading-relaxed sm:text-lg"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Один и тот же жест может стать искренним подарком — или
        инструментом давления. Разница — только в намерении.
      </p>

      <p
        className="mb-7 text-sm font-medium"
        style={{ color: "var(--color-text-muted)" }}
      >
        Нельзя использовать LoveLink для:
      </p>

      {/* Forbidden list */}
      <ul className="space-y-3.5">
        {restrictions.map((text) => (
          <li key={text} className="flex items-start gap-3">
            <XIcon />
            <span
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {text}
            </span>
          </li>
        ))}
      </ul>

      <p
        className="mt-8 text-base"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Если намерение чистое — ты уже знаешь это сам.
      </p>
    </SectionWrapper>
  );
}
