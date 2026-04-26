export default function SectionWrapper({ children, className = "", style }) {
  return (
    <section className={`px-5 py-20 ${className}`} style={style}>
      <div className="mx-auto w-full max-w-[500px]">
        {children}
      </div>
    </section>
  );
}
