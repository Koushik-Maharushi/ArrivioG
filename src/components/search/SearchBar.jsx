import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../common/Button';

const SearchBar = ({ onSearch, className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40" size={20} />
          <input
            type="text"
            placeholder="Search by city, neighborhood, or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-warmSand bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forestGreen focus:border-forestGreen transition-all duration-200"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
