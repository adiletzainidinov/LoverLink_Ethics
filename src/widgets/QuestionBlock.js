"use client";
import { useState } from "react";

const mirrorQuestions = [
  "Ты хочешь порадовать?",
  "Или добиться ответа?",
  "Ты готов принять любой её ответ?",
  "Ты уверен в своём намерении?",
];

export default function QuestionBlock() {
  const [open, setOpen] = useState(false);

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

          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-[#FFF8F5] active:scale-[0.97]"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                background: "transparent",
              }}
            >
              Подумать →
            </button>
          )}

          {open && (
            <div className="text-left">
              <div className="mb-7 space-y-4">
                {mirrorQuestions.map((q, i) => (
                  <p
                    key={q}
                    className="text-base font-medium"
                    style={{
                      color: "var(--color-text-primary)",
                      animation: "fadeSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
                      animationDelay: `${i * 0.12}s`,
                    }}
                  >
                    — {q}
                  </p>
                ))}
              </div>
              <p
                className="text-sm"
                style={{
                  color: "var(--color-text-muted)",
                  animation: "fadeSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
                  animationDelay: "0.52s",
                }}
              >
                Ответь только себе.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
