export default function HeroSection() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% -10%, #FFE8E8 0%, var(--color-bg) 65%)",
      }}
    >
      <div className="mx-auto w-full max-w-[500px] flex flex-col items-center">
        {/* Heart icon */}
        <div
          className="anim-h1 mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-full"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21C12 21 3 14.5 3 8.5C3 6.015 5.015 4 7.5 4C9.088 4 10.5 4.82 11.37 6.07L12 7L12.63 6.07C13.5 4.82 14.912 4 16.5 4C18.985 4 21 6.015 21 8.5C21 14.5 12 21 12 21Z"
              fill="var(--color-accent)"
              opacity="0.15"
            />
            <path
              d="M12 21C12 21 3 14.5 3 8.5C3 6.015 5.015 4 7.5 4C9.088 4 10.5 4.82 11.37 6.07L12 7L12.63 6.07C13.5 4.82 14.912 4 16.5 4C18.985 4 21 6.015 21 8.5C21 14.5 12 21 12 21Z"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Badge */}
        <span
          className="anim-h2 mb-7 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase"
          style={{
            background: "var(--color-surface)",
            color: "var(--color-text-muted)",
            border: "1px solid var(--color-border)",
            letterSpacing: "0.1em",
          }}
        >
          LoveLink · Этика использования
        </span>

        {/* Heading */}
        <h1
          className="mb-6 text-[2.6rem] font-semibold leading-[1.1] sm:text-5xl"
          style={{
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Подожди.
        </h1>

        {/* Subtitle — 2 separate beats, different weights */}
        <div className="anim-h4">
          <p
            className="mb-1.5 max-w-[300px] text-base sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Ты готов отправить.
          </p>
          <p
            className="max-w-[300px] text-base sm:text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            Но сначала — один вопрос.
          </p>
        </div>

        {/* Scroll hint */}
        <div
          className="anim-scroll mt-14 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <div className="h-8 w-px" style={{ background: "var(--color-border)" }} />
          <div className="scroll-dot h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
