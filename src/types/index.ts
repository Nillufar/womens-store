export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: 'jeans' | 'jackets' | 'dresses' | 'shoes';
  discount?: number;
}

export type Language = 'en' | 'ru' | 'uz';

export interface CartItem extends Product {
  quantity: number;
}
