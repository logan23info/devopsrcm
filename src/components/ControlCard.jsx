import { useState } from "react";
import { ChevronDown, ShieldHalf, ClipboardCheck, Bot, UserRound, ScrollText, CalendarClock, FileCheck2 } from "lucide-react";
import { domainColor } from "../lib/domains";
import RefChip from "./RefChip";
import AssuranceTrail from "./AssuranceTrail";

const RISK_COLORS = {
  Critical: { bg: "#FBEAE7", fg: "#A23A2E" },
  High: { bg: "#FDF0E4", fg: "#B8641E" },
  Medium: { bg: "#FBF4DC", fg: "#9A7A16" },
  Low: { bg: "#E9F5EE", fg: "#2F8F5B" },
};

export default function ControlCard({ control, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const color = domainColor(control.domain);

  return (
    <div
      className="animate-rise overflow-hidden rounded-2xl border"
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 px-4 py-3.5 text-left active:bg-white/[0.02]"
      >
        <span className="mt-1 h-full w-1 shrink-0 self-stretch rounded-full" style={{ background: color }} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className="rounded-md px-1.5 py-0.5 font-mono text-[11px] font-semibold"
              style={{ background: "var(--color-surface-2)", color }}
            >
              {control.cid}
            </span>
            <span className="truncate text-[11px]" style={{ color: "var(--color-text-faint)" }}>
              {control.shortDomain}
            </span>
          </div>
          <p
            className={`mt-1.5 text-[14px] leading-snug font-medium ${open ? "" : "line-clamp-2"}`}
            style={{ color: "var(--color-text)" }}
          >
            {control.objective}
          </p>
        </div>
        <ChevronDown
          className={`mt-1 h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--color-text-faint)" }}
        />
      </button>

      {open && (
        <div className="space-y-4 border-t px-4 pb-5 pt-4" style={{ borderColor: "var(--color-border-soft)" }}>
          {/* TSA / GRC dual aspect */}
          <div className="space-y-3">
            <div
              className="rounded-xl border-l-2 px-3 py-2.5"
              style={{ borderColor: "var(--color-accent)", background: "var(--color-surface-2)" }}
            >
              <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-accent-strong)" }}>
                <ShieldHalf className="h-3.5 w-3.5" /> Technical Security Architect
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {control.tsa}
              </p>
            </div>
            <div
              className="rounded-xl border-l-2 px-3 py-2.5"
              style={{ borderColor: "var(--color-signal)", background: "var(--color-surface-2)" }}
            >
              <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-signal)" }}>
                <ClipboardCheck className="h-3.5 w-3.5" /> GRC Assurance &amp; Advisory
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {control.grc}
              </p>
            </div>
          </div>

          {/* Framework references */}
          <div className="chip-rail -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            <RefChip label="OWASP" value={control.owasp} color="#2F8F5B" />
            <RefChip label="MITRE ATT&CK" value={control.mitre} color="#C1503F" />
            <RefChip label="CIS" value={control.cis} color="#2E6DA4" />
            <RefChip label="AWS" value={control.aws} color="#B8791E" />
          </div>

          {/* Automation */}
          <div className="flex items-start gap-2 rounded-xl border px-3 py-2.5" style={{ borderColor: "var(--color-border)" }}>
            <Bot className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--color-good)" }} />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-good)" }}>
                Automation Control
              </div>
              <p className="mt-0.5 text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {control.automation}
              </p>
            </div>
          </div>

          {/* Assurance trail */}
          <div className="rounded-xl border px-3 py-3.5" style={{ borderColor: "var(--color-border)" }}>
            <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>
              Assurance Trail
            </div>
            <AssuranceTrail control={control} />
          </div>

          {/* Governance & testing metadata */}
          <div
            className="rounded-xl border px-3 py-3 space-y-3"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                style={{
                  background: (RISK_COLORS[control.risk] || RISK_COLORS.Medium).bg,
                  color: (RISK_COLORS[control.risk] || RISK_COLORS.Medium).fg,
                }}
              >
                Risk: {control.risk}
              </span>
              <span
                className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-faint)" }}
              >
                {control.maturity}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <UserRound className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-text-faint)" }} />
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Control Owner</div>
                  <div className="text-[12.5px]" style={{ color: "var(--color-text-muted)" }}>{control.owner}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CalendarClock className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-text-faint)" }} />
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Testing Frequency</div>
                  <div className="text-[12.5px]" style={{ color: "var(--color-text-muted)" }}>{control.testingFrequency}</div>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2">
                <ScrollText className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-text-faint)" }} />
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Regulatory Mapping</div>
                  <div className="text-[12.5px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{control.regulatory}</div>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2">
                <FileCheck2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-text-faint)" }} />
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Evidence Artifacts</div>
                  <div className="text-[12.5px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{control.evidence}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory / Assurance activity */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl px-3 py-2.5" style={{ background: "var(--color-surface-2)" }}>
              <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-accent-strong)" }}>
                Advisory Activity
              </div>
              <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {control.advisory}
              </p>
            </div>
            <div className="rounded-xl px-3 py-2.5" style={{ background: "var(--color-surface-2)" }}>
              <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-signal)" }}>
                Assurance Activity
              </div>
              <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {control.assurance}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
