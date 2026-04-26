import SectionWrapper from "@/shared/ui/SectionWrapper";

export default function WhyItMatters() {
  return (
    <SectionWrapper>
      {/* Label */}
      <p
        className="mb-5 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-text-muted)" }}
      >
        Помни
      </p>

      <h2
        className="mb-8 text-2xl font-semibold sm:text-3xl"
        style={{ color: "var(--color-text-primary)" }}
      >
        Подарок — это касание чужой души.
      </h2>

      <p
        className="mb-4 text-base leading-relaxed sm:text-lg"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Когда ты отправляешь страницу, ты затрагиваешь чужие чувства.
      </p>
      <p
        className="mb-10 text-base sm:text-lg"
        style={{ color: "var(--color-text-muted)" }}
      >
        Её радость или смущение. Её уязвимость.
      </p>

      {/* Финальный вопрос — пауза, удар */}
      <p
        className="text-base font-semibold"
        style={{ color: "var(--color-text-primary)" }}
      >
        Ты думал об этом?
      </p>
    </SectionWrapper>
  );
}
