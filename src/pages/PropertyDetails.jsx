import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Wifi, Car, Home, CheckCircle, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const PropertyDetails = () => {
  const { id } = useParams();

  // Mock data - in real app, this would come from an API
  const property = {
    id: parseInt(id),
    price: 850,
    location: 'Berlin Mitte, Berlin',
    address: 'Friedrichstraße 123, 10117 Berlin',
    amenities: ['Wifi', 'Furnished', 'Parking'],
    verified: true,
    description: 'Beautiful, move-in ready apartment in the heart of Berlin Mitte. Fully furnished with modern amenities, natural light, and indoor plants. Perfect for professionals relocating to Germany.',
    images: [],
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/search" 
          className="inline-flex items-center gap-2 text-charcoal/70 hover:text-forestGreen transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Search</span>
        </Link>

        {/* Image Gallery */}
        <div className="bg-warmSand rounded-lg h-96 mb-8 flex items-center justify-center">
          <Home className="text-forestGreen/30" size={128} />
        </div>

        {/* Property Info */}
        <div className="bg-white rounded-lg border border-warmSand/50 p-8 mb-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-forestGreen" size={20} />
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-forestGreen">
                  {property.location}
                </h1>
              </div>
              <p className="text-charcoal/70">{property.address}</p>
            </div>
            {property.verified && (
              <div className="mt-4 sm:mt-0 bg-forestGreen text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                <CheckCircle size={16} />
                Verified
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mb-6 pb-6 border-b border-warmSand/50">
            <span className="text-4xl font-heading font-bold text-forestGreen">
              €{property.price}
            </span>
            <span className="text-charcoal/70 ml-2">/month</span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="font-heading font-semibold text-earthBrown text-lg mb-3">
              About This Property
            </h2>
            <p className="text-charcoal/80 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h2 className="font-heading font-semibold text-earthBrown text-lg mb-4">
              Amenities
            </h2>
            <div className="flex flex-wrap gap-4">
              {property.amenities.map((amenity, index) => {
                const icons = {
                  wifi: <Wifi size={20} />,
                  parking: <Car size={20} />,
                  furnished: <Home size={20} />,
                };
                
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-warmSand/50 px-4 py-2 rounded-lg"
                  >
                    {icons[amenity.toLowerCase()] || <Home size={20} />}
                    <span className="text-charcoal font-medium capitalize">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="flex-1">
              Book This Property
            </Button>
            <Button variant="outline" className="flex-1">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
