import { motion } from "framer-motion";
import procFullface from "@/assets/proc-fullface.jpg";
import procLabial from "@/assets/proc-labial.jpg";
import procOlheiras from "@/assets/proc-olheiras.jpg";
import clinicConsultation from "@/assets/clinic-consultation.jpg";

const galleryImages = [
  { src: procFullface, alt: "Resultado - Harmonização Facial" },
  { src: procLabial, alt: "Resultado - Preenchimento" },
  { src: procOlheiras, alt: "Resultado - Olheiras" },
  { src: clinicConsultation, alt: "Resultado - Consulta" },
];

const Results = () => {
  return (
    <section id="resultados" className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Galeria
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
            Resultados que valorizam sua beleza
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 font-body text-sm text-muted-foreground">
          As imagens são ilustrativas. Resultados podem variar de acordo com cada paciente.
        </p>
      </div>
    </section>
  );
};

export default Results;
