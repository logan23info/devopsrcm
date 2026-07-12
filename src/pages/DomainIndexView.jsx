import { DOMAIN_ORDER, domainColor } from "../lib/domains";
import DomainIcon from "../components/DomainIcon";
import { ArrowRight } from "lucide-react";

export default function DomainIndexView({ controls, onSelectDomain }) {
  const counts = {};
  const icons = {};
  const idRanges = {};
  controls.forEach((c) => {
    counts[c.domain] = (counts[c.domain] || 0) + 1;
    icons[c.domain] = c.icon;
    idRanges[c.domain] = idRanges[c.domain] || [];
    idRanges[c.domain].push(c.cid);
  });

  return (
    <div className="mx-auto max-w-3xl lg:max-w-5xl space-y-4 px-4 pb-16 pt-4">
      <div
        className="rounded-2xl border px-4 py-3.5"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
      >
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {controls.length} controls across {DOMAIN_ORDER.length} DevOps &amp; cloud-native domains. Tap a
          domain to jump to its controls in the Matrix tab.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {DOMAIN_ORDER.map((d) => {
          const color = domainColor(d);
          const ids = idRanges[d] || [];
          return (
            <button
              key={d}
              onClick={() => onSelectDomain(d)}
              className="animate-rise flex flex-col gap-2.5 rounded-2xl border px-3.5 py-3.5 text-left transition-colors active:bg-white/[0.02]"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: "var(--color-surface-2)" }}
                >
                  <DomainIcon name={icons[d]} className="h-4 w-4" style={{ color }} />
                </span>
                <span
                  className="font-mono text-[11px] font-semibold"
                  style={{ color }}
                >
                  {counts[d] || 0}
                </span>
              </div>
              <div>
                <div className="text-[13px] font-semibold leading-snug" style={{ color: "var(--color-text)" }}>
                  {d}
                </div>
                <div className="mt-0.5 font-mono text-[10.5px]" style={{ color: "var(--color-text-faint)" }}>
                  {ids[0]}–{ids[ids.length - 1]}
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px]" style={{ color: "var(--color-text-faint)" }}>
                View controls <ArrowRight className="h-3 w-3" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
