import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const ProposalHero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-sysde-red">
    {/* Decorative circles */}
    <motion.div
      className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.1]"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, ease }}
    />
    <motion.div
      className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/[0.08]"
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, delay: 0.2, ease }}
    />

    {/* Bottom right white triangle */}
    <div className="absolute bottom-0 right-0 w-0 h-0" style={{
      borderStyle: "solid",
      borderWidth: "0 0 200px 300px",
      borderColor: "transparent transparent hsl(0 0% 100%) transparent",
    }} />

    <div className="container relative z-10 px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tight leading-[0.9] mb-2 text-white"
          >
            SAF+
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.9, ease }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-10 text-white"
          >
            CORE FINANCIERO
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.55, duration: 0.6, ease }}
          className="flex flex-col sm:flex-row gap-8 mb-16"
        >
          <div>
            <span className="text-sm text-white/50 block mb-1">Preparado por:</span>
            <span className="font-bold text-lg text-white">SYSDE & Inventiva</span>
          </div>
          <div className="w-px bg-white/20 hidden sm:block" />
          <div>
            <span className="text-sm text-white/50 block mb-1">Preparado para:</span>
            <span className="font-bold text-lg text-white">Banco Atlas — Paraguay</span>
          </div>
          <div className="w-px bg-white/20 hidden sm:block" />
          <div>
            <span className="text-sm text-white/50 block mb-1">Fecha:</span>
            <span className="font-bold text-lg text-white">17 / marzo / 2026</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProposalHero;
