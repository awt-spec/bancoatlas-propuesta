import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const ProposalHero = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-sysde-dark">
    {/* Subtle red accent */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsla(355,72%,40%,0.15),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsla(355,72%,40%,0.08),transparent_50%)]" />

    <motion.div
      className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-white/[0.04]"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, ease }}
    />
    <motion.div
      className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full border border-white/[0.04]"
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, delay: 0.2, ease }}
    />

    <div className="container relative z-10 px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-2 text-white"
          >
            PROPUESTA
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.9, ease }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-6 text-sysde-red"
          >
            ECONÓMICA
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-xl"
          >
            Solución Integral <span className="font-semibold text-white">SYSDE SAF+</span> — Core Bancario
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.6, ease }}
          className="flex flex-col sm:flex-row gap-8 mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Preparado por</span>
            <span className="font-bold text-lg text-white">SYSDE & Inventiv.A</span>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Preparado para</span>
            <span className="font-bold text-lg text-white">Banco Atlas — Paraguay</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.75, duration: 0.6, ease }}
          className="flex flex-wrap gap-6 text-sm text-white/50"
        >
          <p>+506 8657 0390</p>
          <p>info@sysde.com</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProposalHero;
