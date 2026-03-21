import { motion } from "framer-motion";
import { Shield, Users, Landmark, Banknote, CreditCard, BookOpen, Building, PiggyBank, Box, FileText } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const modules = [
  { icon: Shield, title: "Seguridad", accent: true },
  { icon: Users, title: "Clientes 360°", accent: false },
  { icon: Landmark, title: "Préstamos", accent: false },
  { icon: Banknote, title: "Cajas", accent: true },
  { icon: CreditCard, title: "Cuentas de Efectivo", accent: false },
  { icon: BookOpen, title: "Contabilidad", accent: true },
  { icon: Building, title: "Bancos / Tesorería", accent: false },
  { icon: PiggyBank, title: "Depósitos a Plazo", accent: true },
  { icon: Box, title: "Activos Fijos", accent: false },
  { icon: FileText, title: "Reportes Regulatorios", accent: true },
  { icon: Globe, title: "Banca por Internet", accent: false },
  { icon: Smartphone, title: "Banca Móvil", accent: true },
];

const regulatoryItems = [
  { title: "Banco Central del Paraguay (BCP)", desc: "Informes de solvencia, liquidez, calce de monedas y estados financieros." },
  { title: "SEPRELAD", desc: "Prevención de lavado de activos: operaciones sospechosas, transacciones en efectivo, KYC." },
  { title: "Superintendencia de Bancos (SIB)", desc: "Central de riesgos, información contable, gobierno corporativo, auditoría." },
  { title: "FATF / GAFI", desc: "Estándares internacionales de prevención de financiamiento del terrorismo." },
];

const ModulesSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3">Alcance</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5" style={{ textWrap: "balance" }}>
          10 módulos core bancarios
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Cobertura completa para la operación integral de Banco Atlas.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.title}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease }}
            whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
            className={`p-5 rounded-2xl border text-center cursor-default group ${
              mod.accent
                ? "border-sysde-red/20 bg-sysde-red/[0.04]"
                : "border-border bg-muted/30"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${
              mod.accent ? "bg-sysde-red/10" : "bg-muted"
            }`}>
              <mod.icon className={`h-6 w-6 ${mod.accent ? "text-sysde-red" : "text-foreground/60"}`} />
            </div>
            <h4 className="text-sm font-semibold text-foreground leading-tight">{mod.title}</h4>
          </motion.div>
        ))}
      </div>

      {/* Regulatory */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="p-8 rounded-2xl border-2 border-sysde-red/25 bg-sysde-red/[0.02]">
          <h3 className="text-xl font-bold text-foreground mb-1 text-center">
            Reportes Regulatorios — Paraguay
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Desarrollo y mantenimiento de todos los reportes regulatorios sin costo adicional.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {regulatoryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-5 rounded-xl bg-background border border-border cursor-default"
              >
                <h4 className="font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-sysde-red font-semibold text-center mt-6">
            ✓ Cualquier nuevo reporte o modificación regulatoria se implementa sin costo adicional
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ModulesSection;
