export default function WhoIsShe() {
  return (
    <section
      className="px-5 py-24 text-center"
      style={{ background: "var(--color-surface-soft)" }}
    >
      <div className="mx-auto w-full max-w-[500px]">
        <p
          className="mb-12 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}
        >
          Помни
        </p>

        <div className="space-y-9">
          <p
            className="text-2xl font-semibold leading-snug sm:text-3xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Она — чья-то дочь.
            <br />Чья-то сестра.
          </p>

          <div
            className="mx-auto h-px w-10"
            style={{ background: "var(--color-border)" }}
            aria-hidden="true"
          />

          <p
            className="text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Она несёт в себе свою историю, свои ценности,
            свои границы. У неё есть мир, в который ты входишь
            своими словами.
          </p>

          <div
            className="mx-auto h-px w-10"
            style={{ background: "var(--color-border)" }}
            aria-hidden="true"
          />

          <p
            className="text-lg font-medium sm:text-xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Её чувства — настоящие.
            <br />Она заслуживает уважения.
          </p>
        </div>
      </div>
    </section>
  );
}
