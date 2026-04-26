export default function FinalBlock() {
  return (
    <section
      className="px-5 py-24 text-center"
      style={{ background: "var(--color-accent-subtle)" }}
    >
      <div className="mx-auto w-full max-w-[500px] flex flex-col items-center">
        {/* Heart icon */}
        <div
          className="mb-8 flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 21C12 21 3 14.5 3 8.5C3 6.015 5.015 4 7.5 4C9.088 4 10.5 4.82 11.37 6.07L12 7L12.63 6.07C13.5 4.82 14.912 4 16.5 4C18.985 4 21 6.015 21 8.5C21 14.5 12 21 12 21Z"
              fill="var(--color-accent)"
              opacity="0.2"
            />
            <path
              d="M12 21C12 21 3 14.5 3 8.5C3 6.015 5.015 4 7.5 4C9.088 4 10.5 4.82 11.37 6.07L12 7L12.63 6.07C13.5 4.82 14.912 4 16.5 4C18.985 4 21 6.015 21 8.5C21 14.5 12 21 12 21Z"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2
          className="mb-5 text-2xl font-semibold sm:text-3xl"
          style={{ color: "var(--color-text-primary)" }}
        >
          Делай это искренне.
        </h2>

        {/* Second chance */}
        <p
          className="mb-7 max-w-[340px] text-base leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Если раньше ты не думал об этом — всё нормально.
          <br />Сейчас думаешь.
          <br />Это уже другое.
        </p>

        {/* Body */}
        <p
          className="mb-4 max-w-[360px] text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          LoveLink создан для добра. Для радости.
          Для слов, которые не стыдно сказать вслух.
        </p>
        <p
          className="mb-10 max-w-[360px] text-base font-medium"
          style={{ color: "var(--color-text-primary)" }}
        >
          Если намерение чистое — действуй.
        </p>

        {/* Universal audience note */}
        <div
          className="mb-10 w-full rounded-2xl px-5 py-5 text-left"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-text-muted)" }}
          >
            Для всех
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            На этой странице мы говорили о девушке — потому что LoveLink
            чаще всего используют для романтичных подарков. Но эти принципы
            касаются каждого. Любого, чьи чувства могут быть затронуты.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
          style={{
            background: "var(--color-accent)",
            boxShadow: "var(--shadow-md)",
            letterSpacing: "0.01em",
          }}
        >
          Вернуться к LoveLink
        </a>
      </div>
    </section>
  );
}
