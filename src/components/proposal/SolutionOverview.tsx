import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Globe, Cpu, Database, Users, Zap, ChevronRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  { icon: Layers, title: "Flexible y Adaptable", desc: "Sistema modular que se adapta a las necesidades del negocio y escala conforme crece la operación.", details: ["Arquitectura microservicios", "Configuración por entidad", "Escalamiento horizontal"] },
  { icon: Globe, title: "Canales Digitales", desc: "Integración nativa con canales digitales para una experiencia omnicanal completa.", details: ["Banca móvil", "Banca web", "APIs abiertas"] },
  { icon: Cpu, title: "APIs y Conectividad", desc: "Core colaborativo de APIs para conectar con sistemas existentes y servicios de terceros.", details: ["REST & SOAP", "Webhooks en tiempo real", "Integración con terceros"] },
  { icon: Zap, title: "Última Generación", desc: "Arquitectura moderna con las mejores prácticas del mercado financiero.", details: ["Cloud native", "Alta disponibilidad 99.9%", "Seguridad bancaria"] },
  { icon: Database, title: "Datos Centralizados", desc: "Consolidación de información en plataforma única para análisis y toma de decisiones.", details: ["Data warehouse integrado", "Reportes en tiempo real", "BI & Analytics"] },
  { icon: Users, title: "Orientado al Cliente", desc: "Visión 360° del cliente para optimizar la relación y mejorar el servicio.", details: ["CRM integrado", "Scoring crediticio", "Gestión de campañas"] },
];

const SolutionOverview = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sysde-red mb-3">
            Descripción del Producto
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5" style={{ textWrap: "balance" }}>
            ¿Qué es SYSDE SAF+?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ textWrap: "pretty" }}>
            La herramienta financiera de alta tecnología que automatiza e integra de forma eficiente los procesos y operaciones de los intermediarios financieros.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="p-6 rounded-2xl border border-border bg-card cursor-pointer group select-none"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-5 w-5 text-sysde-red" />
                </div>
                <motion.div
                  animate={{ rotate: expanded === i ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </div>
              <h3 className="text-base font-semibold mb-1 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              <AnimatePresence>
                {expanded === i && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="overflow-hidden mt-4 pt-4 border-t border-white/15 space-y-2"
                  >
                    {item.details.map((d, di) => (
                      <motion.li
                        key={d}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: di * 0.06, duration: 0.3 }}
                        className="text-xs text-white/70 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                        {d}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;