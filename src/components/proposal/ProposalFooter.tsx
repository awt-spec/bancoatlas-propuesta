import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import sysdeLogoSrc from "@/assets/sysde-logo.png";

const ProposalFooter = () => (
  <footer className="py-16" style={{ background: "linear-gradient(145deg, hsl(210 20% 10%), hsl(355 72% 28%))" }}>
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Gracias por su confianza</h3>
        <p className="text-sm text-white/50">Estamos listos para ser su socio tecnológico estratégico</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10"
      >
        <div className="flex items-center gap-3">
          <img src={sysdeLogoSrc} alt="SYSDE" className="h-8 brightness-0 invert" />
          <div>
            <p className="font-semibold text-white">Eduardo Wheelock</p>
            <p className="text-xs text-white/50">Presidente, Sysde Inc.</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a href="tel:+50686570390" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="h-4 w-4" /> +506 8657 0390
          </a>
          <a href="mailto:info@sysde.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="h-4 w-4" /> info@sysde.com
          </a>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default ProposalFooter;
