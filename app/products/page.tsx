import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ProductGrid, type Product } from '@/components/product/ProductGrid';
import { FilterSidebar } from '@/components/filter/FilterSidebar';

export default function ProductsPage() {
  const products: Product[] = [
    { name: 'Accent Chair', priceRange: 'FROM $359 — $999', imageUrl: '/products/chair-1.png' },
    { name: 'High Backrest Chair', priceRange: 'FROM $499 — $1,299', imageUrl: '/products/chair-1.png' },
    { name: 'Minimal Swivel Chair', priceRange: 'FROM $289 — $799', imageUrl: '/products/chair-1.png' },
  ];

  return (
    <div className="min-h-screen px-4 md:px-10 py-6 md:py-10">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar real */}
        <FilterSidebar />

        {/* Área de Contenido Principal */}
        <main className="flex-1 md:pl-10">
          {/* Cabecera */}
          <header className="flex items-start justify-between mb-10">
            <p className="text-sm text-gray-500">
              Results: <span>21 Variants</span>
            </p>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>Sort by</span>
              <button type="button" className="inline-flex items-center gap-2 text-gray-900">
                Popularity
                <ChevronDown size={16} className="text-gray-900" />
              </button>
            </div>
          </header>

          {/* Grid de Productos */}
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
}
