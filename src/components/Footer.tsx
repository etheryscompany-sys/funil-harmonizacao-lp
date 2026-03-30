export default function Footer() {
  return (
    <footer className="w-full">
      {/* Section divider */}
      <div className="section-divider" />

      <div
        className="py-6 pb-20"
        style={{ borderTop: "1px solid var(--color-border-subtle)" }}
      >
        <div className="container-lp flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-mono text-[0.6rem] tracking-[0.1em] uppercase transition-colors duration-300 hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Termos de uso
            </a>
            <a
              href="#"
              className="font-mono text-[0.6rem] tracking-[0.1em] uppercase transition-colors duration-300 hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Política de privacidade
            </a>
          </div>
          <p
            className="font-mono text-[0.6rem] tracking-[0.1em] uppercase"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; 2026 — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

