import Reveal from "./Reveal";
import { assets } from "../assets";
import { ArrowRight } from "./icons";

export default function CtaFooter() {
  return (
    <footer id="cta" className="mx-auto max-w-[1440px] px-6 pb-16 md:px-[120px]">
      <Reveal>
        <div className="stats-gradient flex flex-col items-start gap-6 px-8 py-12 md:px-[64px] md:py-[72px]">
          <p className="font-mono text-[16px] uppercase tracking-[1.4px] text-brand-light">
            Post-Quantum Readiness Protocol
          </p>
          <h2 className="max-w-[720px] font-display text-[32px] font-light leading-[1.2] text-white md:text-[44px]">
            Measure your cryptographic exposure before quantum does.
          </h2>
          <a
            href="mailto:hello@vyapti.tech"
            className="flex items-center gap-3 bg-white px-6 py-3 font-mono text-[18px] font-medium text-[#012519] transition-opacity hover:opacity-90"
          >
            Request scoping call
            <ArrowRight size={20} />
          </a>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#d9d9d9] pt-8 md:flex-row">
          <img src={assets.logo.local} alt="Vyapti" className="h-8 w-auto" />
          <p className="font-mono text-[13px] uppercase tracking-[1px] text-[#3c3c3c]">
            © {new Date().getFullYear()} Vyapti — QSP
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
