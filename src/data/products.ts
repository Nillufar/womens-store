import { Product } from '../types';

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Classic Blue Jeans',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
    category: 'jeans',
  },
  {
    id: 2,
    name: 'Leather Jacket',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
    category: 'jackets',
  },
  {
    id: 3,
    name: 'Summer Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    category: 'dresses',
  },
  {
    id: 4,
    name: 'High Heels',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop',
    category: 'shoes',
  },
  {
    id: 5,
    name: 'Slim Fit Jeans',
    price: 94.99,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebaf8e0d3f?w=400&h=500&fit=crop',
    category: 'jeans',
  },
  {
    id: 6,
    name: 'Denim Jacket',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
    category: 'jackets',
  },
  {
    id: 7,
    name: 'Evening Dress',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1566479179817-2781b3b8b0c1?w=400&h=500&fit=crop',
    category: 'dresses',
  },
  {
    id: 8,
    name: 'Sneakers',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
    category: 'shoes',
  },
];

export const saleProducts: Product[] = [
  {
    id: 9,
    name: 'Designer Jacket',
    price: 174.99,
    oldPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
    category: 'jackets',
    discount: 30,
  },
  {
    id: 10,
    name: 'Elegant Dress',
    price: 77.99,
    oldPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    category: 'dresses',
    discount: 40,
  },
  {
    id: 11,
    name: 'Designer Heels',
    price: 134.99,
    oldPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop',
    category: 'shoes',
    discount: 25,
  },
];
