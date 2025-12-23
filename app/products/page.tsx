import React from 'react';
import { ProductGrid, type Product } from '@/components/product/ProductGrid';

// Nota: Más adelante moveremos estos componentes a archivos separados en /components
const SidebarPlaceholder = () => (
  <div className="hidden md:block w-64 pr-8 border-r border-gray-100">
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="rounded border-gray-300" /> High Backrest (2)
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="rounded border-gray-300" /> Low Backrest (5)
          </label>
        </div>
      </div>
      {/* Añadiremos más grupos de filtros después */}
    </div>
  </div>
);

export default function ProductsPage() {
  const products: Product[] = [
    { name: 'Accent Chair', priceRange: 'FROM $359 — $999', imageUrl: '/products/chair-1.png' },
    { name: 'High Backrest Chair', priceRange: 'FROM $499 — $1,299', imageUrl: '/products/chair-1.png' },
    { name: 'Minimal Swivel Chair', priceRange: 'FROM $289 — $799', imageUrl: '/products/chair-1.png' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto min-h-screen p-4 md:p-8">
      {/* Contenedor principal con fondo blanco y sombra como en la imagen */}
      <div className="bg-surface shadow-sm rounded-lg overflow-hidden flex flex-col md:flex-row p-6 md:p-10">
        {/* 1. Sidebar de Filtros */}
        <SidebarPlaceholder />

        {/* 2. Área de Contenido Principal */}
        <main className="flex-1 md:pl-10 min-h-screen">
          {/* Cabecera de la lista */}
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-medium text-muted">
              Results: <span className="text-foreground font-bold">21 Variants</span>
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted">Sort by</span>
              <select className="font-bold bg-transparent focus:outline-none">
                <option>Popularity</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </header>

          {/* Grid de Productos */}
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
}
