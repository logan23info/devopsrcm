export default function StatsStrip({ total, domainCount }) {
  const stats = [
    { label: "Controls", value: total },
    { label: "Domains", value: domainCount },
    { label: "Frameworks", value: "OWASP · MITRE · CIS · AWS" },
    { label: "Assurance stages", value: "TOD · TOI · TOE" },
  ];
  return (
    <div className="chip-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex shrink-0 flex-col gap-0.5 rounded-xl border px-3 py-2"
          style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        >
          <span className="text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>
            {s.label}
          </span>
          <span
            className="text-[13px] font-semibold"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-text)" }}
          >
            {s.value}
          </span>
        </div>
      ))}
    </div>
  );
}
