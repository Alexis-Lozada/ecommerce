import React from 'react';

interface ColorSwatchProps {
  label: string;
  count?: number;
  colorClassName: string; // e.g. "bg-blue-400"
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const ColorSwatch = ({
  label,
  count,
  colorClassName,
  checked = false,
  onChange,
}: ColorSwatchProps) => {
  return (
    <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />

      <span
        className={`h-4 w-4 rounded-full border border-gray-200 ${colorClassName} ${
          checked ? 'ring-2 ring-gray-400 ring-offset-2 ring-offset-white' : ''
        }`}
      />

      <span className="flex-1 truncate">
        {label} {typeof count === 'number' ? <span className="text-gray-400">({count})</span> : null}
      </span>
    </label>
  );
};
