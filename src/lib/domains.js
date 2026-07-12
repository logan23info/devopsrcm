export const DOMAIN_ORDER = [
  "DevOps Microservices",
  "CI/CD",
  "Secure Programming",
  "Infrastructure as Code (IaC)",
  "Containerization & Orchestration",
  "Configuration Management",
  "Code Repository",
  "Monitoring and Logging",
  "Version Control",
  "Continuous Operations",
  "Secure Pipelines",
  "Supply Chain Controls",
  "Patching",
  "Access Management",
  "Backup & Restore",
  "IT Operations",
];

export const DOMAIN_COLORS = {
  "DevOps Microservices": "#2E6DA4",
  "CI/CD": "#4457C4",
  "Secure Programming": "#2F8F5B",
  "Infrastructure as Code (IaC)": "#B8791E",
  "Containerization & Orchestration": "#1F8E8C",
  "Configuration Management": "#7A4FA3",
  "Code Repository": "#B85C2E",
  "Monitoring and Logging": "#2C9463",
  "Version Control": "#3E6FA3",
  "Continuous Operations": "#A38416",
  "Secure Pipelines": "#1E86A8",
  "Supply Chain Controls": "#A34A6A",
  "Patching": "#6E8B1E",
  "Access Management": "#B0392E",
  "Backup & Restore": "#5A5AC0",
  "IT Operations": "#5B6472",
};

export function domainColor(domain) {
  return DOMAIN_COLORS[domain] || "#2E6DA4";
}
