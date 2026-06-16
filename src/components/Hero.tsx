import { motion } from "motion/react";
import { assets } from "../assets";
import { ArrowRight, ArrowDown } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1440px] px-6 md:px-[120px]">
      <div className="flex flex-col items-center gap-12 py-12 md:py-[60px] lg:flex-row lg:justify-between lg:gap-[102px]">
        {/* Copy */}
        <motion.div
          className="flex w-full max-w-[610px] flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="font-mono text-[16px] uppercase tracking-[1.4px] text-[#132c23]">
            Post-Quantum Readiness Protocol
          </p>
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[44px] font-light leading-[1.2] text-[#101010] md:text-[64px]">
              Know exactly where your cryptographic exposure sits.
            </h1>
            <p className="font-satoshi text-[18px] leading-[1.6] text-[#3c3c3c]">
              A controlled, time-boxed sandbox that measures your classical and post-quantum
              protection side by side — on your own environment, with no production data.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="btn-gradient flex items-center gap-3 px-6 py-3 font-mono text-[18px] font-medium text-white"
            >
              Request scoping call
              <ArrowRight size={20} />
            </a>
            <a
              href="#process"
              className="flex w-[250px] items-center justify-center gap-3 border border-[#d9d9d9] px-6 py-3 font-mono text-[18px] text-[#101010] transition-colors hover:border-brand"
            >
              How it works
              <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>

        {/* Visualization */}
        <motion.div
          className="relative aspect-square w-full max-w-[488px] shrink-0 opacity-90"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src={assets.hero.local}
            alt="Sandbox environment visualization"
            className="h-full w-full object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
