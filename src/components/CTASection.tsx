import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const CTASection = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
            Agende sua avaliação
          </h2>
          <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed">
            Entre em contato e descubra o tratamento ideal para o seu momento.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-px"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#localizacao"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium hover:bg-accent/80 transition-all duration-300"
            >
              Ver localização
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
