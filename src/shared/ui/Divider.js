export default function Divider() {
  return (
    <div className="px-5" aria-hidden="true">
      <div
        className="mx-auto max-w-[500px]"
        style={{ borderTop: "1px solid var(--color-border-soft)" }}
      />
    </div>
  );
}
