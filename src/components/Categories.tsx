import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Zap, Droplet, Paintbrush, Grid3x3, ShieldCheck } from "lucide-react";

const categories = [
  {
    name: "Ferramentas",
    icon: Hammer,
    count: "500+ produtos",
    color: "text-primary",
  },
  {
    name: "Elétrica",
    icon: Zap,
    count: "300+ produtos",
    color: "text-accent",
  },
  {
    name: "Hidráulica",
    icon: Droplet,
    count: "250+ produtos",
    color: "text-primary",
  },
  {
    name: "Tintas",
    icon: Paintbrush,
    count: "200+ produtos",
    color: "text-accent",
  },
  {
    name: "Pisos",
    icon: Grid3x3,
    count: "150+ produtos",
    color: "text-primary",
  },
  {
    name: "EPIs",
    icon: ShieldCheck,
    count: "100+ produtos",
    color: "text-accent",
  },
];

export const Categories = () => {
  return (
    <section id="categorias" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore por Categoria
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Encontre exatamente o que precisa navegando por nossas categorias especializadas
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="group cursor-pointer overflow-hidden transition-all hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)]">
                      <Icon className={`h-7 w-7 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
