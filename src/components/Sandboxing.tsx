import { motion } from "motion/react";
import Reveal from "./Reveal";
import { Connector, ProbeIcon } from "./icons";

function Environment({ name, kind }: { name: string; kind: string }) {
  return (
    <div className="flex h-[186px] w-full max-w-[372px] flex-col items-center justify-center gap-8 p-3 text-center">
      <span className="font-display text-[37px] text-brand">{name}</span>
      <span className="font-mono text-[18px] text-[#3d4a3f]">{kind}</span>
    </div>
  );
}

export default function Sandboxing() {
  return (
    <section id="sandboxing" className="mx-auto max-w-[1440px] px-6 py-20 md:px-[120px]">
      <Reveal className="flex flex-col items-center gap-10">
        <h2 className="text-center font-mono text-[28px] uppercase leading-tight text-[#1f2b22] md:text-[37px]">
          QSP Sandboxing
        </h2>

        <div className="flex w-full flex-col items-center justify-center gap-7 lg:flex-row">
          <Environment name="Environment A" kind="CLASSICAL" />

          <Connector className="shrink-0 rotate-90 text-brand lg:rotate-0" size={18} />

          {/* QSP PROBE — the broadcast icon is nested INSIDE this box (auto-layout fix) */}
          <div className="flex h-[253px] w-full max-w-[407px] shrink-0 flex-col items-center justify-center gap-8 border-[3px] border-[rgba(4,122,55,0.49)] px-6">
            <span className="probe-text font-display text-[37px]">QSP PROBE</span>
            <motion.span
              className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-brand text-white"
              animate={{ boxShadow: ["0 0 0 0 rgba(46,184,106,0.45)", "0 0 0 18px rgba(46,184,106,0)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            >
              <ProbeIcon size={34} className="text-white" />
            </motion.span>
          </div>

          <Connector className="shrink-0 rotate-90 text-brand lg:rotate-0" size={18} />

          <Environment name="Environment B" kind="POST QUANTUM" />
        </div>
      </Reveal>
    </section>
  );
}
