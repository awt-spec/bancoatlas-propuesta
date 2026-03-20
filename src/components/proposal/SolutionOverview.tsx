import { motion } from "framer-motion";
import { Layers, Globe, Cpu, Database, Users, Zap } from "lucide-react";

const items = [
  { icon: Layers, title: "Flexible y Adaptable", desc: "Sistema modular que se adapta a las necesidades del negocio y permite escalar conforme crece la operación." },
  { icon: Globe, title: "Canales Digitales Integrados", desc: "Integración nativa con canales digitales para una experiencia omnicanal completa." },
  { icon: Cpu, title: "APIs y Conectividad", desc: "Core colaborativo de APIs para conectar con sistemas existentes y servicios de terceros." },
  { icon: Zap, title: "Tecnología de Última Generación", desc: "Arquitectura moderna con las mejores prácticas del mercado financiero." },
  { icon: Database, title: "Gestión de Datos Centralizada", desc: "Consolidación de información en una plataforma única para análisis y toma de decisiones." },
  { icon: Users, title: "Orientado al Cliente", desc: "Visión 360° del cliente para optimizar la relación y mejorar el servicio." },
];

const SolutionOverview = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Descripción del Producto</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4" style={{ textWrap: "balance" }}>
          ¿Qué es SYSDE SAF+?
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ textWrap: "pretty" }}>
          La herramienta financiera de alta tecnología que automatiza e integra de forma eficiente
          los procesos y operaciones de los intermediarios financieros.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)", transition: { duration: 0.25 } }}
            className="p-7 rounded-2xl border border-border bg-card cursor-default group"
          >
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <item.icon className="h-5 w-5 text-sysde-blue" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionOverview;
