import { motion } from "framer-motion";
import { Users, Building, Wrench, FileText, HeadphonesIcon, Cloud, Server, Database, HardDrive, Wifi } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const BenefitsAndInfra = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container px-6 max-w-5xl">
      {/* Unlimited Service Model */}
      <motion.div {...fade} className="text-center mb-14">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Modelo de Servicio</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Servicio Ilimitado SYSDE
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Lo que nos diferencia: todo incluido, sin sorpresas.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          { icon: Users, title: "Usuarios Ilimitados", desc: "Sin restricción de cantidad de usuarios. Crezca sin costos adicionales por licencia." },
          { icon: Building, title: "Agencias Ilimitadas", desc: "Agregue sucursales sin incrementos. Las 27 agencias actuales y las futuras están cubiertas." },
          { icon: Wrench, title: "Cambios y Mejoras", desc: "Ajustes funcionales, nuevos productos crediticios y modificaciones operativas sin costo extra." },
          { icon: FileText, title: "Reportes Regulatorios", desc: "Actualizaciones por cambios del BCP, SEPRELAD o cualquier ente regulador paraguayo incluidas." },
          { icon: HeadphonesIcon, title: "Soporte y Capacitación", desc: "Soporte correctivo, evolutivo y capacitación progresiva permanente sin límites." },
          { icon: Cloud, title: "Infraestructura Cloud", desc: "Servidores en Microsoft Azure, respaldos diarios y sitio de contingencia incluidos." },
        ].map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-4 p-6 rounded-2xl border border-border bg-card"
          >
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center flex-shrink-0">
              <b.icon className="h-5 w-5 text-sysde-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <motion.div {...fade} className="mb-20">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">¿Por qué SYSDE SAF+?</h3>
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
              {[
                ["Licenciamiento", "Compra + Mantenimiento", "Suscripción SaaS"],
                ["Usuarios", "Pago por usuario", "ILIMITADOS"],
                ["Agencias / Sucursales", "Pago por agencia", "ILIMITADAS"],
                ["Cambios regulatorios", "Cobro adicional", "INCLUIDOS"],
                ["Mejoras funcionales", "Cobro por hora", "INCLUIDAS"],
                ["Soporte", "Contrato separado", "INCLUIDO"],
                ["Capacitación", "Cobro adicional", "INCLUIDA"],
                ["Infraestructura", "Inversión propia", "Azure incluido"],
                ["Implementación", "6-18 meses", "6 meses"],
              ].map(([concept, traditional, sysde], i) => (
                <tr key={concept} className={`${i % 2 === 0 ? "bg-card" : "bg-muted/30"} border-b border-border last:border-0`}>
                  <td className="py-3 px-5 font-medium text-foreground">{concept}</td>
                  <td className="py-3 px-5 text-center text-muted-foreground">{traditional}</td>
                  <td className="py-3 px-5 text-center font-semibold text-sysde-blue">{sysde}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Infrastructure */}
      <motion.div {...fade}>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Infraestructura ON-CLOUD</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[
            { icon: Server, title: "Servidor de Aplicaciones", specs: ["CPU: 4 cores", "16 GB RAM", "128 GB SSD", "Windows Server 2019"] },
            { icon: Database, title: "Servidor de Base de Datos", specs: ["SQL SaaS — 4 núcleos", "16 GB RAM", "500 GB almacenamiento", "MS SQL 2019"] },
            { icon: HardDrive, title: "Servidor Web / Servicios", specs: ["CPU: 4 cores", "16 GB RAM", "128 GB SSD", "Linux"] },
            { icon: Wifi, title: "Servicios de Red", specs: ["Respaldo diario", "Retención 15 días", "Sitio de Contingencia", "Microsoft Azure"] },
          ].map((s) => (
            <div key={s.title} className="p-5 rounded-xl bg-card border border-border">
              <s.icon className="h-5 w-5 text-sysde-red mb-3" />
              <h4 className="font-semibold text-foreground text-sm mb-3">{s.title}</h4>
              <ul className="space-y-1">
                {s.specs.map((sp) => (
                  <li key={sp} className="text-xs text-muted-foreground">{sp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div {...fade} className="mt-20">
        <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Cronograma de implementación</h3>
        <p className="text-sm text-muted-foreground text-center mb-6">Metodología SYSDE "Agile - Answers"</p>
        <div className="overflow-x-auto rounded-xl bg-gradient-to-br from-muted-foreground/30 to-sysde-red p-[2px]">
          <div className="rounded-xl bg-card p-1">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-muted-foreground/20">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Etapa</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Tareas</th>
                  {[1,2,3,4,5,6].map(m => (
                    <th key={m} className="text-center py-3 px-2 font-semibold text-sysde-red">M{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: "0", task: "Gestión del Proyecto", months: [true, true, true, true, true, true] },
                  { stage: "1", task: "Config. Nube y Entendimiento Negocio", months: [true, true, false, false, false, false] },
                  { stage: "2", task: "Parametrización Base y Ajustes", months: [false, true, true, true, false, false] },
                  { stage: "3", task: "Capacitación Funcional", months: [false, false, false, true, true, false] },
                  { stage: "4", task: "Pruebas Integrales", months: [false, false, false, false, true, false] },
                  { stage: "5", task: "Puesta en Producción", months: [false, false, false, false, false, true] },
                ].map((row, i) => (
                  <tr key={row.stage} className="border-b border-muted-foreground/10">
                    <td className="py-3 px-4 font-mono font-bold text-sysde-red">{row.stage}</td>
                    <td className="py-3 px-4 text-foreground">{row.task}</td>
                    {row.months.map((active, mi) => (
                      <td key={mi} className="py-3 px-2 text-center">
                        {active && (
                          <div className={`w-6 h-2 rounded-full mx-auto ${i % 2 === 0 ? 'bg-sysde-red' : 'bg-muted-foreground/50'}`} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-center mt-4 text-muted-foreground">
          Implementación en 6 meses — Modelo ON-CLOUD con Microsoft Azure
        </p>
      </motion.div>
    </div>
  </section>
);

export default BenefitsAndInfra;
