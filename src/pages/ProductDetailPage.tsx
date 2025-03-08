
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { fetchProductById, Product, fetchProducts } from '@/lib/api';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, ShoppingCart, Heart, Truck, RefreshCw, Shield, Leaf } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        if (!id) return;
        const productData = await fetchProductById(Number(id));
        setProduct(productData);
        
        // Load related products
        const allProducts = await fetchProducts();
        const related = allProducts
          .filter(p => p.id !== Number(id) && p.category === productData?.category)
          .slice(0, 4);
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error loading product:', error);
        navigate('/products');
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-secondary animate-pulse rounded-2xl" />
                <div className="space-y-4">
                  <div className="h-8 bg-secondary rounded animate-pulse w-3/4" />
                  <div className="h-6 bg-secondary rounded animate-pulse w-1/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-secondary rounded animate-pulse" />
                    <div className="h-4 bg-secondary rounded animate-pulse" />
                    <div className="h-4 bg-secondary rounded animate-pulse w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return null;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Back button */}
            <Link 
              to="/products" 
              className="inline-flex items-center text-sm font-medium hover:text-primary mb-8"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Products
            </Link>
            
            {/* Product details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product image */}
              <div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product info */}
              <div className="space-y-6">
                <div>
                  {product.isEco && (
                    <div className="inline-flex items-center text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full mb-4">
                      <Leaf size={16} className="mr-1.5" /> Eco-Friendly Product
                    </div>
                  )}
                  <h1 className="text-3xl font-medium mb-2">{product.title}</h1>
                  <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
                </div>
                
                <p className="text-muted-foreground">{product.description}</p>
                
                {/* Add to cart section */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <button 
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-border"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(q => q + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-border"
                      >
                        +
                      </button>
                    </div>
                    
                    <Button 
                      onClick={handleAddToCart}
                      size="lg"
                      iconLeft={<ShoppingCart size={18} />}
                    >
                      Add to Cart
                    </Button>
                    
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-foreground transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>
                  
                  {/* Product features */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Truck size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Free Shipping</h4>
                        <p className="text-sm text-muted-foreground">Orders over $100</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <RefreshCw size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Easy Returns</h4>
                        <p className="text-sm text-muted-foreground">30-day return policy</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Shield size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Secure Payment</h4>
                        <p className="text-sm text-muted-foreground">Protected by Stripe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related products */}
            {relatedProducts.length > 0 && (
              <div className="mt-24">
                <h2 className="text-2xl font-medium mb-8">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
