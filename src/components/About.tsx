import { motion } from "framer-motion";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicConsultation from "@/assets/clinic-consultation.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Sobre a clínica
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
              Excelência em estética avançada
            </h2>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed max-w-lg">
              A Clínica Dra. Léia Demétrio oferece procedimentos estéticos modernos com foco em segurança, personalização e resultados naturais. Cada atendimento é pensado de forma individual, respeitando as características e os objetivos de cada paciente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={clinicInterior}
              alt="Interior da clínica"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
            <img
              src={clinicConsultation}
              alt="Consulta na clínica"
              className="w-full aspect-[3/4] object-cover rounded-2xl mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
