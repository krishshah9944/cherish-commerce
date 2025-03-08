import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/api';

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  
  return (
    <div 
      className="group relative rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-card hover:shadow-elevation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
        />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="chip bg-white text-foreground shadow-soft">
            {product.category}
          </span>
        </div>
        
        {/* Eco Badge */}
        {product.isEco && (
          <div className="absolute top-4 right-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4CAF50]/90 text-white shadow-soft" title="Eco-friendly product">
              <Leaf size={16} />
            </span>
          </div>
        )}
        
        {/* Quick actions */}
        <div 
          className={cn(
            "absolute bottom-0 inset-x-0 flex items-center justify-center gap-2 p-4 bg-gradient-to-t from-black/50 to-transparent transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <button 
            className="w-full py-2.5 bg-white text-foreground rounded-lg flex items-center justify-center gap-2 font-medium shadow-soft hover:bg-primary hover:text-primary-foreground transition-colors button-hover"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </Link>
      
      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/product/${product.id}`} className="block">
              <h3 className="font-medium text-base hover:text-primary transition-colors">
                {product.title}
              </h3>
            </Link>
            <p className="mt-1 font-medium">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full transition-colors button-hover",
              isWishlisted 
                ? "text-[#F44336] bg-[#F44336]/10" 
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={18} fill={isWishlisted ? "#F44336" : "none"} />
          </button>
        </div>
        
        {/* Rating display */}
        {product.rating && (
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating!) ? "text-yellow-400" : "text-gray-300"}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1.5 text-xs text-muted-foreground">
              {product.rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
