import { motion } from "framer-motion";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicEquipment from "@/assets/clinic-equipment.jpg";
import clinicConsultation from "@/assets/clinic-consultation.jpg";

const ClinicSection = () => {
  return (
    <section id="clinica" className="section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 grid grid-cols-2 gap-4"
          >
            <img
              src={clinicInterior}
              alt="Ambiente da clínica"
              className="w-full aspect-square object-cover rounded-2xl col-span-2"
            />
            <img
              src={clinicEquipment}
              alt="Equipamentos modernos"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
            <img
              src={clinicConsultation}
              alt="Atendimento personalizado"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Nossa estrutura
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
              Cuidado, tecnologia e naturalidade em cada detalhe
            </h2>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed max-w-lg">
              Aliamos conhecimento, técnica e tecnologia para proporcionar tratamentos personalizados, seguros e com acabamento natural.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
