import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
const MAPS_URL = "https://maps.google.com/?q=Rua+Dom+Jaime+C%C3%A2mara+179+Edif%C3%ADcio+Regency+Tower+sala+801+Florian%C3%B3polis+SC";

const Location = () => {
  return (
    <section id="localizacao" className="section-padding bg-card">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Localização
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight mb-8">
              Nossa Clínica
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-foreground leading-relaxed" style={{ fontVariantNumeric: "tabular-nums" }}>
                    Rua Dom Jaime Câmara, 179<br />
                    Edifício Regency Tower, sala 801<br />
                    Centro – Florianópolis – SC<br />
                    CEP 88015-120
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={20} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                <p className="font-body text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>
                  (48) 99861-0013
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={20} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:dra@leiademetrio.com.br" className="font-body text-foreground hover:text-primary transition-colors">
                  dra@leiademetrio.com.br
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-px"
              >
                Falar no WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium hover:bg-accent/80 transition-all duration-300"
              >
                <ExternalLink size={16} />
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden h-80 lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5489!3d-27.5964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ3LjAiUyA0OMKwMzInNTYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
