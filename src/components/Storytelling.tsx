import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Storytelling = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Conheça a Dra. Léia
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
              Sobre a Dra. Léia Demétrio
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground font-body leading-relaxed max-w-lg">
              <p>
                Com anos de dedicação à estética avançada, a Dra. Léia Demétrio construiu sua carreira aliando formação técnica de excelência a uma escuta atenta e sensível. Cada paciente é acolhido de forma única, com um olhar cuidadoso sobre suas necessidades e desejos.
              </p>
              <p>
                Especialista em harmonização facial e procedimentos minimamente invasivos, a Dra. Léia busca constantemente atualização em tecnologias de ponta e técnicas inovadoras, participando de congressos e treinamentos nacionais e internacionais.
              </p>
              <p>
                Sua filosofia de trabalho é clara: realçar a beleza natural de cada pessoa com segurança, personalização e resultados que inspiram confiança. A clínica foi pensada para oferecer uma experiência completa — do primeiro contato ao acompanhamento pós-procedimento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="w-full aspect-video bg-accent/40 rounded-2xl flex items-center justify-center overflow-hidden relative group cursor-pointer">
              {/* Replace the src below with a real video or YouTube embed */}
              <div className="absolute inset-0 bg-foreground/5 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play size={28} className="ml-1" />
                </div>
                <span className="font-body text-sm font-medium text-foreground/70">
                  Assista ao vídeo
                </span>
              </div>
            </div>
            <p className="mt-4 text-center font-body text-xs text-muted-foreground/60">
              Vídeo institucional — Clínica Dra. Léia Demétrio
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
