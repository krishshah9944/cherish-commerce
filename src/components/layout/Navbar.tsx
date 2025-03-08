
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Heart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from '../cart/CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  
  // Get user on initial load
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    
    getUser();
    
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle route change - close mobile menu and cart
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' }
  ];
  
  const handleAccountClick = () => {
    if (user) {
      navigate('/account');
    }
  };
  
  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple',
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-border shadow-soft py-3' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-xl font-medium relative z-10"
          >
            <span className="chip mr-2">Cherish</span>
            <span>Commerce</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  location.pathname === link.path 
                    ? "text-black" 
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="button-hover text-muted-foreground hover:text-foreground"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/wishlist" 
              className="button-hover text-muted-foreground hover:text-foreground"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>
            <button 
              onClick={handleAccountClick}
              className="button-hover text-muted-foreground hover:text-foreground"
              aria-label="Account"
            >
              <User size={20} />
              {user && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              )}
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="button-hover relative text-foreground"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="button-hover relative text-foreground"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="button-hover"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div 
            className={cn(
              "fixed inset-0 bg-white z-40 flex flex-col transition-transform duration-300 ease-apple pt-20 px-6",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xl font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center space-x-8 mt-8">
              <Link to="/wishlist" className="flex items-center">
                <Heart size={20} className="mr-2" />
                <span>Wishlist</span>
              </Link>
              {user ? (
                <Link to="/account" className="flex items-center">
                  <User size={20} className="mr-2" />
                  <span>Account</span>
                </Link>
              ) : (
                <button className="flex items-center" aria-label="Account">
                  <User size={20} className="mr-2" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
            
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              aria-label="Cart"
              className="mt-8 w-full py-3 bg-primary text-primary-foreground rounded-full flex items-center justify-center"
            >
              <ShoppingCart size={20} className="mr-2" />
              <span>View Cart ({totalItems})</span>
            </button>
          </div>
          
          {/* Search Overlay */}
          <div 
            className={cn(
              "fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center transition-opacity duration-300",
              isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground"
              aria-label="Close search"
            >
              <X size={24} />
            </button>
            
            <div className="w-full max-w-2xl px-4">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full bg-secondary h-14 pl-12 pr-4 rounded-full focus:outline-none focus:ring-1 focus:ring-primary/20"
                  autoFocus={isSearchOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
