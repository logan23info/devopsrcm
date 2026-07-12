import { useState } from "react";
import Header from "./components/Header";
import MatrixView from "./pages/MatrixView";
import DomainIndexView from "./pages/DomainIndexView";
import MethodologyView from "./pages/MethodologyView";
import controls from "./data/controls.json";

export default function App() {
  const [tab, setTab] = useState("matrix");
  const [activeDomain, setActiveDomain] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-base)" }}>
      <Header tab={tab} setTab={setTab} />

      {tab === "matrix" && (
        <MatrixView
          controls={controls}
          activeDomain={activeDomain}
          setActiveDomain={setActiveDomain}
        />
      )}
      {tab === "domains" && (
        <DomainIndexView
          controls={controls}
          onSelectDomain={(d) => {
            setActiveDomain(d);
            setTab("matrix");
          }}
        />
      )}
      {tab === "methodology" && <MethodologyView />}

      <footer className="mx-auto max-w-3xl lg:max-w-5xl px-4 pb-10 pt-4 text-center">
        <p className="text-[11px]" style={{ color: "var(--color-text-faint)" }}>
          Reference control catalogue · validate against your architecture, risk appetite, and
          applicable regulatory obligations before use in a live engagement.
        </p>
      </footer>
    </div>
  );
}
