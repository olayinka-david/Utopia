import { assets } from "../assets";
import Reveal from "./Reveal";
import { PhaseGlyph } from "./icons";

function PhaseBadge({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg px-3 py-2 font-mono text-[14px] font-medium tracking-[0.6px] ${
        tone === "dark" ? "bg-brand/10 text-[#0ffaac]" : "bg-brand/10 text-[#006d39]"
      }`}
    >
      {label}
    </span>
  );
}

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1440px] px-6 py-20 md:px-[120px]">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[16px] uppercase tracking-[1.4px] text-brand">The Process</p>
          <h2 className="max-w-[734px] font-display text-[26px] uppercase leading-[1.5] tracking-[6px] text-[#161616] md:text-[32px] md:tracking-[8px]">
            Two environments. One probe. A clear result
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {/* Phase 01 + 02 */}
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              {
                badge: "PHASE 01",
                title: "You provision",
                body: "Two isolated, non-production sandbox environments and a sample application — representative of a real workload, containing no live data. Scoped API access under your controls, for the duration of the exercise only.",
              },
              {
                badge: "PHASE 02",
                title: "We configure",
                body: "Environment A runs your current classical encryption. Environment B runs post-quantum encryption, which we configure together. Our probe — QSP — connects to both through defined interfaces.",
              },
            ].map((p) => (
              <div
                key={p.badge}
                className="relative flex min-h-[234px] flex-col gap-3 overflow-hidden rounded border border-brand p-6"
              >
                <PhaseBadge label={p.badge} />
                <h3 className="font-sans text-[24px] font-medium leading-[33.6px] text-[#1a1c1c]">
                  {p.title}
                </h3>
                <p className="max-w-[542px] font-sans text-[16px] leading-6 text-[#3c3c3c]">{p.body}</p>
                <PhaseGlyph
                  size={100}
                  className="pointer-events-none absolute bottom-4 right-4 text-brand/30"
                />
              </div>
            ))}
          </div>

          {/* Phase 03 — dark, render nested inside the card */}
          <div className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded border-2 border-[#046c4a] bg-[#000906] p-6 md:flex-row">
            <div className="flex max-w-[690px] flex-col gap-3">
              <PhaseBadge label="PHASE 03" tone="dark" />
              <h3 className="font-sans text-[24px] font-medium leading-[33.6px] text-brand">QSP measures</h3>
              <p className="font-sans text-[16px] leading-6 text-[#e2e2e2]">
                A controlled battery of simulated attacks runs against both environments simultaneously.
                QSP measures four independent signals and reports where each environment is vulnerable and
                where it holds. Your team can independently verify every finding.
              </p>
            </div>
            <img
              src={assets.phase03.local}
              alt="QSP measurement render"
              className="h-[198px] w-[256px] shrink-0 rounded-sm object-cover opacity-80"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
