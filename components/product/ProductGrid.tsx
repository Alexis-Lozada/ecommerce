import React from 'react';
import { ProductCard } from '@/components/product/ProductCard';

export interface Product {
  name: string;
  priceRange: string;
  imageUrl: string;
}

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export const ProductGrid = ({ products, className = '' }: ProductGridProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 ${className}`}>
      {products.map((p, idx) => (
        <ProductCard
          key={`${p.name}-${idx}`}
          name={p.name}
          priceRange={p.priceRange}
          imageUrl={p.imageUrl}
        />
      ))}
    </div>
  );
};
