
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom relative z-10">
        {/* Ambient background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="chip mb-6">Introducing Cherish Commerce</span>
          </div>
          
          <h1 className="h1 max-w-4xl mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Shop with purpose, connect with meaning
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Discover thoughtfully curated products that inspire joy and foster connection.
            We're reimagining e-commerce with design and purpose at its core.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Link 
              to="/products" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:gap-3 transition-all button-hover"
            >
              Browse Products <ArrowRight size={18} />
            </Link>
            <Link 
              to="/collections" 
              className="text-foreground px-8 py-3 rounded-full border border-border hover:border-foreground transition-colors button-hover font-medium"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>
      
      {/* Hero image or visual */}
      <div className="mt-16 md:mt-24 w-full max-w-7xl mx-auto px-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-elevation">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Cherish Commerce Collection" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
