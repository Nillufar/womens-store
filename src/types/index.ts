export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  category: 'jeans' | 'jackets' | 'dresses' | 'shoes';
  discount?: number;
  rating?: number;
  reviewsCount?: number;
  colors?: { name: string; value?: string }[];
  sizes?: string[];
}

export type Language = 'en' | 'ru' | 'uz';

export interface CartItem extends Product {
  quantity: number;
  cartItemId: string;
  selectedColor?: string;
  selectedSize?: string;
}

export interface ComingSoonProduct {
  id: number;
  name: string;
  description: string;
  approxPrice: number;
  image: string;
  images?: string[];
  category: 'jeans' | 'jackets' | 'dresses' | 'shoes';
  arrivingDays: number;
  rating?: number;
  reviewsCount?: number;
  colors?: { name: string; value?: string }[];
  sizes?: string[];
}
