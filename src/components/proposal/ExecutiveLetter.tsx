import { motion } from "framer-motion";
import { Building2, TrendingUp, Smartphone } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Solidez Institucional",
    desc: "US$1,400M en activos, 27 sucursales, 500+ colaboradores y calificación AA-py Estable.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Activo",
    desc: "Cartera de créditos con crecimiento del 15.36% interanual. Líder en préstamos AFD para vivienda.",
  },
  {
    icon: Smartphone,
    title: "Transformación Digital",
    desc: "66% de transacciones ya son digitales. Estrategia centrada en digitalización y PYMES.",
  },
];

const ExecutiveLetter = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">
          Entendemos su momento
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4" style={{ textWrap: "balance" }}>
          Una propuesta diseñada para Banco Atlas
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ textWrap: "pretty" }}>
          Diseñada para acompañar a Banco Atlas en cada etapa de su evolución, con un modelo flexible
          que se adapta al momento actual y permite escalar gradualmente.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px hsla(var(--sysde-blue), 0.15)", transition: { duration: 0.25 } }}
            className="p-7 rounded-2xl border border-border bg-card cursor-default group"
          >
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <p.icon className="h-5 w-5 text-sysde-blue" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center text-muted-foreground text-sm italic max-w-2xl mx-auto"
      >
        Nuestra propuesta está diseñada con un modelo flexible que se adapta al momento actual de Banco Atlas,
        permitiendo iniciar con una inversión optimizada y escalar gradualmente.
      </motion.p>
    </div>
  </section>
);

export default ExecutiveLetter;
