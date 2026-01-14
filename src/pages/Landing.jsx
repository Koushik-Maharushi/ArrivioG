import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import VisionSection from '../components/landing/VisionSection';
import CommunityBanner from '../components/landing/CommunityBanner';
import JourneySection from '../components/landing/JourneySection';
import WhoWeServeSection from '../components/landing/WhoWeServeSection';
import PricingTiersSection from '../components/landing/PricingTiersSection';
import LocationsSection from '../components/landing/LocationsSection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-softWhite">
      {/* 1. Hero & Vision Section */}
      <HeroSection />
      <VisionSection />

      {/* 2. Community & Journey Section */}
      <CommunityBanner />
      <JourneySection />

      {/* 3. Personas & Pricing Tiers */}
      <WhoWeServeSection />
      <PricingTiersSection />

      {/* 4. Locations & Footer CTA */}
      <LocationsSection />
    </div>
  );
};

export default Landing;
