import { assets } from "../assets";
import Reveal from "./Reveal";

const signals = [
  {
    badge: "SIGNAL 01",
    title: "SYMMETRY DRIFT",
    body: "Deviations from expected cryptographic symmetry — the first signal that an encryption scheme is behaving inconsistently under simulated quantum-capable attack conditions.",
    img: assets.signal01.local,
  },
  {
    badge: "SIGNAL 02",
    title: "TIMING INVARIANCE",
    body: "Whether cryptographic operations leak information through measurable timing differences. Even small deviations represent an exploitable side channel.",
    img: assets.signal02.local,
  },
  {
    badge: "SIGNAL 03",
    title: "PARITY DEFLECTION",
    body: "Integrity across operations: whether an encryption scheme maintains consistent output parity or whether that parity shifts under adversarial conditions.",
    img: assets.signal03.local,
  },
  {
    badge: "SIGNAL 04",
    title: "NOISE CHARACTERISTICS",
    body: "Anomaly patterns that separate sound implementations from exposed ones. Noise profiles reveal whether a system is leaking state information at the implementation layer.",
    img: assets.signal04.local,
  },
];

export default function Signals() {
  return (
    <section id="signals" className="mx-auto max-w-[1440px] px-6 py-20 md:px-[120px]">
      <Reveal className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[16px] uppercase tracking-[1.4px] text-brand">Measurement signals</p>
          <h2 className="max-w-[848px] font-display text-[26px] lowercase leading-[1.5] tracking-[4px] text-[#161616] first-letter:uppercase md:text-[32px]">
            four independent probes. every parameter exposed for verification.
          </h2>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {signals.map((s) => (
            <article
              key={s.badge}
              className="relative h-[410px] overflow-hidden rounded border border-[#d9d9d9] bg-[#f9f9f9] p-6"
            >
              <span className="inline-flex items-center justify-center rounded-xl bg-[rgba(6,36,19,0.1)] px-3 py-2 font-mono text-[14px] font-medium tracking-[0.6px] text-brand">
                {s.badge}
              </span>
              <div className="mt-4 flex max-w-[546px] flex-col gap-3">
                <h3 className="font-display text-[24px] font-medium leading-[33.6px] text-[#161616]">
                  {s.title}
                </h3>
                <p className="font-sans text-[16px] leading-6 text-[#3c3c3c]">{s.body}</p>
              </div>
              {/* 3D render nested inside the card, bottom-right (auto-layout fix) */}
              <img
                src={s.img}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] object-contain"
              />
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
