import { motion } from "framer-motion";
import heroDesktop from "@/assets/hero-desktop.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";

const WHATSAPP_URL = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container-site w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.1] tracking-[-0.04em]">
              Sua melhor versão com naturalidade e sofisticação
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-body max-w-lg leading-relaxed">
              Procedimentos estéticos avançados com tecnologia moderna, atendimento personalizado e foco em resultados naturais.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-px"
              >
                Agendar Avaliação
              </a>
              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium hover:bg-accent/80 transition-all duration-300"
              >
                Ver Procedimentos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 md:order-2"
          >
            {/* Desktop image */}
            <img
              src={heroDesktop}
              alt="Instituto Dra. Léia Demétrio - Clínica de Estética Premium"
              className="hidden md:block w-full aspect-[4/5] object-cover rounded-3xl"
            />
            {/* Mobile image */}
            <img
              src={heroMobile}
              alt="Instituto Dra. Léia Demétrio - Clínica de Estética Premium"
              className="block md:hidden w-full aspect-square object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
