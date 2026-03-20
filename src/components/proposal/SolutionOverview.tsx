import { motion } from "framer-motion";
import { Layers, Globe, Cpu, Database, Users, Zap } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  { icon: Layers, title: "Flexible y Adaptable", desc: "Sistema modular que se adapta a las necesidades del negocio y escala conforme crece la operación." },
  { icon: Globe, title: "Canales Digitales", desc: "Integración nativa con canales digitales para una experiencia omnicanal completa." },
  { icon: Cpu, title: "APIs y Conectividad", desc: "Core colaborativo de APIs para conectar con sistemas existentes y servicios de terceros." },
  { icon: Zap, title: "Última Generación", desc: "Arquitectura moderna con las mejores prácticas del mercado financiero." },
  { icon: Database, title: "Datos Centralizados", desc: "Consolidación de información en plataforma única para análisis y toma de decisiones." },
  { icon: Users, title: "Orientado al Cliente", desc: "Visión 360° del cliente para optimizar la relación y mejorar el servicio." },
];

const SolutionOverview = () => (
  <section className="py-24 md:py-32 bg-sysde-dark text-white">
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
        <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ textWrap: "pretty" }}>
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
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.04] cursor-default group"
          >
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <item.icon className="h-5 w-5 text-sysde-blue" />
            </div>
            <h3 className="text-base font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionOverview;
