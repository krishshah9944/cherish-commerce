
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-display text-xl font-medium inline-block mb-6">
              <span className="chip mr-2">Cherish</span>
              <span>Commerce</span>
            </Link>
            <p className="text-muted-foreground mt-4 mb-6 text-sm max-w-xs">
              Creating an emotional connection through thoughtful design and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors button-hover" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors button-hover" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors button-hover" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors button-hover" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-foreground transition-colors">Collections</Link></li>
              <li><Link to="/featured" className="text-muted-foreground hover:text-foreground transition-colors">Featured</Link></li>
              <li><Link to="/eco-friendly" className="text-muted-foreground hover:text-foreground transition-colors">Eco Friendly</Link></li>
              <li><Link to="/new-arrivals" className="text-muted-foreground hover:text-foreground transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/values" className="text-muted-foreground hover:text-foreground transition-colors">Our Values</Link></li>
              <li><Link to="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for updates on new products and exclusive offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-secondary border-none rounded-l-lg h-10 px-4 focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm"
              />
              <button 
                className="bg-primary text-primary-foreground h-10 rounded-r-lg px-3 transition-colors button-hover"
                aria-label="Subscribe"
              >
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cherish Commerce. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
