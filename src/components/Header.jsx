import { ShieldCheck } from "lucide-react";

const TABS = [
  { key: "matrix", label: "Matrix" },
  { key: "domains", label: "Domains" },
  { key: "methodology", label: "Methodology" },
];

export default function Header({ tab, setTab }) {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-md"
      style={{ borderColor: "var(--color-border)", background: "rgba(255,255,255,0.92)" }}
    >
      <div className="mx-auto flex max-w-3xl lg:max-w-5xl items-center gap-3 px-4 pt-4">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
        >
          <ShieldCheck className="h-4.5 w-4.5" style={{ color: "var(--color-accent-strong)" }} />
        </span>
        <div className="min-w-0">
          <h1
            className="truncate text-[15px] font-semibold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            DevOps Security Controls Matrix
          </h1>
          <p className="truncate text-[11px]" style={{ color: "var(--color-text-faint)" }}>
            Technical Security Architect &amp; GRC Assurance / Advisory
          </p>
        </div>
      </div>

      <nav className="mx-auto mt-3 flex max-w-3xl lg:max-w-5xl gap-1 px-4">
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="relative flex-1 rounded-t-lg px-3 py-2.5 text-[13px] font-medium transition-colors"
              style={{
                color: active ? "var(--color-text)" : "var(--color-text-faint)",
              }}
            >
              {t.label}
              {active && (
                <span
                  className="absolute inset-x-2 -bottom-px h-[2px] rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
