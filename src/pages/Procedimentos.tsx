import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WHATSAPP_URL = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20";

interface Procedure {
  title: string;
  description: string;
}

interface Category {
  title: string;
  description: string;
  procedures: Procedure[];
}

const categories: Category[] = [
  {
    title: "Tecnologias Avançadas",
    description: "Equipamentos de última geração para tratamentos com máxima precisão, segurança e resultados superiores.",
    procedures: [
      {
        title: "Laser CO2 Fracionado",
        description: "Tecnologia a laser para rejuvenescimento profundo, tratamento de cicatrizes, manchas e melhora da textura da pele com resultados progressivos.",
      },
      {
        title: "Laser Erbium Yag",
        description: "Tecnologia a laser voltada para rejuvenescimento da pele, melhora da textura e aparência mais uniforme.",
      },
      {
        title: "Ultrassom Microfocado",
        description: "Tecnologia que estimula colágeno e promove firmeza, com efeito lifting sem cirurgia.",
      },
    ],
  },
  {
    title: "Harmonização Facial e Corporal",
    description: "Procedimentos personalizados para equilibrar proporções, realçar traços e valorizar sua beleza natural.",
    procedures: [
      {
        title: "Preenchimento Labial",
        description: "Realce de contorno, hidratação e volume dos lábios com resultado elegante e natural.",
      },
      {
        title: "Toxina Botulínica",
        description: "Tratamento para suavizar linhas de expressão e rugas, proporcionando aspecto rejuvenescido e natural.",
      },
      {
        title: "Bioestimulador de Colágeno",
        description: "Estimula a produção natural de colágeno, melhorando firmeza, textura e qualidade da pele.",
      },
      {
        title: "Ultrassom Corporal",
        description: "Tecnologia não invasiva para redução de medidas, tratamento de gordura localizada e melhora do contorno corporal.",
      },
    ],
  },
  {
    title: "Estética Regenerativa",
    description: "Tratamentos que utilizam a capacidade regenerativa do próprio organismo para resultados duradouros e naturais.",
    procedures: [
      {
        title: "Tratamento Capilar",
        description: "Protocolos avançados para fortalecimento, restauração e estímulo ao crescimento dos fios.",
      },
      {
        title: "Preenchimento Glúteo com PRP",
        description: "Procedimento regenerativo que utiliza plasma rico em plaquetas para estimular volume e firmeza na região glútea de forma natural.",
      },
    ],
  },
];

const Procedimentos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>
            <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Nossos tratamentos
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight">
              Procedimentos
            </h1>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed max-w-2xl">
              Conheça os tratamentos oferecidos pela Clínica Dra. Léia Demétrio, organizados por especialidade. Cada procedimento é realizado com técnica, segurança e foco em resultados naturais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIndex) => (
        <section
          key={category.title}
          className={`section-padding ${catIndex % 2 === 0 ? "bg-card" : "bg-background"}`}
        >
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                {category.title}
              </h2>
              <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-xl">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.procedures.map((proc, i) => (
                <motion.div
                  key={proc.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-background rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="p-8">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {proc.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
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
      ))}

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              Agende sua avaliação
            </h2>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
              Entre em contato e descubra o tratamento ideal para o seu momento.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5548998610013?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-px"
              >
                Falar no WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium hover:bg-accent/80 transition-all duration-300"
              >
                Voltar ao início
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Procedimentos;
