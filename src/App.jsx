import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationSection from './components/DestinationSection';
import PropertyGrid from './components/PropertyGrid';
import FeaturedExperience from './components/FeaturedExperience';
import UniqueStays from './components/UniqueStays';
import WhyNestora from './components/WhyNestora';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import BookingModal from './components/BookingModal';
import WishlistDrawer from './components/WishlistDrawer';
import HostPropertyModal from './components/HostPropertyModal';
import FilterModal from './components/FilterModal';
import AIConciergeModal from './components/AIConciergeModal';

import { properties as allProperties } from './data/properties';
import { Map, List, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Advanced Filters State
  const [filters, setFilters] = useState({
    maxPrice: 50000,
    minBedrooms: 0,
    amenities: []
  });

  // Display Settings
  const [currency, setCurrency] = useState('INR');
  const [showTaxes, setShowTaxes] = useState(false);
  const [isMapView, setIsMapView] = useState(false);

  // Modals & Drawers State
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeReservation, setActiveReservation] = useState(null);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [aiConciergeOpen, setAiConciergeOpen] = useState(false);

  // Favorites / Wishlist State
  const [favorites, setFavorites] = useState(['ocean-glass-villa', 'cliffside-azure-house']);

  // Toggle favorite
  const handleToggleFavorite = (propertyId) => {
    setFavorites((prev) => 
      prev.includes(propertyId) 
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  // Filter properties logic
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // 1. Category Filter
      if (selectedCategory !== 'All') {
        const matchesCategory = property.category.toLowerCase() === selectedCategory.toLowerCase() ||
          (property.categories && property.categories.some(c => c.toLowerCase() === selectedCategory.toLowerCase()));
        if (!matchesCategory) return false;
      }

      // 2. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery = 
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.country.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // 3. Max Price Filter
      if (property.price > filters.maxPrice) return false;

      // 4. Bedrooms Filter
      if (filters.minBedrooms > 0 && property.bedrooms < filters.minBedrooms) return false;

      // 5. Amenities Filter
      if (filters.amenities && filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every((req) => 
          property.amenities.some(a => a.toLowerCase().includes(req.toLowerCase()))
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, filters]);

  // Scroll to discovery section
  const scrollToStays = () => {
    const staysSection = document.getElementById('stays');
    if (staysSection) {
      staysSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Search Execution from Hero
  const handlePerformSearch = () => {
    scrollToStays();
  };

  // Handle Destination Select
  const handleSelectDestination = (destName) => {
    setSearchQuery(destName);
    scrollToStays();
  };

  // Handle Unique Stay Type Select
  const handleSelectType = (typeName) => {
    if (typeName.includes('Beach')) setSelectedCategory('Beach');
    else if (typeName.includes('Mountain')) setSelectedCategory('Mountains');
    else if (typeName.includes('Glass') || typeName.includes('Treehouse') || typeName.includes('Desert') || typeName.includes('Floating')) {
      setSelectedCategory('Unique stays');
    } else {
      setSelectedCategory('All');
    }
    scrollToStays();
  };

  // Handle Clear Filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setFilters({
      maxPrice: 50000,
      minBedrooms: 0,
      amenities: []
    });
  };

  // Favorited properties objects
  const favoritePropertiesList = useMemo(() => {
    return allProperties.filter((p) => favorites.includes(p.id));
  }, [favorites]);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-airbnb/20 selection:text-charcoal font-sans antialiased relative">
      
      {/* Sticky Glass Navbar with authentic Airbnb branding & logo */}
      <Navbar
        onOpenSearch={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        wishlistCount={favorites.length}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenHostModal={() => setHostModalOpen(true)}
        onOpenFilters={() => setFilterModalOpen(true)}
        onOpenAIConcierge={() => setAiConciergeOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
          onPerformSearch={handlePerformSearch}
        />

        {/* Destination Section */}
        <DestinationSection 
          onSelectDestination={handleSelectDestination} 
        />

        {/* Property Discovery Grid with Map View & List View */}
        <PropertyGrid
          properties={filteredProperties}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          onClearFilters={handleClearFilters}
          currency={currency}
          showTaxes={showTaxes}
          setShowTaxes={setShowTaxes}
          onOpenFilters={() => setFilterModalOpen(true)}
          isMapView={isMapView}
          setIsMapView={setIsMapView}
        />

        {/* Featured Editorial Experience */}
        <FeaturedExperience
          onExploreStay={() => {
            const signatureStay = allProperties.find(p => p.id === 'ocean-glass-villa');
            if (signatureStay) setSelectedProperty(signatureStay);
          }}
        />

        {/* Unique Architectural Typologies */}
        <UniqueStays
          onSelectType={handleSelectType}
        />

        {/* Why Airbnb / Values Section */}
        <WhyNestora />

        {/* Guest Testimonials Carousel */}
        <Testimonials />

        {/* Full-Width Visual Call to Action */}
        <CallToAction
          onStartExploring={scrollToStays}
        />
      </main>

      {/* Multi-Column Footer with Airbnb Details */}
      <Footer
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Signature Floating Map / List Toggle Button */}
      <div className="fixed bottom-6 inset-x-0 flex justify-center z-30 pointer-events-none">
        <button
          onClick={() => {
            setIsMapView(!isMapView);
            scrollToStays();
          }}
          className="pointer-events-auto flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-charcoal hover:bg-black text-white text-xs sm:text-sm font-bold shadow-soft-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
        >
          {isMapView ? (
            <>
              <span>Show list</span>
              <List className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Show map</span>
              <Map className="w-4 h-4 text-airbnb" />
            </>
          )}
        </button>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isFavorite={favorites.includes(selectedProperty.id)}
          onToggleFavorite={handleToggleFavorite}
          currency={currency}
          onReserve={(reservationData) => {
            setSelectedProperty(null);
            setActiveReservation(reservationData);
          }}
        />
      )}

      {/* Instant Reservation Confirmation Pass */}
      {activeReservation && (
        <BookingModal
          reservation={activeReservation}
          onClose={() => setActiveReservation(null)}
        />
      )}

      {/* Wishlist Side Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        favoriteProperties={favoritePropertiesList}
        onRemoveFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onClearAll={() => setFavorites([])}
        currency={currency}
      />

      {/* Host Onboarding Modal ("Airbnb your home") */}
      <HostPropertyModal
        isOpen={hostModalOpen}
        onClose={() => setHostModalOpen(false)}
      />

      {/* Advanced Filters Modal */}
      <FilterModal
        isOpen={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        filters={filters}
        onApplyFilters={(newFilters) => setFilters(newFilters)}
        currency={currency}
      />

      {/* New Additional Feature: AI Stay Concierge Modal */}
      <AIConciergeModal
        isOpen={aiConciergeOpen}
        onClose={() => setAiConciergeOpen(false)}
        properties={allProperties}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        currency={currency}
      />

    </div>
  );
}
