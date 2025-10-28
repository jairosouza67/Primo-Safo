import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Zap, Droplet, Paintbrush, Grid3x3, ShieldCheck } from "lucide-react";

const categories = [
  {
    name: "Ferramentas",
    icon: Hammer,
    count: "500+ produtos",
    color: "text-primary",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    name: "Elétrica",
    icon: Zap,
    count: "300+ produtos",
    color: "text-accent",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    name: "Hidráulica",
    icon: Droplet,
    count: "250+ produtos",
    color: "text-primary",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    name: "Tintas",
    icon: Paintbrush,
    count: "200+ produtos",
    color: "text-accent",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    name: "Pisos",
    icon: Grid3x3,
    count: "150+ produtos",
    color: "text-primary",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    name: "EPIs",
    icon: ShieldCheck,
    count: "100+ produtos",
    color: "text-accent",
    gradient: "from-accent/10 to-accent/5",
  },
];

export const Categories = () => {
  return (
    <section id="categorias" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore por Categoria
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Encontre exatamente o que precisa navegando por nossas categorias especializadas, com produtos selecionados para profissionais e DIY.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br ${category.gradient} relative`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-white/80 shadow-lg group-hover:shadow-xl transition-shadow ${category.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count}</p>
                    </div>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-muted-foreground">Clique para explorar</p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};