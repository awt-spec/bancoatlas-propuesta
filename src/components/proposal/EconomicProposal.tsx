import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, FileCheck } from "lucide-react";

const phases = [
  { phase: "FASE 1: ARRANQUE", period: "Meses 1 - 18", price: "USD $9,999", color: "border-sysde-blue", bg: "bg-sysde-blue/5", features: ["Implementación completa", "Todos los módulos", "Usuarios ilimitados", "Soporte incluido"] },
  { phase: "FASE 2: CRECIMIENTO", period: "Meses 19 - 36", price: "USD $14,999", color: "border-sysde-red", bg: "bg-sysde-red/5", features: ["Estabilización operativa", "Evolución funcional", "Reportes regulatorios BCP", "Canales digitales"] },
  { phase: "FASE 3: CONSOLIDACIÓN", period: "Mes 37 en adelante", price: "USD $18,999", color: "border-foreground/20", bg: "bg-muted/30", features: ["Plataforma madura", "Mejora continua", "Nuevos módulos disponibles", "Escalamiento pleno"] },
];

const EconomicProposal = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Inversión</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Modelo de Inversión Escalonado
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Diseñado para crecer con Banco Atlas. Modelo SaaS con todo incluido y sin sorpresas.
        </p>
      </motion.div>

      {/* Pricing Phases */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {phases.map((p, i) => (
          <motion.div
            key={p.phase}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`p-7 rounded-2xl border-2 ${p.color} ${p.bg} relative overflow-hidden`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-sysde-red mb-1">{p.phase}</p>
            <p className="text-xs text-muted-foreground mb-4">{p.period}</p>
            <p className="text-3xl font-black text-foreground mb-1">{p.price}</p>
            <p className="text-xs text-muted-foreground mb-6">/mes</p>
            <ul className="space-y-2">
              {p.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-sysde-blue mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* What's included */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="p-8 rounded-2xl border-2 border-sysde-blue/20 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-sysde-blue" />
          <h4 className="font-bold text-foreground text-xl mb-4 text-center">Todo incluido en cada fase</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "10 módulos core bancario completos",
              "Usuarios y agencias ilimitados",
              "Infraestructura Azure + contingencia",
              "Soporte, capacitación y mejoras evolutivas",
              "Reportes regulatorios BCP / SEPRELAD",
              "Implementación en 6 meses",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-sysde-blue mt-0.5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Terms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <h4 className="font-bold text-foreground text-xl mb-4 flex items-center gap-2">
          <FileCheck className="h-5 w-5 text-sysde-red" />
          Términos y Condiciones
        </h4>
        <div className="space-y-3">
          {[
            "Los precios están expresados en USD. No incluyen IVA. Facturación local en Paraguay.",
            "El modelo de suscripción ON-CLOUD requiere un contrato mínimo de cinco (5) años.",
            "Incluye instalación del Core en servidor de contingencia para disponibilidad y continuidad operativa.",
            "Modificaciones funcionales se desarrollarán sin costo adicional bajo plan de mejoras de mutuo acuerdo.",
            "Soporte operativo, mantenimiento evolutivo, soporte correctivo y capacitación progresiva incluidos.",
            "SYSDE realizará sin costo adicional cualquier actualización de reportes regulatorios requeridos.",
            "Usuarios ilimitados, agencias ilimitadas y ajustes regulatorios ilimitados durante toda la vigencia.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-sysde-red/10 text-sysde-red flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Confidentiality */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
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
