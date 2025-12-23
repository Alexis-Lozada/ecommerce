import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  priceRange: string;
  imageUrl: string;
}

export const ProductCard = ({ name, priceRange, imageUrl }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-sm overflow-hidden border border-gray-100 transition-shadow duration-200 hover:shadow-lg">
      {/* Imagen */}
      <div className="relative w-full aspect-[3/2] bg-[#FAFAFA] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
            No Image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex justify-between items-center gap-3 px-4 py-5 border-t border-gray-100 bg-white">
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-gray-900 leading-tight truncate">
            {name}
          </h3>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
            {priceRange}
          </p>
        </div>

        <button className="shrink-0 h-9 w-9 flex items-center justify-center rounded-sm bg-gray-50 border border-gray-100 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
          <Heart size={16} className="stroke-[1.5]" />
        </button>
      </div>
    </div>
  );
};
