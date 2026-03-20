import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sysdeLogoSrc from "@/assets/sysde-logo.png";

const sections = [
  { label: "Plataforma", href: "#presentacion" },
  { label: "Módulos", href: "#modulos" },
  { label: "Infraestructura", href: "#beneficios" },
  { label: "Visión", href: "#vision" },
  { label: "Inversión", href: "#propuesta" },
];

const ProposalNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(`#${visible[0].target.id}`);
      },
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: [0.2, 0.4, 0.6, 0.8] },
    );
    sections.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6 h-14 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <img
            src={sysdeLogoSrc}
            alt="SYSDE"
            className={`h-7 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </button>
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => {
            const isActive = activeSection === s.href;
            return (
              <button
                key={s.href}
                onClick={() => scrollTo(s.href)}
                className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 ${
                  scrolled
                    ? isActive
                      ? "text-sysde-red bg-sysde-red/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : isActive
                      ? "text-white bg-white/15"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default ProposalNav;
