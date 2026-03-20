import { motion } from "framer-motion";
import { Target, Rocket, TrendingUp } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const VisionAndTimeline = () => (
  <section className="py-20 md:py-28 bg-gradient-sysde text-primary-foreground">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-2">Resumen Ejecutivo</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Su socio tecnológico estratégico
        </h3>
      </motion.div>

      {/* Summary pricing */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Arranque", period: "Meses 1-18", price: "USD $9,999 /mes" },
          { label: "Crecimiento", period: "Meses 19-36", price: "USD $14,999 /mes" },
          { label: "Consolidación", period: "Mes 37+", price: "USD $18,999 /mes" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
          >
            <p className="text-sm opacity-70 mb-1">{item.label}</p>
            <p className="text-xs opacity-50 mb-3">{item.period}</p>
            <p className="text-2xl font-black">{item.price}</p>
          </motion.div>
        ))}
      </div>

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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-5">
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
