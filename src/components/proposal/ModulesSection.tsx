import { motion } from "framer-motion";
import { Shield, Users, Landmark, Banknote, CreditCard, BookOpen, Building, PiggyBank, Box, FileText } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const modules = [
  { icon: Shield, title: "Seguridad", color: "text-sysde-red", bg: "bg-sysde-red/10" },
  { icon: Users, title: "Clientes 360°", color: "text-sysde-blue", bg: "bg-sysde-blue/10" },
  { icon: Landmark, title: "Préstamos", color: "text-sysde-blue", bg: "bg-sysde-blue/10" },
  { icon: Banknote, title: "Cajas", color: "text-sysde-red", bg: "bg-sysde-red/10" },
  { icon: CreditCard, title: "Cuentas de Efectivo", color: "text-sysde-blue", bg: "bg-sysde-blue/10" },
  { icon: BookOpen, title: "Contabilidad", color: "text-sysde-red", bg: "bg-sysde-red/10" },
  { icon: Building, title: "Bancos / Tesorería", color: "text-sysde-blue", bg: "bg-sysde-blue/10" },
  { icon: PiggyBank, title: "Depósitos a Plazo", color: "text-sysde-red", bg: "bg-sysde-red/10" },
  { icon: Box, title: "Activos Fijos", color: "text-sysde-blue", bg: "bg-sysde-blue/10" },
  { icon: FileText, title: "Reportes Regulatorios", color: "text-sysde-red", bg: "bg-sysde-red/10" },
];

const ModulesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade()} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Alcance</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Módulos incluidos
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          10 módulos core bancarios completos para la operación integral de Banco Atlas.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="p-5 rounded-2xl border border-border bg-card text-center hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${mod.bg} flex items-center justify-center mx-auto mb-3`}>
              <mod.icon className={`h-6 w-6 ${mod.color}`} />
            </div>
            <h4 className="text-sm font-semibold text-foreground leading-tight">{mod.title}</h4>
          </motion.div>
        ))}
      </div>

      {/* Regulatory Reports */}
      <motion.div {...fade()} className="mb-12">
        <div className="p-8 rounded-2xl border-2 border-sysde-red/20 bg-card">
          <h3 className="text-xl font-bold text-foreground mb-2 text-center">Reportes Regulatorios — Paraguay</h3>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            SYSDE se compromete a desarrollar y mantener actualizados todos los reportes regulatorios exigidos
            por las autoridades paraguayas, sin costo adicional.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Banco Central del Paraguay (BCP)", desc: "Informes de solvencia, liquidez, calce de monedas, estados financieros y demás reportes requeridos." },
              { title: "SEPRELAD", desc: "Reportes de prevención de lavado de activos: operaciones sospechosas, transacciones en efectivo, KYC." },
              { title: "Superintendencia de Bancos (SIB)", desc: "Central de riesgos, información contable, gobierno corporativo, auditoría interna." },
              { title: "FATF / GAFI", desc: "Cumplimiento con estándares internacionales de prevención de financiamiento del terrorismo." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-sysde-red font-medium text-center mt-6">
            Cualquier nuevo reporte o modificación regulatoria se implementa sin costo adicional
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ModulesSection;
