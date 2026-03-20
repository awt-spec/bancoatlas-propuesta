import { motion } from "framer-motion";
import { Target, Rocket, TrendingUp } from "lucide-react";

const cardVariants = {
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
};

const VisionAndTimeline = () => (
  <section className="py-20 md:py-28 bg-gradient-sysde text-primary-foreground">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-2">Resumen Ejecutivo</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ textWrap: "balance" }}>
          Su socio tecnológico estratégico
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Rocket,
            title: "Time to Market",
            desc: "Apoyar a Banco Atlas a operar de forma automatizada en muy corto plazo, con productos y servicios que satisfagan las necesidades de sus clientes.",
          },
          {
            icon: Target,
            title: "Foco en el Negocio",
            desc: "Garantizar que Banco Atlas se focalice en los factores clave de su ventaja competitiva, delegando lo tecnológico a SYSDE.",
          },
          {
            icon: TrendingUp,
            title: "Crecimiento Eficiente",
            desc: "Soportar el crecimiento del negocio a través de una solución robusta e integrada, con flexibilidad para adaptarse al mercado paraguayo.",
          },
        ].map((v, i) => (
          <motion.div
            key={v.title}
            {...cardVariants}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="text-center p-8 rounded-2xl bg-primary-foreground/[0.06] backdrop-blur-sm border border-primary-foreground/10 cursor-default group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
              <v.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-sm opacity-75 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionAndTimeline;
