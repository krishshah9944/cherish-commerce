import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';

const CollectionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h1 className="h1 mb-6">Our Collections</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Explore our thoughtfully curated collections, designed to help you discover products that match your style and needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Minimalist Home" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-2xl font-medium mb-2">Minimalist Home</h2>
                  <p className="text-white/80 mb-4">Clean lines and functional elegance for the modern home</p>
                  <Button variant="outline" className="w-fit bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white hover:text-black">
                    Explore Collection
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Eco-Friendly Living" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-2xl font-medium mb-2">Eco-Friendly Living</h2>
                  <p className="text-white/80 mb-4">Sustainable products for an environmentally conscious lifestyle</p>
                  <Button variant="outline" className="w-fit bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white hover:text-black">
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Kitchen Essentials" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-xl font-medium mb-2">Kitchen Essentials</h2>
                  <Button variant="outline" className="w-fit bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white hover:text-black text-sm">
                    Explore
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Home Office" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-xl font-medium mb-2">Home Office</h2>
                  <Button variant="outline" className="w-fit bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white hover:text-black text-sm">
                    Explore
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Bedroom Comfort" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-xl font-medium mb-2">Bedroom Comfort</h2>
                  <Button variant="outline" className="w-fit bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white hover:text-black text-sm">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollectionsPage;
