
import { supabase } from './supabase';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: number;
  isEco?: boolean;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    title: 'Minimalist Wooden Chair',
    price: 249.99,
    description: 'A beautifully crafted minimalist wooden chair made from sustainable oak. Perfect for any modern home or office space.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Furniture',
    isEco: true,
    rating: 4.8
  },
  {
    id: 2,
    title: 'Natural Cotton Throw Pillow',
    price: 39.99,
    description: 'Add comfort and style to your living space with our natural cotton throw pillows. Made from 100% organic cotton.',
    image: 'https://images.unsplash.com/photo-1579656381439-47fdad71406e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: true,
    rating: 4.7
  },
  {
    id: 3,
    title: 'Ceramic Pour-Over Coffee Maker',
    price: 64.99,
    description: 'Brew the perfect cup of coffee with our elegant ceramic pour-over coffee maker. Designed for optimal extraction and flavor.',
    image: 'https://images.unsplash.com/photo-1571489528490-146aeb745b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Kitchen',
    isEco: false,
    rating: 4.9
  },
  {
    id: 4,
    title: 'Handcrafted Ceramic Vase',
    price: 89.99,
    description: 'Each vase is individually handcrafted by skilled artisans, making each piece unique. Perfect for displaying fresh or dried flowers.',
    image: 'https://images.unsplash.com/photo-1612196808214-5991979749a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: true,
    rating: 4.6
  },
  {
    id: 5,
    title: 'Bamboo Toothbrush Set',
    price: 12.99,
    description: 'Eco-friendly alternative to plastic toothbrushes. Made from sustainably harvested bamboo with soft bristles.',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Bathroom',
    isEco: true,
    rating: 4.5
  },
  {
    id: 6,
    title: 'Linen Bedding Set',
    price: 199.99,
    description: 'Luxurious 100% linen bedding set that gets softer with every wash. Includes duvet cover and two pillowcases.',
    image: 'https://images.unsplash.com/photo-1614366559478-edf9d1cc4289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Bedroom',
    isEco: true,
    rating: 4.9
  },
  {
    id: 7,
    title: 'Wall Clock Modern Design',
    price: 59.99,
    description: 'Minimalist wall clock with a sleek design. Silent mechanism ensures no ticking noise.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home Decor',
    isEco: false,
    rating: 4.2
  },
  {
    id: 8,
    title: 'Handmade Soap Set',
    price: 24.99,
    description: 'Artisanal soaps made with natural ingredients and essential oils. Set of four different scents.',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Bathroom',
    isEco: true,
    rating: 4.7
  }
];

export const fetchProducts = async (): Promise<Product[]> => {
  // In a real app, you would fetch from your database
  // const { data, error } = await supabase.from('products').select('*');
  // if (error) throw error;
  // return data;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  // In a real app, you would fetch from your database
  // const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
  // if (error) throw error;
  // return data;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product || null);
    }, 300);
  });
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter((p) => p.category === category);
      resolve(filtered);
    }, 300);
  });
};

export const fetchProductsByCollection = async (collectionId: string): Promise<Product[]> => {
  // Map collection IDs to filter logic
  let filtered: Product[] = [];
  
  switch (collectionId) {
    case 'eco-friendly':
      filtered = products.filter((p) => p.isEco === true);
      break;
    case 'new-arrivals':
      // For demo purposes, just returning a subset
      filtered = products.slice(0, 4);
      break;
    case 'home-office':
      filtered = products.filter((p) => 
        p.category === 'Furniture' || p.category === 'Home Decor');
      break;
    case 'premium':
      filtered = products.filter((p) => p.price > 80);
      break;
    default:
      filtered = products;
  }
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filtered);
    }, 300);
  });
};
