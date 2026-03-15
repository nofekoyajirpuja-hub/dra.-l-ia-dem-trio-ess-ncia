import { motion } from "framer-motion";
import { UserCheck, Cpu, Sparkles, ShieldCheck, Building2, HeartHandshake } from "lucide-react";

const items = [
  { icon: UserCheck, title: "Atendimento personalizado", description: "Cada paciente é único e merece atenção individual." },
  { icon: Cpu, title: "Tecnologia moderna", description: "Equipamentos de última geração para os melhores resultados." },
  { icon: Sparkles, title: "Resultados naturais", description: "Realce da sua beleza com harmonia e naturalidade." },
  { icon: ShieldCheck, title: "Procedimentos seguros", description: "Protocolos rigorosos de segurança e qualidade." },
  { icon: Building2, title: "Ambiente sofisticado", description: "Espaço projetado para conforto e bem-estar." },
  { icon: HeartHandshake, title: "Acompanhamento profissional", description: "Suporte completo antes, durante e após o tratamento." },
];

const Differentials = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Diferenciais
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
            Por que escolher a clínica?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-8"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-5">
                <item.icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
