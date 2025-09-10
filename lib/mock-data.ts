import { IProductData } from '@/model/productSchema';

export const sneakers: IProductData[] = [
  {
    name: 'Tredex Runner',
    price: 120.00,
    images: ['https://placehold.co/400x400/gray/white?text=Tredex+Runner'],
    productType: "Sneaker",
    available: true,
  },
  {
    name: 'Tredex Classic',
    price: 85.00,
    images: ['https://placehold.co/400x400/darkgray/white?text=Tredex+Classic'],
    productType: "Sneaker",
    available: true,
  },
  {
    name: 'Tredex Pro',
    price: 150.00,
    images: ['https://placehold.co/400x400/lightgray/black?text=Tredex+Pro'],
    productType: "Sneaker",
    available: true,
  },
  {
    name: 'Tredex Lite',
    price: 95.00,
    images: ['https://placehold.co/400x400/silver/black?text=Tredex+Lite'],
    productType: "Sneaker",
    available: true,
  },
];
