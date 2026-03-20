import { motion } from "framer-motion";
import { Users, Building, Wrench, FileText, HeadphonesIcon, Cloud, Server, Database, HardDrive, Wifi } from "lucide-react";

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
  ["Licenciamiento", "Compra + Mantenimiento", "Suscripción SaaS"],
  ["Usuarios", "Pago por usuario", "ILIMITADOS"],
  ["Agencias", "Pago por agencia", "ILIMITADAS"],
  ["Cambios regulatorios", "Cobro adicional", "INCLUIDOS"],
  ["Mejoras funcionales", "Cobro por hora", "INCLUIDAS"],
  ["Soporte", "Contrato separado", "INCLUIDO"],
  ["Capacitación", "Cobro adicional", "INCLUIDA"],
  ["Infraestructura", "Inversión propia", "Azure incluido"],
  ["Implementación", "6–18 meses", "6 meses"],
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

const BenefitsAndInfra = () => (
  <>
    {/* Benefits & Comparison */}
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

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">¿Por qué SYSDE SAF+?</h3>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-sysde-red text-white">
                  <th className="text-left py-3 px-5 font-semibold">Concepto</th>
                  <th className="text-center py-3 px-5 font-semibold">Modelo Tradicional</th>
                  <th className="text-center py-3 px-5 font-semibold">SYSDE SAF+</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([concept, trad, sysde], i) => (
                  <motion.tr
                    key={concept}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease }}
                    className={`${i % 2 === 0 ? "bg-card" : "bg-muted/30"} border-b border-border last:border-0`}
                  >
                    <td className="py-3 px-5 font-medium text-foreground">{concept}</td>
                    <td className="py-3 px-5 text-center text-muted-foreground">{trad}</td>
                    <td className="py-3 px-5 text-center font-bold text-sysde-red">{sysde}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Infraestructura ON-CLOUD</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infra.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-xl bg-card border border-border cursor-default group"
              >
                <s.icon className="h-5 w-5 text-sysde-red mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-foreground text-sm mb-3">{s.title}</h4>
                <ul className="space-y-1">
                  {s.specs.map((sp) => (
                    <li key={sp} className="text-xs text-muted-foreground">{sp}</li>
                  ))}
                </ul>
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
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease }}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-white">{row.stage}</td>
                    <td className="py-3 px-4 text-white/90">{row.task}</td>
                    {row.months.map((active, mi) => (
                      <td key={mi} className="py-3 px-2 text-center">
                        {active ? (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.06 + mi * 0.04, ease }}
                            className="w-6 h-2 rounded-full mx-auto origin-left bg-white"
                          />
                        ) : null}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center mt-6 text-white/50">
            Implementación en 6 meses — Modelo ON-CLOUD con Microsoft Azure
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default BenefitsAndInfra;
