import { motion } from "framer-motion";
import { Layers, Globe, Cpu, Database, Users, Zap } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const SolutionOverview = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Descripción del Producto</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          ¿Qué es SYSDE SAF+?
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          La herramienta financiera de alta tecnología que automatiza e integra de forma eficiente
          los procesos y operaciones de los intermediarios financieros.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Layers, title: "Flexible y Adaptable", desc: "Sistema modular que se adapta a las necesidades del negocio y permite escalar conforme crece la operación." },
          { icon: Globe, title: "Canales Digitales Integrados", desc: "Integración nativa con canales digitales para una experiencia omnicanal completa." },
          { icon: Cpu, title: "APIs y Conectividad", desc: "Core colaborativo de APIs para conectar con sistemas existentes y servicios de terceros." },
          { icon: Zap, title: "Tecnología de Última Generación", desc: "Arquitectura moderna con las mejores prácticas del mercado financiero." },
          { icon: Database, title: "Gestión de Datos Centralizada", desc: "Consolidación de información en una plataforma única para análisis y toma de decisiones." },
          { icon: Users, title: "Orientado al Cliente", desc: "Visión 360° del cliente para optimizar la relación y mejorar el servicio." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center mb-4">
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
