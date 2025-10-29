import { Product } from '@/store/useStore';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all hover:shadow-lg cursor-pointer">
      <CardHeader 
        className="p-0 aspect-square overflow-hidden bg-muted"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform group-hover:scale-105"
        />
      </CardHeader>
      
      <CardContent className="flex-1 p-4" onClick={() => onViewDetails(product)}>
        <Badge variant="secondary" className="mb-2">
          {product.category}
        </Badge>
        <h3 className="font-semibold line-clamp-2 mb-2 min-h-[3rem]">
          {product.title}
        </h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span>{product.rating.rate}</span>
          <span className="text-xs">({product.rating.count})</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-2">
        <span className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </span>
        <Button 
          onClick={handleAddToCart}
          size="sm"
          className="gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};
