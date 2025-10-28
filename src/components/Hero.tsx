import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Hammer, Wrench, Zap, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Hammer className="h-10 w-10 text-primary animate-pulse" />
            <Wrench className="h-9 w-9 text-accent animate-bounce" />
            <Zap className="h-10 w-10 text-primary animate-pulse" />
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            As Melhores Ferramentas e Materiais para{" "}
            <span className="block mt-2">Sua Reforma</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            Encontre produtos de qualidade, compare preços e aprenda com nossos guias especializados.
            Tudo que você precisa para transformar sua casa em um lar dos sonhos.
          </p>

          <div className="mx-auto max-w-2xl mb-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="O que você está procurando?"
                  className="h-14 pl-12 pr-4 text-base border-2 border-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <Button variant="gradient" size="lg" className="h-14 px-8 shadow-lg hover:shadow-xl transition-shadow">
                Buscar
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sugestões: furadeira, tinta, cimento, torneira, disjuntor
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.8/5 avaliações</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <span>10.000+ produtos</span>
            <div className="w-px h-4 bg-border"></div>
            <span>Entrega rápida</span>
          </div>
        </div>
      </div>

      {/* Decorative elements with unique positioning */}
      <div className="pointer-events-none absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-2xl" />
    </section>
  );
};