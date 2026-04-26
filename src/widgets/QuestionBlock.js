export default function QuestionBlock() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto w-full max-w-[500px]">
        <div
          className="rounded-3xl px-8 py-10 text-center"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h2
            className="mb-9 text-3xl font-semibold sm:text-4xl"
            style={{ color: "var(--color-text-primary)", letterSpacing: "-0.03em" }}
          >
            Зачем ты это делаешь?
          </h2>

          <details className="q-reveal">
            <summary>Подумать →</summary>
            <div className="mt-7 text-left">
              <div className="mb-7 space-y-4">
                <p className="q-item text-base font-medium" style={{ color: "var(--color-text-primary)" }}>
                  — Ты хочешь порадовать?
                </p>
                <p className="q-item text-base font-medium" style={{ color: "var(--color-text-primary)" }}>
                  — Или добиться ответа?
                </p>
                <p className="q-item text-base font-medium" style={{ color: "var(--color-text-primary)" }}>
                  — Ты готов принять любой её ответ?
                </p>
                <p className="q-item text-base font-medium" style={{ color: "var(--color-text-primary)" }}>
                  — Ты уверен в своём намерении?
                </p>
              </div>
              <p className="q-close text-sm" style={{ color: "var(--color-text-muted)" }}>
                Ответь только себе.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
