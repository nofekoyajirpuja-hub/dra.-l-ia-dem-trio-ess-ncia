import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-semibold text-background mb-4">
              Dra. Léia Demétrio
            </h3>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Instituto de estética avançada especializado em harmonização facial e procedimentos com resultados naturais.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background mb-4 uppercase tracking-wider">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              {["Início", "Sobre", "Procedimentos", "Resultados", "Localização", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="font-body text-sm text-background/60 hover:text-background transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-2 font-body text-sm text-background/60" style={{ fontVariantNumeric: "tabular-nums" }}>
              <p>Rua Dom Jaime Câmara, 179 – sala 801</p>
              <p>Centro – Florianópolis – SC</p>
              <p>(48) 99861-0013</p>
              <p>dra@leiademetrio.com.br</p>
              <p className="pt-2 text-xs">CNPJ: 48.766.899/0001-84</p>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(247, 243, 239, 0.1)" }}>
          <p className="font-body text-xs text-background/40 text-center">
            © {new Date().getFullYear()} Instituto Dra. Léia Demétrio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
