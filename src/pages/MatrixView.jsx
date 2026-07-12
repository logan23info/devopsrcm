import { useMemo, useState } from "react";
import StatsStrip from "../components/StatsStrip";
import SearchFilterBar from "../components/SearchFilterBar";
import ControlCard from "../components/ControlCard";
import { DOMAIN_ORDER } from "../lib/domains";
import { FileSearch } from "lucide-react";

export default function MatrixView({ controls, activeDomain, setActiveDomain }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return controls.filter((c) => {
      if (activeDomain && c.domain !== activeDomain) return false;
      if (!q) return true;
      const haystack = [
        c.cid, c.domain, c.objective, c.tsa, c.grc, c.owasp, c.mitre, c.cis, c.aws, c.automation,
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [controls, query, activeDomain]);

  return (
    <div className="mx-auto max-w-3xl lg:max-w-5xl space-y-4 px-4 pb-16 pt-4">
      <StatsStrip total={controls.length} domainCount={DOMAIN_ORDER.length} />
      <SearchFilterBar
        query={query}
        setQuery={setQuery}
        activeDomain={activeDomain}
        setActiveDomain={setActiveDomain}
      />

      <div className="flex items-center justify-between px-0.5 pt-1">
        <span className="text-[12px]" style={{ color: "var(--color-text-faint)" }}>
          {filtered.length} of {controls.length} controls
        </span>
      </div>

      {filtered.length === 0 ? (
        <div
          className="flex flex-col items-center gap-2 rounded-2xl border px-4 py-10 text-center"
          style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        >
          <FileSearch className="h-6 w-6" style={{ color: "var(--color-text-faint)" }} />
          <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
            No controls match “{query}”. Try a different term or clear the domain filter.
          </p>
        </div>
      ) : (
        <div className="lg:columns-2 lg:gap-4 space-y-2.5 lg:space-y-0">
          {filtered.map((c) => (
            <div key={c.cid} className="break-inside-avoid mb-2.5">
              <ControlCard control={c} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
