import React from 'react';
import { X } from 'lucide-react';

export type AppliedFilter = {
  id: string;
  label: string;
  onRemove?: () => void;
};

interface AppliedFiltersProps {
  filters: AppliedFilter[];
  onClearAll?: () => void;
}

export const AppliedFilters = ({ filters, onClearAll }: AppliedFiltersProps) => {
  if (!filters?.length) return null;

  return (
    <div className="mb-6">
      <div className="space-y-2">
        {filters.map((f) => (
          <div
            key={f.id}
            className="flex items-center justify-between gap-3 bg-white border border-gray-100 rounded-sm px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          >
            <span className="text-sm text-gray-700 truncate">{f.label}</span>

            {/* X simple, sin caja (como en la imagen) */}
            <button
              type="button"
              onClick={f.onRemove}
              className="shrink-0 p-1 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label={`Remove ${f.label}`}
            >
              <X size={16} className="stroke-[1.5]" />
            </button>
          </div>
        ))}
      </div>

      {/* Botón gris ancho */}
      <button
        type="button"
        onClick={onClearAll}
        className="mt-3 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium py-3 rounded-sm transition-colors"
      >
        Remove All Filters
      </button>
    </div>
  );
};
