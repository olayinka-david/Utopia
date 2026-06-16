import { motion } from "motion/react";
import { assets } from "../assets";
import { ArrowRight } from "./icons";

const links = [
  { label: "How it works", href: "#process" },
  { label: "What we measure", href: "#signals" },
  { label: "Scope", href: "#sandboxing" },
];

export default function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-[#d9d9d9] bg-white/90 backdrop-blur"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 md:px-[120px]">
        <a href="#top" className="flex items-center" aria-label="Vyapti home">
          <img src={assets.logo.local} alt="Vyapti" className="h-[45px] w-auto" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[18px] uppercase text-[#3c3c3c] transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="btn-gradient flex items-center gap-3 px-6 py-3 font-mono text-[16px] font-medium tracking-[0.28px] text-white"
        >
          Request scoping call
          <ArrowRight size={16} />
        </a>
      </nav>
    </motion.header>
  );
}
