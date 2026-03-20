import { motion } from "framer-motion";
import { Building2, TrendingUp, Smartphone } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    icon: Building2,
    title: "Solidez Institucional",
    metric: "US$1,400M",
    metricLabel: "en activos",
    desc: "27 sucursales, 500+ colaboradores y calificación AA-py Estable.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Activo",
    metric: "15.36%",
    metricLabel: "crecimiento interanual",
    desc: "Líder en préstamos AFD para vivienda con cartera de créditos en expansión.",
  },
  {
    icon: Smartphone,
    title: "Transformación Digital",
    metric: "66%",
    metricLabel: "transacciones digitales",
    desc: "Estrategia centrada en digitalización y PYMES.",
  },
];

const ExecutiveLetter = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3">
          Entendemos su momento
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5" style={{ textWrap: "balance" }}>
          Una propuesta diseñada para{" "}
          <span className="text-sysde-red">Banco Atlas</span>
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ textWrap: "pretty" }}>
          Un modelo flexible que se adapta al momento actual del banco y permite escalar gradualmente conforme crece la operación.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px hsla(207, 60%, 55%, 0.15)", transition: { duration: 0.25 } }}
            className="p-7 rounded-2xl border border-border bg-card cursor-default group"
          >
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <p.icon className="h-5 w-5 text-sysde-blue" />
            </div>
            <p className="text-3xl font-black text-foreground tracking-tight">{p.metric}</p>
            <p className="text-xs text-muted-foreground mb-3">{p.metricLabel}</p>
            <h3 className="text-base font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExecutiveLetter;
