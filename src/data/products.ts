import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: "p001",
    name: "Mercury Utility Jacket",
    category: "Apparel",
    price: 89,
    stock: 12,
    imageUrl: "https://placehold.co/600x400",
    featured: true,
  },
  {
    id: "p002",
    name: "Mercury Cargo Pant",
    category: "Apparel",
    price: 80,
    stock: 18,
    imageUrl: "https://placehold.co/600x400",
    featured: false,
  },
  {
    id: "p003",
    name: "Orbit Desk Lamp",
    category: "Home",
    price: 65,
    stock: 8,
    imageUrl: "https://placehold.co/600x400",
    featured: false,
  },
  {
    id: "p004",
    name: "Signal Field Notebook",
    category: "Office",
    price: 10,
    stock: 30,
    imageUrl: "https://placehold.co/600x400",
    featured: false,
  },
];