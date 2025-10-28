import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, User, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <img src={logo} alt="Primo Safo" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#categorias" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
              Categorias
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#produtos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
              Produtos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#guias" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
              Guias
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="pl-10 w-[300px] border-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden hover:bg-primary/10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="hover:bg-primary/10 border-primary/20">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};