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
  { concept: "Licenciamiento", trad: "Compra + Mantenimiento", sysde: "Suscripción SaaS", tradBad: true },
  { concept: "Usuarios", trad: "Pago por usuario", sysde: "ILIMITADOS", tradBad: true },
  { concept: "Agencias", trad: "Pago por agencia", sysde: "ILIMITADAS", tradBad: true },
  { concept: "Cambios regulatorios", trad: "Cobro adicional", sysde: "INCLUIDOS", tradBad: true },
  { concept: "Mejoras funcionales", trad: "Cobro por hora", sysde: "INCLUIDAS", tradBad: true },
  { concept: "Soporte", trad: "Contrato separado", sysde: "INCLUIDO", tradBad: true },
  { concept: "Capacitación", trad: "Cobro adicional", sysde: "INCLUIDA", tradBad: true },
  { concept: "Infraestructura", trad: "Inversión propia", sysde: "Azure incluido", tradBad: true },
  { concept: "Implementación", trad: "6–18 meses", sysde: "6 meses", tradBad: true },
];

const infra = [
  { icon: Server, title: "Servidor de Aplicaciones", specs: ["4 cores · 16 GB RAM", "128 GB SSD", "Windows Server 2019"] },
  { icon: Database, title: "Base de Datos", specs: ["SQL SaaS — 4 núcleos", "16 GB RAM · 500 GB", "MS SQL 2019"] },
  { icon: HardDrive, title: "Servidor Web", specs: ["4 cores · 16 GB RAM", "128 GB SSD", "Linux"] },
  { icon: Wifi, title: "Servicios de Red", specs: ["Respaldo diario", "Retención 15 días", "Sitio de Contingencia"] },
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
      {/* Benefits */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 max-w-5xl">
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

          {/* Comparison — Visual cards layout */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3 text-center">Comparativa</p>
            <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-10 text-center tracking-tight">¿Por qué SYSDE SAF+?</h3>
            <div className="space-y-3">
              {comparison.map((row, i) => (
                <motion.div
                  key={row.concept}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="grid grid-cols-[1fr_1fr_1fr] items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-sysde-red/20 transition-colors duration-200 cursor-default group"
                >
                  <span className="font-semibold text-foreground text-sm">{row.concept}</span>
                  <span className="text-sm text-muted-foreground text-center flex items-center justify-center gap-1.5">
                    <X className="h-3.5 w-3.5 text-muted-foreground/50 flex-shrink-0" />
                    {row.trad}
                  </span>
                  <span className="text-sm font-bold text-sysde-red text-center flex items-center justify-center gap-1.5">
                    <Check className="h-3.5 w-3.5 flex-shrink-0" />
                    {row.sysde}
                  </span>
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
