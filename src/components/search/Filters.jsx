import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

const Filters = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    furnished: false,
    parking: false,
    wifi: false,
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-warmSand/50 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-charcoal hover:text-forestGreen transition-colors"
      >
        <span className="font-medium flex items-center gap-2">
          <SlidersHorizontal size={20} />
          Filters
        </span>
        <span className="text-charcoal/60">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4 pt-4 border-t border-warmSand/50">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-earthBrown mb-2">
              Price Range (€/month)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                className="w-full box-border min-w-0 px-3 py-2 rounded-lg border-2 border-warmSand bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forestGreen focus:border-forestGreen transition-all duration-200"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                className="w-full box-border min-w-0 px-3 py-2 rounded-lg border-2 border-warmSand bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forestGreen focus:border-forestGreen transition-all duration-200"
              />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm font-medium text-earthBrown mb-2">
              Amenities
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-charcoal cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.furnished}
                  onChange={(e) => handleFilterChange('furnished', e.target.checked)}
                  className="w-4 h-4 text-forestGreen border-warmSand rounded focus:ring-forestGreen"
                />
                <span>Furnished</span>
              </label>
              <label className="flex items-center gap-2 text-charcoal cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.parking}
                  onChange={(e) => handleFilterChange('parking', e.target.checked)}
                  className="w-4 h-4 text-forestGreen border-warmSand rounded focus:ring-forestGreen"
                />
                <span>Parking</span>
              </label>
              <label className="flex items-center gap-2 text-charcoal cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.wifi}
                  onChange={(e) => handleFilterChange('wifi', e.target.checked)}
                  className="w-4 h-4 text-forestGreen border-warmSand rounded focus:ring-forestGreen"
                />
                <span>WiFi Included</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
