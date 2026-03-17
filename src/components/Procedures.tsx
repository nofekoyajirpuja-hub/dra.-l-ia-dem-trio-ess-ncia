import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import procBioestimulador from "@/assets/proc-bioestimulador.jpg";
import procErbium from "@/assets/proc-erbium.jpg";
import procFullface from "@/assets/proc-fullface.jpg";
import procLaser from "@/assets/proc-laser.jpg";
import procOlheiras from "@/assets/proc-olheiras.jpg";
import procLabial from "@/assets/proc-labial.jpg";
import procUltrassom from "@/assets/proc-ultrassom.jpg";
import procPerfiloplastia from "@/assets/proc-perfiloplastia.jpg";
import procRinomodelacao from "@/assets/proc-rinomodelacao.jpg";
import procToxina from "@/assets/proc-toxina.jpg";
import procCapilar from "@/assets/proc-capilar.jpg";

const WHATSAPP_URL = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20";

const procedures = [
  {
    title: "Bioestimulador de Colágeno",
    description: "Estimula a produção natural de colágeno, melhorando firmeza, textura e qualidade da pele.",
    image: procBioestimulador,
  },
  {
    title: "Erbium Yag",
    description: "Tecnologia a laser voltada para rejuvenescimento da pele, melhora da textura e aparência mais uniforme.",
    image: procErbium,
  },
  {
    title: "Full Face",
    description: "Planejamento completo de harmonização facial para equilibrar proporções e rejuvenescer a face com naturalidade.",
    image: procFullface,
  },
  {
    title: "Laser's",
    description: "Tecnologias a laser utilizadas para melhorar qualidade da pele, manchas, textura e rejuvenescimento.",
    image: procLaser,
  },
  {
    title: "Perfiloplastia",
    description: "Harmonização do perfil facial com técnicas avançadas para equilibrar queixo, mandíbula e contorno do rosto.",
    image: procPerfiloplastia,
  },
  {
    title: "Preenchimento de Olheiras",
    description: "Procedimento indicado para suavizar olheiras profundas e trazer aspecto mais descansado ao olhar.",
    image: procOlheiras,
  },
  {
    title: "Preenchimento Labial",
    description: "Realce de contorno, hidratação e volume dos lábios com resultado elegante e natural.",
    image: procLabial,
  },
  {
    title: "Rinomodelação",
    description: "Correção e harmonização do nariz sem cirurgia, com preenchimento para suavizar imperfeições e melhorar o perfil.",
    image: procRinomodelacao,
  },
  {
    title: "Toxina Botulínica",
    description: "Tratamento para suavizar linhas de expressão e rugas, proporcionando aspecto rejuvenescido e natural.",
    image: procToxina,
  },
  {
    title: "Tratamento Capilar",
    description: "Protocolos avançados para fortalecimento, restauração e estímulo ao crescimento dos fios.",
    image: procCapilar,
  },
  {
    title: "Ultrassom Microfocado",
    description: "Tecnologia que estimula colágeno e promove firmeza, com efeito lifting sem cirurgia.",
    image: procUltrassom,
  },
];

const Procedures = () => {
  return (
    <section id="procedimentos" className="section-padding bg-card">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Nossos tratamentos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
            Procedimentos em destaque
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc, i) => (
            <motion.div
              key={proc.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-background rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="overflow-hidden">
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {proc.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {proc.description}
                </p>
                <a
                  href={`${WHATSAPP_URL}${encodeURIComponent(proc.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                >
                  Saiba mais <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
