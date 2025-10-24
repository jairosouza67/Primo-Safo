import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";

const products = [
  {
    name: "Furadeira de Impacto Bosch",
    category: "Ferramentas",
    price: "R$ 289,90",
    rating: 4.8,
    reviews: 1247,
    badge: "Mais Vendido",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
  },
  {
    name: "Tinta Latex Premium Suvinil",
    category: "Tintas",
    price: "R$ 149,90",
    rating: 4.7,
    reviews: 892,
    badge: "Melhor Custo-Benefício",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
  },
  {
    name: "Torneira Monocomando Deca",
    category: "Hidráulica",
    price: "R$ 179,90",
    rating: 4.9,
    reviews: 634,
    badge: "Recomendado",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=300&fit=crop",
  },
  {
    name: "Disjuntor Bipolar 32A Siemens",
    category: "Elétrica",
    price: "R$ 45,90",
    rating: 4.6,
    reviews: 421,
    badge: "Melhor Avaliado",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  },
];

export const FeaturedProducts = () => {
  return (
    <section id="produtos" className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Produtos em Destaque
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Seleção especial dos produtos mais recomendados por nossos especialistas
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.name} className="group overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="mb-2 text-xs font-medium text-muted-foreground">{product.category}</p>
                <CardTitle className="mb-3 text-lg">{product.name}</CardTitle>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} avaliações)</span>
                </div>
                <p className="text-2xl font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="default" className="w-full gap-2">
                  Ver Ofertas
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};
