'use client';

import React, { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AppliedFilters, type AppliedFilter } from './AppliedFilters';
import { FilterGroup } from './FilterGroup';
import { ColorSwatch } from './ColorSwatch';

type CategoryKey = 'high' | 'low' | 'cantilever';
type AvailabilityKey = 'inStock' | 'withinWeek' | 'oneTwoWeeks';
type ColorKey = 'blue' | 'green' | 'yellow';

const CHECKBOX_CLASS = 'h-[18px] w-[18px] rounded border-gray-300 accent-gray-900';

export const FilterSidebar = () => {
  const [category, setCategory] = useState<Record<CategoryKey, boolean>>({
    high: true,
    low: false,
    cantilever: false,
  });

  const [availability, setAvailability] = useState<Record<AvailabilityKey, boolean>>({
    inStock: true,
    withinWeek: false,
    oneTwoWeeks: false,
  });

  const [colors, setColors] = useState<Record<ColorKey, boolean>>({
    blue: true,
    green: false,
    yellow: false,
  });

  const [heightRange, setHeightRange] = useState({ from: 100, to: 140 });

  const applied = useMemo<AppliedFilter[]>(() => {
    const list: AppliedFilter[] = [];

    if (category.high) list.push({ id: 'cat-high', label: 'High Backrest' });
    if (colors.blue) list.push({ id: 'color-blue', label: 'Blue' });
    if (availability.inStock) list.push({ id: 'avail-stock', label: 'In Stock' });

    list.push({
      id: 'height',
      label: `Backrest from ${heightRange.from} cm to ${heightRange.to} cm`,
    });

    return list;
  }, [category.high, colors.blue, availability.inStock, heightRange.from, heightRange.to]);

  const removeFilter = (id: string) => {
    if (id === 'cat-high') setCategory((p) => ({ ...p, high: false }));
    if (id === 'color-blue') setColors((p) => ({ ...p, blue: false }));
    if (id === 'avail-stock') setAvailability((p) => ({ ...p, inStock: false }));
    if (id === 'height') setHeightRange({ from: 100, to: 140 });
  };

  const clearAll = () => {
    setCategory({ high: false, low: false, cantilever: false });
    setAvailability({ inStock: false, withinWeek: false, oneTwoWeeks: false });
    setColors({ blue: false, green: false, yellow: false });
    setHeightRange({ from: 100, to: 140 });
  };

  return (
    <aside className="hidden md:block w-72 pr-8 border-r border-gray-100">
      {/* Applied filters (se mantiene aparte) */}
      <AppliedFilters
        filters={applied.map((f) => ({ ...f, onRemove: () => removeFilter(f.id) }))}
        onClearAll={clearAll}
      />

      {/* Contenedor único de grupos (como la referencia) */}
      <div className="bg-white border border-gray-100 rounded-sm shadow-[0_1px_0_rgba(0,0,0,0.02)] divide-y divide-gray-100">
        {/* CATEGORY */}
        <FilterGroup
          title="Category"
          onClear={() => setCategory({ high: false, low: false, cantilever: false })}
          footer={
            <button
              type="button"
              className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ChevronDown size={14} />
              Show more
            </button>
          }
        >
          <div className="space-y-4">
            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className={CHECKBOX_CLASS}
                checked={category.high}
                onChange={(e) => setCategory((p) => ({ ...p, high: e.target.checked }))}
              />
              <span>
                High Backrest <span className="text-gray-400">(2)</span>
              </span>
            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className={CHECKBOX_CLASS}
                checked={category.low}
                onChange={(e) => setCategory((p) => ({ ...p, low: e.target.checked }))}
              />
              <span>
                Low Backrest <span className="text-gray-400">(5)</span>
              </span>
            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className={CHECKBOX_CLASS}
                checked={category.cantilever}
                onChange={(e) => setCategory((p) => ({ ...p, cantilever: e.target.checked }))}
              />
              <span>
                Cantilever Base <span className="text-gray-400">(6)</span>
              </span>
            </label>
          </div>
        </FilterGroup>

        {/* COLOR */}
        <FilterGroup
          title="Color"
          onClear={() => setColors({ blue: false, green: false, yellow: false })}
          footer={
            <button
              type="button"
              className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ChevronDown size={14} />
              Show more
            </button>
          }
        >
          <div className="space-y-4">
            <ColorSwatch
              label="Blue"
              count={6}
              colorClassName="bg-blue-400"
              checked={colors.blue}
              onChange={(v) => setColors((p) => ({ ...p, blue: v }))}
            />
            <ColorSwatch
              label="Green"
              count={7}
              colorClassName="bg-green-400"
              checked={colors.green}
              onChange={(v) => setColors((p) => ({ ...p, green: v }))}
            />
            <ColorSwatch
              label="Yellow"
              count={21}
              colorClassName="bg-yellow-300"
              checked={colors.yellow}
              onChange={(v) => setColors((p) => ({ ...p, yellow: v }))}
            />
          </div>
        </FilterGroup>

        {/* AVAILABILITY */}
        <FilterGroup
          title="Availability"
          onClear={() => setAvailability({ inStock: false, withinWeek: false, oneTwoWeeks: false })}
          footer={
            <button
              type="button"
              className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ChevronDown size={14} />
              Show more
            </button>
          }
        >
          <div className="space-y-4">
            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className={CHECKBOX_CLASS}
                checked={availability.inStock}
                onChange={(e) => setAvailability((p) => ({ ...p, inStock: e.target.checked }))}
              />
              <span>
                In Stock <span className="text-gray-400">(21)</span>
              </span>
            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className={CHECKBOX_CLASS}
                checked={availability.withinWeek}
                onChange={(e) => setAvailability((p) => ({ ...p, withinWeek: e.target.checked }))}
              />
              <span>
                Within 1 week <span className="text-gray-400">(9)</span>
              </span>
            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className={CHECKBOX_CLASS}
                checked={availability.oneTwoWeeks}
                onChange={(e) => setAvailability((p) => ({ ...p, oneTwoWeeks: e.target.checked }))}
              />
              <span>
                1 - 2 weeks <span className="text-gray-400">(11)</span>
              </span>
            </label>
          </div>
        </FilterGroup>

        {/* BACKREST HEIGHT */}
        <FilterGroup title="Backrest Height" onClear={() => setHeightRange({ from: 100, to: 140 })}>
          <div className="space-y-4">
            <div className="relative pt-2">
              <div className="h-[2px] bg-gray-200 rounded" />

              <input
                type="range"
                min={80}
                max={160}
                value={heightRange.from}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setHeightRange((p) => ({ ...p, from: Math.min(v, p.to - 1) }));
                }}
                className="absolute left-0 top-0 w-full h-6 -translate-y-1 bg-transparent appearance-none cursor-pointer"
              />

              <input
                type="range"
                min={80}
                max={160}
                value={heightRange.to}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setHeightRange((p) => ({ ...p, to: Math.max(v, p.from + 1) }));
                }}
                className="absolute left-0 top-0 w-full h-6 -translate-y-1 bg-transparent appearance-none cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="border border-gray-100 rounded-sm px-3 py-2">
                <div className="text-[10px] uppercase tracking-wider text-gray-400">From</div>
                <div className="mt-1 flex items-baseline gap-1">
                  <input
                    value={heightRange.from}
                    onChange={(e) =>
                      setHeightRange((p) => ({ ...p, from: Number(e.target.value || 0) }))
                    }
                    className="w-full text-sm text-gray-900 outline-none"
                  />
                  <span className="text-xs text-gray-400">CM</span>
                </div>
              </div>

              <div className="border border-gray-100 rounded-sm px-3 py-2">
                <div className="text-[10px] uppercase tracking-wider text-gray-400">To</div>
                <div className="mt-1 flex items-baseline gap-1">
                  <input
                    value={heightRange.to}
                    onChange={(e) =>
                      setHeightRange((p) => ({ ...p, to: Number(e.target.value || 0) }))
                    }
                    className="w-full text-sm text-gray-900 outline-none"
                  />
                  <span className="text-xs text-gray-400">CM</span>
                </div>
              </div>
            </div>
          </div>
        </FilterGroup>
      </div>
    </aside>
  );
};
