import React, { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import Filters from '../components/search/Filters';
import RoomGrid from '../components/listings/RoomGrid';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  // Mock data - in real app, this would come from an API
  const allRooms = [
    {
      id: 1,
      price: 850,
      location: 'Berlin Mitte, Berlin',
      amenities: ['Wifi', 'Furnished', 'Parking'],
      verified: true,
    },
    {
      id: 2,
      price: 720,
      location: 'Kreuzberg, Berlin',
      amenities: ['Wifi', 'Furnished'],
      verified: true,
    },
    {
      id: 3,
      price: 950,
      location: 'Prenzlauer Berg, Berlin',
      amenities: ['Wifi', 'Furnished', 'Parking'],
      verified: true,
    },
    {
      id: 4,
      price: 680,
      location: 'Neukölln, Berlin',
      amenities: ['Wifi', 'Furnished'],
      verified: true,
    },
    {
      id: 5,
      price: 920,
      location: 'Charlottenburg, Berlin',
      amenities: ['Wifi', 'Furnished', 'Parking'],
      verified: true,
    },
    {
      id: 6,
      price: 780,
      location: 'Friedrichshain, Berlin',
      amenities: ['Wifi', 'Furnished'],
      verified: true,
    },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filter rooms based on search and filters
  const filteredRooms = allRooms.filter((room) => {
    // Search filter
    if (searchQuery && !room.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Price filters
    if (filters.minPrice && room.price < parseInt(filters.minPrice)) {
      return false;
    }
    if (filters.maxPrice && room.price > parseInt(filters.maxPrice)) {
      return false;
    }

    // Amenity filters
    if (filters.furnished && !room.amenities.includes('Furnished')) {
      return false;
    }
    if (filters.parking && !room.amenities.includes('Parking')) {
      return false;
    }
    if (filters.wifi && !room.amenities.includes('Wifi')) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-forestGreen mb-8">
          Find Your Home
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Filters onFilterChange={handleFilterChange} />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-charcoal/70">
                {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'} found
              </p>
            </div>
            <RoomGrid rooms={filteredRooms} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
