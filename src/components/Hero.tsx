import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Hammer, Wrench, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Hammer className="h-8 w-8 text-primary" />
            <Wrench className="h-7 w-7 text-accent" />
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            As Melhores Ferramentas e Materiais para{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              Sua Reforma
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Encontre produtos de qualidade, compare preços e aprenda com nossos guias especializados.
            Tudo que você precisa para transformar sua casa.
          </p>

          <div className="mx-auto max-w-2xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="O que você está procurando?"
                  className="h-14 pl-12 pr-4 text-base"
                />
              </div>
              <Button variant="gradient" size="lg" className="h-14 px-8">
                Buscar
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sugestões: furadeira, tinta, cimento, torneira, disjuntor
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
    </section>
  );
};
