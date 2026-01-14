import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import Filters from '../components/search/Filters';
import RoomGrid from '../components/listings/RoomGrid';

const Search = () => {
  const location = useLocation();
  const incomingCity = location.state?.location || '';

  const [searchQuery, setSearchQuery] = useState(incomingCity);
  const [filters, setFilters] = useState({});

  // Mock data
  const allRooms = [
    {
      id: 1,
      price: 850,
      location: 'Berlin Mitte, Berlin',
      amenities: ['Wifi', 'Furnished', 'Parking'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      price: 720,
      location: 'Kreuzberg, Berlin',
      amenities: ['Wifi', 'Furnished'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      price: 950,
      location: 'Prenzlauer Berg, Berlin',
      amenities: ['Wifi', 'Furnished', 'Parking'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      price: 1050,
      location: 'Altstadt, Dusseldorf',
      amenities: ['Wifi', 'Furnished', 'Parking'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      price: 890,
      location: 'Innenstadt, Cologne',
      amenities: ['Wifi', 'Furnished'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      price: 1200,
      location: 'Schwabing, Munich',
      amenities: ['Wifi', 'Furnished', 'Parking'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80'
    },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filter Logic
  const filteredRooms = allRooms.filter((room) => {
    // 1. Search Query (City)
    if (searchQuery && !room.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // 2. Price Min
    if (filters.minPrice && room.price < parseInt(filters.minPrice)) return false;
    // 3. Price Max
    if (filters.maxPrice && room.price > parseInt(filters.maxPrice)) return false;
    // 4. Amenities
    if (filters.furnished && !room.amenities.includes('Furnished')) return false;
    if (filters.parking && !room.amenities.includes('Parking')) return false;
    if (filters.wifi && !room.amenities.includes('Wifi')) return false;

    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-softWhite">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-forestGreen mb-2">
            Find Your Home
          </h1>
          <p className="text-charcoal/60 font-body">
            Browse our verified listings in Germany's top cities.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Area: Search & Filters */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* 1. The City Search Dropdown */}
            <div className="w-full">
               <label className="block text-sm font-medium text-earthBrown mb-2">
                  City
               </label>
               <SearchBar 
                  onSearch={handleSearch} 
                  initialValue={incomingCity} 
               />
            </div>

            {/* 2. The Filters Component */}
            <Filters onFilterChange={handleFilterChange} />
          </div>

          {/* Results Area */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-end border-b border-warmSand/50 pb-2">
              <p className="text-charcoal/70 font-body">
                Showing <span className="font-bold text-forestGreen">{filteredRooms.length}</span> {filteredRooms.length === 1 ? 'home' : 'homes'}
                {searchQuery && <span> in <span className="font-bold text-charcoal">{searchQuery}</span></span>}
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