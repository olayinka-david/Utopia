import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Sandboxing from "./components/Sandboxing";
import Process from "./components/Process";
import Signals from "./components/Signals";
import CtaFooter from "./components/CtaFooter";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll while the loader is visible.
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: loading ? 0 : 0.2 }}
      >
        <Navbar />
        <Hero />
        <Stats />
        <Sandboxing />
        <Process />
        <Signals />
        <CtaFooter />
      </motion.main>
    </>
  );
}
