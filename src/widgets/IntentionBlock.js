import SectionWrapper from "@/shared/ui/SectionWrapper";

export default function IntentionBlock() {
  return (
    <SectionWrapper>
      {/* Label */}
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-text-muted)" }}
      >
        Нийят
      </p>

      <h2
        className="mb-6 text-2xl font-semibold sm:text-3xl"
        style={{ color: "var(--color-text-primary)" }}
      >
        Намерение — это уже поступок
      </h2>

      <div
        className="space-y-4 text-base leading-relaxed sm:text-lg"
        style={{ color: "var(--color-text-secondary)" }}
      >
        <p>
          Нийят — намерение. Оно предшествует поступку. И определяет его смысл.
        </p>
      </div>

      {/* Duality card */}
      <div
        className="my-8 rounded-3xl px-7 py-7"
        style={{
          background: "var(--color-accent-subtle)",
          border: "1px solid var(--color-border)",
        }}
      >
        <p
          className="text-lg font-semibold leading-loose"
          style={{ color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
        >
          Один и тот же жест.
          <br />С разным намерением.
          <br />Становится разным поступком.
        </p>
      </div>

      {/* Development */}
      <div
        className="space-y-4 text-base leading-relaxed sm:text-lg"
        style={{ color: "var(--color-text-secondary)" }}
      >
        <p>
          Красивая страница — это форма. Намерение — это то, что в ней живёт.
          Без чистого намерения даже самые красивые слова остаются пустыми.
        </p>
        <p>
          А простые слова, сказанные от сердца, остаются с человеком надолго.
        </p>
      </div>

      {/* Pause prompt */}
      <div className="mt-9 border-l-2 pl-5" style={{ borderColor: "var(--color-border)" }}>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Прежде чем нажать «Отправить» — на секунду остановись.
        </p>
        <p
          className="mt-1 text-base font-semibold"
          style={{ color: "var(--color-text-primary)" }}
        >
          Спроси себя: зачем я это делаю?
        </p>
      </div>
    </SectionWrapper>
  );
}
