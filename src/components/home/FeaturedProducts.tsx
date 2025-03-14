
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';

// Sample product data
const featuredProducts = [
  {
    id: 1,
    title: 'Minimalist Wooden Chair',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Furniture',
    isEco: true,
    rating: 4.8,
    description: 'Elegant minimalist wooden chair for your modern home. Comfortable and stylish.'
  },
  {
    id: 2,
    title: 'Natural Cotton Throw Pillow',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1579656381439-47fdad71406e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: true,
    rating: 4.7,
    description: 'Soft, natural cotton throw pillow to add comfort and style to any space.'
  },
  {
    id: 3,
    title: 'Ceramic Pour-Over Coffee Maker',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1571489528490-146aeb745b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Kitchen',
    isEco: false,
    rating: 4.9,
    description: 'Hand-crafted ceramic pour-over coffee maker for the perfect brew every morning.'
  },
  {
    id: 4,
    title: 'Handcrafted Ceramic Vase',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1612196808214-5991979749a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: true,
    rating: 4.6,
    description: 'Beautifully handcrafted ceramic vase to display your favorite flowers or as a standalone piece.'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="chip mb-4">Curated Selection</span>
            <h2 className="h2">Featured Products</h2>
          </div>
          <Link 
            to="/products" 
            className="mt-4 md:mt-0 flex items-center text-sm font-medium gap-1 hover:gap-2 transition-all"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
