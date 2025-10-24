import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock } from "lucide-react";

const guides = [
  {
    title: "Como Instalar Tomadas e Interruptores",
    category: "Elétrica",
    readTime: "8 min",
    difficulty: "Intermediário",
    image: "https://images.unsplash.com/photo-1621905252472-364160ad49d8?w=600&h=400&fit=crop",
  },
  {
    title: "Guia Completo de Pintura de Paredes",
    category: "Tintas",
    readTime: "12 min",
    difficulty: "Iniciante",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
  },
  {
    title: "Consertando Vazamentos: Passo a Passo",
    category: "Hidráulica",
    readTime: "10 min",
    difficulty: "Intermediário",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
  },
];

export const Guides = () => {
  return (
    <section id="guias" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Guias "Como Fazer"
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Aprenda com nossos tutoriais detalhados e transforme-se em um expert em reformas
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Card key={guide.title} className="group overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge variant="secondary" className="mb-2">
                      {guide.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-4 text-xl">{guide.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{guide.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{guide.difficulty}</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0 text-primary">
                  Ler Guia Completo →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver Todos os Guias
          </Button>
        </div>
      </div>
    </section>
  );
};
