import { Search, X } from "lucide-react";
import { DOMAIN_ORDER, domainColor } from "../lib/domains";

export default function SearchFilterBar({ query, setQuery, activeDomain, setActiveDomain }) {
  return (
    <div className="space-y-2.5">
      <div
        className="flex items-center gap-2 rounded-xl border px-3 py-2"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
      >
        <Search className="h-4 w-4 shrink-0" style={{ color: "var(--color-text-faint)" }} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search controls, IDs, OWASP, MITRE, CIS, AWS…"
          className="w-full bg-transparent text-[13.5px] outline-none placeholder:text-[var(--color-text-faint)]"
          style={{ color: "var(--color-text)" }}
        />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Clear search">
            <X className="h-4 w-4" style={{ color: "var(--color-text-faint)" }} />
          </button>
        )}
      </div>

      <div className="chip-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <button
          onClick={() => setActiveDomain(null)}
          className="shrink-0 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors"
          style={{
            borderColor: activeDomain ? "var(--color-border)" : "var(--color-accent)",
            background: activeDomain ? "var(--color-surface)" : "var(--color-surface-2)",
            color: activeDomain ? "var(--color-text-faint)" : "var(--color-accent-strong)",
          }}
        >
          All domains
        </button>
        {DOMAIN_ORDER.map((d) => {
          const active = activeDomain === d;
          const color = domainColor(d);
          return (
            <button
              key={d}
              onClick={() => setActiveDomain(active ? null : d)}
              className="flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors"
              style={{
                borderColor: active ? color : "var(--color-border)",
                background: active ? "var(--color-surface-2)" : "var(--color-surface)",
                color: active ? color : "var(--color-text-faint)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}
