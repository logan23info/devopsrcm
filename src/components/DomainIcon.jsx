import {
  Network, Workflow, Code2, Layers, Box, SlidersHorizontal,
  GitBranch, BarChart3, GitCommitVertical, Infinity as InfinityIcon,
  ShieldCheck, Link2, Wrench, KeyRound, Archive, Server, Shield,
} from "lucide-react";

const MAP = {
  network: Network,
  pipeline: Workflow,
  code: Code2,
  stack: Layers,
  container: Box,
  sliders: SlidersHorizontal,
  git: GitBranch,
  chart: BarChart3,
  branch: GitCommitVertical,
  infinity: InfinityIcon,
  shield: ShieldCheck,
  link: Link2,
  wrench: Wrench,
  key: KeyRound,
  archive: Archive,
  server: Server,
};

export default function DomainIcon({ name, className, style }) {
  const Comp = MAP[name] || Shield;
  return <Comp className={className} style={style} strokeWidth={1.8} />;
}
