import Reveal from "./Reveal";

const stats = [
  { value: "4", label: "Independent signals" },
  { value: "2", label: "Parallel environments" },
  { value: "0", label: "Production data required" },
  { value: "100%", label: "Verifiable by your team" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-[120px]">
      <Reveal>
        <div className="stats-gradient grid grid-cols-2 gap-8 px-8 py-10 md:flex md:items-center md:justify-between md:py-[24px]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-4 text-center md:w-[230px]">
              <span className="text-[36px] font-bold leading-[48px] text-[#d7d7d7]">{s.value}</span>
              <span className="font-mono text-[14px] uppercase leading-4 tracking-[1.2px] text-brand-light">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
