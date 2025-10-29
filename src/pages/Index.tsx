import { useState } from 'react';
import { Header } from '@/components/Header';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/store/useStore';

const Index = () => {
  useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Discover Amazing Products
          </h2>
          <p className="text-muted-foreground">
            Browse our curated collection of quality items
          </p>
        </div>

        <div className="mb-6">
          <CategoryFilter />
        </div>

        <ProductGrid onViewDetails={setSelectedProduct} />
      </main>

      <ProductDetailModal
        product={selectedProduct}
        open={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Index;
