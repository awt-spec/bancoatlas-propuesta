import { motion } from "framer-motion";
import { Target, Rocket, TrendingUp } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    icon: Rocket,
    title: "Time to Market",
    desc: "Operar de forma automatizada en muy corto plazo, con productos y servicios que satisfagan las necesidades de sus clientes.",
  },
  {
    icon: Target,
    title: "Foco en el Negocio",
    desc: "Garantizar que Banco Atlas se focalice en sus ventajas competitivas, delegando lo tecnológico a SYSDE.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Eficiente",
    desc: "Soportar el crecimiento a través de una solución robusta e integrada, con flexibilidad para el mercado paraguayo.",
  },
];

const VisionAndTimeline = () => (
  <section className="py-24 md:py-32 bg-foreground text-white overflow-hidden" style={{ background: "hsl(0 0% 12%)" }}>
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3">Resumen Ejecutivo</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]" style={{ textWrap: "balance" as const }}>
          Su socio tecnológico estratégico
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="text-center p-8 rounded-2xl bg-white/[0.05] border border-white/10 cursor-default group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
              <v.icon className="h-6 w-6 text-white/80" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionAndTimeline;
