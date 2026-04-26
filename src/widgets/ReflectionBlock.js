export default function ReflectionBlock() {
  return (
    <section className="px-5 py-28 text-center">
      <div className="mx-auto w-full max-w-[500px]">
        <div
          className="mx-auto mb-10 h-px w-14"
          style={{ background: "var(--color-border)" }}
          aria-hidden="true"
        />

        {/* 3 декларативных предложения */}
        <p
          className="text-xl font-semibold"
          style={{ color: "var(--color-text-primary)" }}
        >
          Ты прочитал это.
        </p>
        <p
          className="mt-2 text-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Значит, задумался.
        </p>
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          Это и есть намерение.
        </p>

        <div
          className="mx-auto mt-10 h-px w-14"
          style={{ background: "var(--color-border)" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
