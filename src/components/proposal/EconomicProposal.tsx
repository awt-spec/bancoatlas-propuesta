import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, FileCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    phase: "Fase 1 — Arranque",
    period: "Meses 1–18",
    price: "$9,999",
    highlight: true,
    borderColor: "border-sysde-red",
    features: ["Implementación completa", "Todos los módulos activos", "Usuarios ilimitados", "Soporte incluido"],
  },
  {
    phase: "Fase 2 — Crecimiento",
    period: "Meses 19–36",
    price: "$14,999",
    highlight: false,
    borderColor: "border-sysde-red",
    features: ["Estabilización operativa", "Evolución funcional", "Reportes regulatorios BCP", "Canales digitales"],
  },
  {
    phase: "Fase 3 — Consolidación",
    period: "Mes 37 en adelante",
    price: "$18,999",
    highlight: false,
    borderColor: "border-border",
    features: ["Plataforma madura", "Mejora continua", "Nuevos módulos disponibles", "Escalamiento pleno"],
  },
];

const inclusions = [
  "10 módulos core bancario completos",
  "Usuarios y agencias ilimitados",
  "Infraestructura Azure + contingencia",
  "Soporte, capacitación y mejoras evolutivas",
  "Reportes regulatorios BCP / SEPRELAD",
  "Implementación en 6 meses",
];

const terms = [
  "Precios en USD. No incluyen IVA. Facturación local en Paraguay.",
  "Contrato mínimo de cinco (5) años bajo modelo ON-CLOUD.",
  "Incluye servidor de contingencia para disponibilidad y continuidad.",
  "Modificaciones funcionales sin costo adicional, bajo plan de mejoras de mutuo acuerdo.",
  "Soporte operativo, mantenimiento evolutivo y capacitación progresiva incluidos.",
  "Actualizaciones de reportes regulatorios sin costo adicional.",
  "Usuarios ilimitados, agencias ilimitadas y ajustes regulatorios ilimitados.",
];

const EconomicProposal = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container px-6 max-w-5xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3">Inversión</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5" style={{ textWrap: "balance" }}>
          Modelo de Inversión Escalonado
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
          Diseñado para crecer con Banco Atlas. Modelo SaaS con todo incluido y sin sorpresas.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {phases.map((p, i) => (
          <motion.div
            key={p.phase}
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease }}
            whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.12)", transition: { duration: 0.25 } }}
            className={`p-7 rounded-2xl border-2 ${p.borderColor} relative overflow-hidden cursor-default group ${
              p.highlight ? "bg-sysde-red/[0.04]" : "bg-card"
            }`}
          >
            {p.highlight && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-sysde" />
            )}
            <p className="text-xs font-bold uppercase tracking-widest text-sysde-red mb-1">{p.phase}</p>
            <p className="text-xs text-muted-foreground mb-5">{p.period}</p>
            <p className="text-4xl font-black text-foreground tracking-tight">
              USD {p.price}
            </p>
            <p className="text-xs text-muted-foreground mb-6">/mes</p>
            <ul className="space-y-2.5">
              {p.features.map((f, fi) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 + fi * 0.06, ease }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-sysde-blue mt-0.5 flex-shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Inclusions */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
        className="mb-16"
      >
        <div className="p-8 rounded-2xl border-2 border-sysde-blue/25 bg-sysde-blue/[0.03] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-sysde-blue" />
          <h4 className="font-bold text-foreground text-lg mb-5 text-center">Todo incluido en cada fase</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inclusions.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-sysde-blue mt-0.5 flex-shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Terms */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="mb-12"
      >
        <h4 className="font-bold text-foreground text-lg mb-5 flex items-center gap-2">
          <FileCheck className="h-5 w-5 text-sysde-red" />
          Términos y Condiciones
        </h4>
        <div className="space-y-3">
          {terms.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="w-5 h-5 rounded-full bg-sysde-red/10 text-sysde-red flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Confidentiality */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease }}
        className="p-6 rounded-xl bg-muted/60 border border-border"
      >
        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-sysde-red" />
          Confidencialidad
        </h4>
        <p className="text-sm text-muted-foreground">
          La información contenida en esta propuesta es confidencial y propiedad de SYSDE.
        </p>
      </motion.div>
    </div>
  </section>
);

export default EconomicProposal;
