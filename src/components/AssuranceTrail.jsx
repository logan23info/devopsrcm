import { PenLine, Cog, ActivitySquare } from "lucide-react";

const STEPS = [
  { key: "tod", label: "TOD", full: "Test of Design", icon: PenLine },
  { key: "toi", label: "TOI", full: "Test of Implementation", icon: Cog },
  { key: "toe", label: "TOE", full: "Test of Operating Effectiveness", icon: ActivitySquare },
];

export default function AssuranceTrail({ control }) {
  return (
    <div className="relative pl-1">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === STEPS.length - 1;
        return (
          <div key={step.key} className="relative flex gap-3 pb-4 last:pb-0">
            {!isLast && (
              <span
                className="absolute left-[13px] top-7 bottom-0 w-px"
                style={{ background: "var(--color-border)" }}
                aria-hidden="true"
              />
            )}
            <span
              className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border"
              style={{
                background: "var(--color-surface-2)",
                borderColor: "var(--color-accent)",
              }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: "var(--color-accent-strong)" }} strokeWidth={2} />
            </span>
            <div className="min-w-0 pt-0.5">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-mono text-[11px] font-semibold tracking-wide" style={{ color: "var(--color-accent-strong)" }}>
                  {step.label}
                </span>
                <span className="text-[11px]" style={{ color: "var(--color-text-faint)" }}>
                  {step.full}
                </span>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {control[step.key]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
