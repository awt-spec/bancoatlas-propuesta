import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Building, Wrench, FileText, HeadphonesIcon, Cloud, Server, Database, HardDrive, Wifi, Check, X, ChevronDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  { icon: Users, title: "Usuarios Ilimitados", desc: "Sin restricción de cantidad. Crezca sin costos adicionales por licencia." },
  { icon: Building, title: "Agencias Ilimitadas", desc: "Las 27 agencias actuales y las futuras están cubiertas sin incrementos." },
  { icon: Wrench, title: "Cambios y Mejoras", desc: "Ajustes funcionales y nuevos productos crediticios sin costo extra." },
  { icon: FileText, title: "Reportes Regulatorios", desc: "Actualizaciones BCP, SEPRELAD o cualquier ente regulador incluidas." },
  { icon: HeadphonesIcon, title: "Soporte y Capacitación", desc: "Soporte correctivo, evolutivo y capacitación permanente sin límites." },
  { icon: Cloud, title: "Infraestructura Cloud", desc: "Microsoft Azure, respaldos diarios y sitio de contingencia incluidos." },
];

const comparison = [
  { concept: "Licenciamiento", trad: "Compra + Mantenimiento", sysde: "INCLUIDO", tradBad: true },
  { concept: "Usuarios", trad: "Pago por usuario", sysde: "ILIMITADOS", tradBad: true },
  { concept: "Agencias", trad: "Pago por agencia", sysde: "ILIMITADAS", tradBad: true },
  { concept: "Cambios regulatorios", trad: "Cobro adicional", sysde: "ILIMITADOS", tradBad: true },
  { concept: "Mejoras funcionales", trad: "Cobro por hora", sysde: "ILIMITADAS", tradBad: true },
  { concept: "Soporte", trad: "Contrato separado", sysde: "ILIMITADO", tradBad: true },
  { concept: "Capacitación", trad: "Cobro adicional", sysde: "ILIMITADA", tradBad: true },
  { concept: "Infraestructura", trad: "Inversión propia", sysde: "Azure incluido", tradBad: true },
  { concept: "Implementación", trad: "6–18 meses", sysde: "6 meses", tradBad: true },
];

const infra = [
  { icon: Server, title: "Servidor de Aplicaciones", specs: ["4 cores · 16 GB RAM", "128 GB SSD", "Windows Server 2019"], color: "from-sysde-red/20 to-sysde-red/5" },
  { icon: Database, title: "Base de Datos", specs: ["SQL SaaS — 4 núcleos", "16 GB RAM · 500 GB", "MS SQL 2019"], color: "from-sysde-red/15 to-transparent" },
  { icon: HardDrive, title: "Servidor Web", specs: ["4 cores · 16 GB RAM", "128 GB SSD", "Linux"], color: "from-sysde-red/20 to-sysde-red/5" },
  { icon: Wifi, title: "Servicios de Red", specs: ["Respaldo diario", "Retención 15 días", "Sitio de Contingencia"], color: "from-sysde-red/15 to-transparent" },
];

const timeline = [
  { stage: "0", task: "Gestión del Proyecto", months: [1,1,1,1,1,1] },
  { stage: "1", task: "Config. Nube y Entendimiento Negocio", months: [1,1,0,0,0,0] },
  { stage: "2", task: "Parametrización Base y Ajustes", months: [0,1,1,1,0,0] },
  { stage: "3", task: "Capacitación Funcional", months: [0,0,0,1,1,0] },
  { stage: "4", task: "Pruebas Integrales", months: [0,0,0,0,1,0] },
  { stage: "5", task: "Puesta en Producción", months: [0,0,0,0,0,1] },
];

const BenefitsAndInfra = () => {
  const [expandedInfra, setExpandedInfra] = useState<number | null>(null);

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 max-w-5xl">

          {/* Infrastructure — Interactive cards */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3 text-center">Infraestructura</p>
            <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center tracking-tight">ON-CLOUD · Microsoft Azure</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {infra.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  onClick={() => setExpandedInfra(expandedInfra === i ? null : i)}
                  className="p-6 rounded-2xl bg-card border border-border cursor-pointer group hover:border-sysde-red/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <s.icon className="h-5 w-5 text-sysde-red" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{s.title}</h4>
                    </div>
                    <motion.div animate={{ rotate: expandedInfra === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {expandedInfra === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-border space-y-2">
                          {s.specs.map((sp, si) => (
                            <motion.div
                              key={sp}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: si * 0.05, duration: 0.3 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sysde-red/40 flex-shrink-0" />
                              {sp}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Socio Estratégico — Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3">Modelo de Servicio</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5" style={{ textWrap: "balance" as const }}>
              Servicio Ilimitado SYSDE
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Todo incluido, sin sorpresas.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="flex gap-4 p-6 rounded-2xl border border-border bg-card cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <b.icon className="h-5 w-5 text-sysde-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3 text-center">Comparativa</p>
            <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center tracking-tight">¿Por qué SYSDE SAF+?</h3>
            <p className="text-sm text-muted-foreground text-center mb-10 max-w-md mx-auto">Pasa el cursor sobre cada fila para ver la diferencia</p>
            
            <div className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-0 mb-2 px-5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Concepto</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">Tradicional</span>
              <span className="text-xs font-bold uppercase tracking-wider text-sysde-red text-center">SYSDE SAF+</span>
            </div>

            <div className="space-y-2">
              {comparison.map((row, i) => (
                <motion.div
                  key={row.concept}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-0 rounded-xl border border-border bg-card overflow-hidden cursor-default group hover:shadow-lg hover:shadow-sysde-red/5 hover:border-sysde-red/25 transition-all duration-300"
                >
                  <div className="py-4 px-5 border-r border-border">
                    <span className="font-semibold text-foreground text-sm group-hover:text-sysde-red transition-colors duration-300">{row.concept}</span>
                  </div>
                  <div className="py-4 px-4 text-center border-r border-border bg-muted/20 group-hover:bg-muted/40 transition-colors duration-300">
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 0.2, duration: 0.3, ease }}
                        className="w-5 h-5 rounded-full bg-muted-foreground/10 flex items-center justify-center flex-shrink-0"
                      >
                        <X className="h-3 w-3 text-muted-foreground/60" />
                      </motion.div>
                      <span className="text-sm text-muted-foreground">{row.trad}</span>
                    </div>
                  </div>
                  <div className="py-4 px-4 text-center group-hover:bg-sysde-red/[0.04] transition-colors duration-300">
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 0.3, duration: 0.3, ease }}
                        className="w-5 h-5 rounded-full bg-sysde-red/15 flex items-center justify-center flex-shrink-0 group-hover:bg-sysde-red group-hover:text-white transition-all duration-300"
                      >
                        <Check className="h-3 w-3 text-sysde-red group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <span className="text-sm font-bold text-sysde-red">{row.sysde}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline — red background */}
      <section className="py-24 md:py-32 bg-sysde-red text-white overflow-hidden">
        <div className="container px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3 text-center">Implementación</p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 text-center leading-[1.1]">Cronograma</h3>
            <p className="text-sm text-white/60 text-center mb-10">Metodología SYSDE "Agile - Answers" · 6 meses</p>
            <div className="overflow-x-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-white/15">
                    <th className="text-left py-3 px-4 font-semibold text-white/70 w-12">Etapa</th>
                    <th className="text-left py-3 px-4 font-semibold text-white/70">Tareas</th>
                    {[1,2,3,4,5,6].map(m => (
                      <th key={m} className="text-center py-3 px-2 font-bold text-white w-12">M{m}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeline.map((row, i) => (
                    <motion.tr
                      key={row.stage}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease }}
                      className="border-b border-white/10 last:border-0 group/row hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="py-4 px-4 font-mono font-bold text-white">
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 + 0.2, ease }}
                          className="inline-flex w-7 h-7 rounded-lg bg-white/15 items-center justify-center text-xs"
                        >
                          {row.stage}
                        </motion.span>
                      </td>
                      <td className="py-4 px-4 text-white/90 font-medium">{row.task}</td>
                      {row.months.map((active, mi) => (
                        <td key={mi} className="py-4 px-2 text-center">
                          {active ? (
                            <motion.div
                              initial={{ scaleX: 0, opacity: 0 }}
                              whileInView={{ scaleX: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 + mi * 0.06, ease }}
                              className="h-3 rounded-full mx-auto origin-left bg-white/90 group-hover/row:bg-white transition-colors duration-200"
                              style={{ width: "28px" }}
                            />
                          ) : (
                            <div className="h-3 w-[28px] rounded-full mx-auto bg-white/5" />
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs text-center mt-6 text-white/50"
            >
              Implementación en 6 meses — Modelo ON-CLOUD con Microsoft Azure
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BenefitsAndInfra;