
import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sample cart data
const sampleCartItems: CartItem[] = [
  {
    id: 1,
    title: 'Minimalist Wooden Chair',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    quantity: 1
  },
  {
    id: 2,
    title: 'Natural Cotton Throw Pillow',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1579656381439-47fdad71406e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    quantity: 2
  }
];

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(sampleCartItems);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;
  
  // Update quantity
  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  
  // Remove item
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Cart drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 max-w-full bg-white shadow-modal z-50 transition-transform duration-400 ease-apple",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="font-medium">Your Cart {cartItems.length > 0 && `(${cartItems.length})`}</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Cart content */}
        <div className="flex flex-col h-[calc(100%-8rem)]">
          {cartItems.length > 0 ? (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 py-3 border-b border-border animate-fade-in">
                    {/* Product image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Product details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.title}</h3>
                      <p className="mt-1 font-medium">${item.price.toFixed(2)}</p>
                      
                      {/* Quantity controls */}
                      <div className="mt-2 flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground transition-colors"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Remove button */}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Summary */}
              <div className="border-t border-border p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t border-border">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  fullWidth 
                  size="lg"
                  iconLeft={<ShoppingBag size={18} />}
                >
                  Checkout
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
              <ShoppingBag size={48} className="text-muted-foreground mb-4" />
              <h3 className="font-medium text-lg mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
