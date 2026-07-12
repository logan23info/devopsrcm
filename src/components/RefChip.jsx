export default function RefChip({ label, value, color }) {
  if (!value) return null;
  return (
    <div
      className="flex flex-col gap-0.5 rounded-lg border px-2.5 py-1.5"
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface-2)" }}
    >
      <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider" style={{ color }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
        {label}
      </span>
      <span className="font-mono text-[11.5px] leading-snug" style={{ color: "var(--color-text-muted)" }}>
        {value}
      </span>
    </div>
  );
}
