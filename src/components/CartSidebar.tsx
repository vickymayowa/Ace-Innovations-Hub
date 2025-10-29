import { useStore } from '@/store/useStore';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export const CartSidebar = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useStore();

  const handleRemove = (productId: number, title: string) => {
    removeFromCart(productId);
    toast.success(`${title} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <ShoppingBag className="h-16 w-16 text-muted-foreground" />
        <p className="text-muted-foreground">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain bg-muted rounded-lg p-2"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                {item.title}
              </h4>
              <p className="text-sm font-bold text-primary mb-2">
                ${item.price.toFixed(2)}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-medium">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 ml-auto text-destructive"
                  onClick={() => handleRemove(item.id, item.title)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-primary">${cartTotal().toFixed(2)}</span>
        </div>

        <Button className="w-full" size="lg">
          Checkout
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleClearCart}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};
