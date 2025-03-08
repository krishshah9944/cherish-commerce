
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { fetchProducts, fetchProductsByCategory, fetchProductsByCollection, Product } from '@/lib/api';
import { Filter, ArrowDownUp, CheckCircle2 } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const category = searchParams.get('category');
  const collection = searchParams.get('collection');
  const pageTitle = category ? `${category} Products` : 
                   collection ? `${collection.split('-').map(word => 
                     word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Collection` : 
                   'All Products';
  
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let data: Product[];
        
        if (category) {
          data = await fetchProductsByCategory(category);
        } else if (collection) {
          data = await fetchProductsByCollection(collection);
        } else {
          data = await fetchProducts();
        }
        
        // Apply sorting
        const sortedData = sortProducts(data, sortBy);
        setProducts(sortedData);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, [category, collection, sortBy]);
  
  const sortProducts = (products: Product[], sortBy: string) => {
    const productsCopy = [...products];
    
    switch (sortBy) {
      case 'price-asc':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return productsCopy.sort((a, b) => b.price - a.price);
      default:
        return productsCopy;
    }
  };
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const filteredProducts = products.filter(product => {
    // If no filters are active, show all products
    if (activeFilters.length === 0) {
      return true;
    }
    
    // Check if product matches any active filter
    if (activeFilters.includes('eco-friendly') && !product.isEco) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Page header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip mb-4">Shop</span>
            <h1 className="h1 mb-4">{pageTitle}</h1>
            <p className="text-muted-foreground text-lg">
              Explore our curated selection of high-quality products designed to enhance your lifestyle.
            </p>
          </div>
          
          {/* Filters and sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Filter:</span>
              <button 
                onClick={() => toggleFilter('eco-friendly')} 
                className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                  activeFilters.includes('eco-friendly') 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'border-border hover:border-foreground'
                }`}
              >
                Eco-Friendly
                {activeFilters.includes('eco-friendly') && (
                  <CheckCircle2 size={14} className="ml-1 inline-block" />
                )}
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowDownUp size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Sort:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-sm px-3 py-1 rounded-full border border-border focus:border-primary focus:outline-none"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Products grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <div className="aspect-square bg-secondary animate-pulse" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-secondary rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-secondary rounded animate-pulse w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.05 * (index % 4)}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">Try changing your filters or check back later.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
