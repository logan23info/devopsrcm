import { BookOpen, PenLine, Cog, ActivitySquare, Compass, ClipboardCheck, Layers3, AlertTriangle } from "lucide-react";

const SECTIONS = [
  {
    icon: BookOpen,
    color: "var(--color-accent-strong)",
    title: "Purpose",
    body: "A consolidated control catalogue spanning DevOps and cloud-native engineering domains, presented through two complementary lenses: the Technical Security Architect (TSA) who designs and implements the control, and GRC Assurance & Advisory, who governs, advises on, and independently tests it.",
  },
  {
    icon: PenLine,
    color: "var(--color-accent-strong)",
    title: "TOD — Test of Design",
    body: "Confirms the control, as documented (policy, standard, architecture), is capable of achieving its objective if operating as intended. Performed via policy, standard, and architecture review — typically once per audit cycle or upon material change.",
  },
  {
    icon: Cog,
    color: "var(--color-accent-strong)",
    title: "TOI — Test of Implementation",
    body: "Confirms the control has actually been configured, deployed, or built as designed in the live environment — a point-in-time configuration or sample-based check, distinct from being merely documented.",
  },
  {
    icon: ActivitySquare,
    color: "var(--color-accent-strong)",
    title: "TOE — Test of Operating Effectiveness",
    body: "Confirms the control operated consistently and effectively over a defined period, not just at a point in time — typically through log review, trend analysis, exception or incident review, or repeated sampling across the review period.",
  },
  {
    icon: Compass,
    color: "var(--color-signal)",
    title: "Advisory Activity",
    body: "Forward-looking GRC work: designing target-state controls, recommending tooling and architecture, building policy and governance frameworks, and supporting remediation planning. Advisory does not independently attest to compliance.",
  },
  {
    icon: ClipboardCheck,
    color: "var(--color-signal)",
    title: "Assurance Activity",
    body: "Independent, evidence-based testing (TOD / TOI / TOE) against the approved control, resulting in a rated finding or exception where the control is not operating as required. Performed independently of the team that designs or operates the control.",
  },
  {
    icon: Layers3,
    color: "var(--color-good)",
    title: "Framework references",
    body: "OWASP: Top 10, Application Security Verification Standard (ASVS), API Security Top 10, DevSecOps Guideline. MITRE ATT&CK: Enterprise matrix technique IDs indicating the adversary behaviour a control mitigates or detects. CIS: CIS Benchmarks (platform / OS / cloud hardening) and CIS Critical Security Controls v8. AWS: AWS Well-Architected Framework pillars and service-specific best practices.",
  },
  {
    icon: AlertTriangle,
    color: "var(--color-risk)",
    title: "Note on scope",
    body: "This matrix is a reference starting point, not an exhaustive or certified control library. Control wording, IDs, and mappings should be validated against your actual architecture, risk appetite, and applicable regulatory obligations (e.g. DPDP Act, RBI / SEBI guidelines, ISO 27001, NIST CSF / 800-53) before use in a live assessment or audit engagement.",
  },
];

export default function MethodologyView() {
  return (
    <div className="mx-auto max-w-3xl lg:max-w-5xl space-y-2.5 px-4 pb-16 pt-4">
      {SECTIONS.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.title}
            className="animate-rise flex gap-3 rounded-2xl border px-4 py-3.5"
            style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
          >
            <span
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ background: "var(--color-surface-2)" }}
            >
              <Icon className="h-4 w-4" style={{ color: s.color }} />
            </span>
            <div>
              <div className="text-[13.5px] font-semibold" style={{ color: "var(--color-text)" }}>
                {s.title}
              </div>
              <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {s.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
