import { ShoppingCart, Search } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CartSidebar } from './CartSidebar';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
  const { searchQuery, setSearchQuery, cartCount } = useStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-black bg-clip-text text-transparent">
            ShopHub
          </h1>
        </div>

        <div className="flex flex-1 items-center gap-4 md:gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount() > 0 && (
                <Badge 
                  className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground"
                >
                  {cartCount()}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <CartSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
