import logo from "@/assets/logo.png";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Primo Safo" className="mb-4 h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Sua plataforma confiável para encontrar as melhores ferramentas e materiais de reforma.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Categorias</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Ferramentas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Elétrica</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hidráulica</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tintas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pisos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Guias Como Fazer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comparativos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclosure de Afiliados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Primo Safo. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este site contém links de afiliados. Podemos receber comissão por compras realizadas através desses links.
          </p>
        </div>
      </div>
    </footer>
  );
};
