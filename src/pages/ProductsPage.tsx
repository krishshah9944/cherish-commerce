
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { Sliders, Search, ChevronDown, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample product data
const allProducts = [
  {
    id: 1,
    title: 'Minimalist Wooden Chair',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Furniture',
    isEco: true,
    rating: 4.8
  },
  {
    id: 2,
    title: 'Natural Cotton Throw Pillow',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1579656381439-47fdad71406e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: true,
    rating: 4.7
  },
  {
    id: 3,
    title: 'Ceramic Pour-Over Coffee Maker',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1571489528490-146aeb745b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Kitchen',
    isEco: false,
    rating: 4.9
  },
  {
    id: 4,
    title: 'Handcrafted Ceramic Vase',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1612196808214-5991979749a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: true,
    rating: 4.6
  },
  {
    id: 5,
    title: 'Minimalist Desk Lamp',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Lighting',
    isEco: false,
    rating: 4.5
  },
  {
    id: 6,
    title: 'Organic Cotton Bedding Set',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Bedding',
    isEco: true,
    rating: 4.9
  },
  {
    id: 7,
    title: 'Bamboo Bathroom Set',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Bathroom',
    isEco: true,
    rating: 4.3
  },
  {
    id: 8,
    title: 'Modern Wall Clock',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1581349437898-cebbe9831942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: false,
    rating: 4.7
  }
];

const categories = [...new Set(allProducts.map(p => p.category))];

const ProductsPage = () => {
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 300],
    ecoFriendly: false
  });
  
  // Filter products based on search and filters
  React.useEffect(() => {
    let filtered = allProducts;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }
    
    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );
    
    // Eco-friendly filter
    if (filters.ecoFriendly) {
      filtered = filtered.filter(product => product.isEco);
    }
    
    setProducts(filtered);
  }, [searchTerm, filters]);
  
  // Toggle category filter
  const toggleCategoryFilter = (category: string) => {
    setFilters(prev => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      
      return { ...prev, categories };
    });
  };
  
  // Reset all filters
  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 300],
      ecoFriendly: false
    });
    setSearchTerm('');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header */}
        <div className="bg-secondary/50 py-10">
          <div className="container-custom">
            <h1 className="h2 mb-6">All Products</h1>
            
            {/* Search and filter bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary/30 shadow-soft"
                />
              </div>
              
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="md:hidden flex items-center justify-center h-11 px-4 rounded-lg bg-white shadow-soft gap-2"
              >
                <Sliders size={18} />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="bg-white rounded-xl shadow-card p-5 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Filters</h3>
                  {(filters.categories.length > 0 || filters.ecoFriendly) && (
                    <button 
                      onClick={resetFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Reset
                    </button>
                  )}
                </div>
                
                {/* Categories */}
                <div className="border-t border-border pt-4 pb-2">
                  <h4 className="text-sm font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <div className={cn(
                          "w-5 h-5 border rounded flex items-center justify-center",
                          filters.categories.includes(category) 
                            ? "bg-primary border-primary text-white" 
                            : "border-muted-foreground"
                        )}>
                          {filters.categories.includes(category) && <Check size={14} />}
                        </div>
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="border-t border-border pt-4 pb-2">
                  <h4 className="text-sm font-medium mb-3">Price Range</h4>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={filters.priceRange[1]}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], parseInt(e.target.value)] }))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Eco-friendly */}
                <div className="border-t border-border pt-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className={cn(
                      "w-5 h-5 border rounded flex items-center justify-center",
                      filters.ecoFriendly 
                        ? "bg-primary border-primary text-white" 
                        : "border-muted-foreground"
                    )}>
                      {filters.ecoFriendly && <Check size={14} />}
                    </div>
                    <span 
                      className="text-sm"
                      onClick={() => setFilters(prev => ({ ...prev, ecoFriendly: !prev.ecoFriendly }))}
                    >
                      Eco-friendly only
                    </span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              {/* Results info */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {products.length} {products.length === 1 ? 'product' : 'products'}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground hidden md:inline">Sort by:</span>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-border rounded-lg pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                      <option>Rating</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
              
              {/* Products */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <div 
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${0.05 * (index % 3)}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg mb-4">No products found</p>
                  <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={resetFilters}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Filters Drawer */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300",
            isMobileFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMobileFilterOpen(false)}
        />
        
        <div 
          className={cn(
            "fixed bottom-0 inset-x-0 bg-white rounded-t-2xl shadow-modal z-50 md:hidden transition-transform duration-300 ease-apple",
            isMobileFilterOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="p-4 border-b border-border flex justify-between items-center">
            <h3 className="font-medium">Filters</h3>
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 max-h-[70vh] overflow-y-auto">
            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Category</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center gap-2 cursor-pointer">
                    <div className={cn(
                      "w-5 h-5 border rounded flex items-center justify-center",
                      filters.categories.includes(category) 
                        ? "bg-primary border-primary text-white" 
                        : "border-muted-foreground"
                    )}>
                      {filters.categories.includes(category) && <Check size={14} />}
                    </div>
                    <span 
                      className="text-sm"
                      onClick={() => toggleCategoryFilter(category)}
                    >
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Price Range</h4>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], parseInt(e.target.value)] }))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            {/* Eco-friendly */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className={cn(
                  "w-5 h-5 border rounded flex items-center justify-center",
                  filters.ecoFriendly 
                    ? "bg-primary border-primary text-white" 
                    : "border-muted-foreground"
                )}>
                  {filters.ecoFriendly && <Check size={14} />}
                </div>
                <span 
                  className="text-sm"
                  onClick={() => setFilters(prev => ({ ...prev, ecoFriendly: !prev.ecoFriendly }))}
                >
                  Eco-friendly only
                </span>
              </label>
            </div>
            
            <div className="flex gap-3 pt-4 border-t border-border">
              <button 
                onClick={resetFilters}
                className="flex-1 py-3 border border-border rounded-lg"
              >
                Reset
              </button>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
