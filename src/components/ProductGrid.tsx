import { useStore } from '@/store/useStore';
import { ProductCard } from './ProductCard';
import { Product } from '@/store/useStore';
import { Loader2 } from 'lucide-react';

interface ProductGridProps {
  onViewDetails: (product: Product) => void;
}

export const ProductGrid = ({ onViewDetails }: ProductGridProps) => {
  const { filteredProducts, loading, error } = useStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-destructive font-semibold mb-2">Error loading products</p>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  const products = filteredProducts();

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
