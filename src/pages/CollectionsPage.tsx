
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Leaf, Sparkles, Coffee, Watch } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'eco-friendly',
    name: 'Eco-Friendly',
    description: 'Products that are sustainable and environmentally conscious.',
    icon: <Leaf className="w-8 h-8 text-primary" />,
    productCount: 42,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    description: 'The latest and greatest products that just landed in our store.',
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    productCount: 28,
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'home-office',
    name: 'Home Office',
    description: 'Everything you need to create a productive workspace at home.',
    icon: <Coffee className="w-8 h-8 text-primary" />,
    productCount: 36,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80',
  },
  {
    id: 'premium',
    name: 'Premium Collection',
    description: 'Luxury items for those who appreciate the finer things in life.',
    icon: <Watch className="w-8 h-8 text-primary" />,
    productCount: 19,
    image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1601&q=80',
  },
];

const CollectionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip mb-4">Browse Collections</span>
            <h1 className="h1 mb-4">Explore Our Curated Collections</h1>
            <p className="text-muted-foreground text-lg">
              Discover thoughtfully organized product collections designed to match your interests and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link 
                key={collection.id} 
                to={`/products?collection=${collection.id}`}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/5 p-8 flex flex-col justify-end">
                    <div className="text-white mb-3 flex items-center">
                      {collection.icon}
                      <h2 className="text-2xl font-medium ml-3">{collection.name}</h2>
                    </div>
                    <p className="text-white/80 mb-4 max-w-md">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">
                        {collection.productCount} products
                      </span>
                      <Button 
                        variant="outline" 
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                      >
                        View Collection
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollectionsPage;
