import React from 'react';
import { X } from 'lucide-react';

interface FilterGroupProps {
  title: string;
  onClear?: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const FilterGroup = ({ title, onClear, children, footer, className = '' }: FilterGroupProps) => {
  return (
    <section className={`px-4 py-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[10px] font-bold tracking-wider uppercase text-gray-900">
          {title}
        </h4>

        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400 hover:text-gray-700 transition-colors leading-none"
          >
            <X size={12} className="text-gray-400 relative -top-[0.5px]" />
            <span className="leading-none">Clear</span>
          </button>
        )}
      </div>

      <div>{children}</div>

      {footer ? <div className="mt-4">{footer}</div> : null}
    </section>
  );
};
