
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CartDrawer from '../components/cart/CartDrawer';
import AuthModal from '../components/auth/AuthModal';
import { ShoppingBag, Star, Users, Leaf, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

interface IndexProps {
  user?: any;
}

const Index = ({ user }: IndexProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  // Open cart when clicking cart icon in navbar
  React.useEffect(() => {
    const handleCartClick = () => {
      setIsCartOpen(true);
    };
    
    document.querySelectorAll('[aria-label="Cart"]').forEach(el => {
      el.addEventListener('click', handleCartClick);
    });
    
    return () => {
      document.querySelectorAll('[aria-label="Cart"]').forEach(el => {
        el.removeEventListener('click', handleCartClick);
      });
    };
  }, []);
  
  // Open auth modal when clicking account icon
  React.useEffect(() => {
    const handleAccountClick = () => {
      if (!user) {
        setIsAuthOpen(true);
      }
    };
    
    document.querySelectorAll('[aria-label="Account"]').forEach(el => {
      el.addEventListener('click', handleAccountClick);
    });
    
    return () => {
      document.querySelectorAll('[aria-label="Account"]').forEach(el => {
        el.removeEventListener('click', handleAccountClick);
      });
    };
  }, [user]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Products Section */}
        <FeaturedProducts />
        
        {/* Key Features Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="chip mb-4">What Sets Us Apart</span>
              <h2 className="h2 mb-4">A new kind of shopping experience</h2>
              <p className="text-muted-foreground text-lg">
                We've reimagined e-commerce from the ground up, focusing on what matters most to you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-card flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Curated Selection</h3>
                <p className="text-muted-foreground">
                  Thoughtfully chosen products that meet our high standards for quality and design.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-card flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Star size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Loyalty Program 2.0</h3>
                <p className="text-muted-foreground">
                  Earn points not just from purchases, but from reviews, social shares, and eco-friendly choices.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-card flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Community Wishlist</h3>
                <p className="text-muted-foreground">
                  Vote on products you'd like to see in our store, giving you a voice in our inventory.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-card flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Leaf size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Sustainability Focus</h3>
                <p className="text-muted-foreground">
                  Earn Eco-Points for carbon-neutral purchases and support our environmental initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="chip bg-white/20 text-white mb-4">Join the Community</span>
              <h2 className="h2 mb-6">Start your journey with Cherish Commerce today</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Create an account to enjoy personalized recommendations, track your orders, and earn loyalty points.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
                iconRight={<ArrowRight size={18} />}
                onClick={() => !user && setIsAuthOpen(true)}
              >
                {user ? 'Browse Products' : 'Create an Account'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default Index;
