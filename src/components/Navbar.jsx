import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  Globe, 
  Sparkles,
  SlidersHorizontal,
  Home,
  Map
} from 'lucide-react';

export default function Navbar({ 
  onOpenSearch, 
  wishlistCount, 
  onOpenWishlist, 
  onOpenHostModal,
  onOpenFilters,
  onOpenAIConcierge,
  currency,
  setCurrency
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-soft border-b border-stone-200' 
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Authentic Airbnb Logo & Wordmark */}
          <a 
            href="#" 
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Airbnb Homepage"
          >
            {/* The Authentic Bélo Vector Logo */}
            <div className="text-airbnb group-hover:scale-105 transition-transform duration-200">
              <svg 
                width="34" 
                height="34" 
                viewBox="0 0 1007 1080" 
                fill="currentColor"
                className="drop-shadow-xs"
              >
                <path d="M949.278 666.715C875.957 506.859 795.615 344.664 713.713 184.809C698.893 155.177 670.813 98.2527 645.852 67.8412C609.971 24.1733 556.93 0.779785 503.109 0.779785C449.288 0.779785 396.247 24.1733 360.366 67.8412C335.406 98.2527 307.325 155.177 292.505 184.809C210.603 344.664 130.262 506.859 56.9404 666.715C47.5802 687.769 24.9598 737.675 16.3796 760.289C6.23941 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.401 1079.22 235.564 1079.22C346.326 1079.22 434.468 1008.26 503.109 934.18C571.751 1008.26 659.892 1079.22 770.655 1079.22C904.817 1079.22 1006.22 975.509 1006.22 846.845C1006.22 817.213 999.979 787.581 989.839 760.289C981.259 737.675 958.638 687.769 949.278 666.715ZM503.109 810.195C447.728 738.455 396.247 649.56 396.247 577.819C396.247 506.079 446.948 470.209 503.109 470.209C559.27 470.209 610.751 508.419 610.751 577.819C610.751 647.22 558.49 738.455 503.109 810.195ZM770.655 998.902C688.628 998.902 618.271 941.557 555.955 872.656C620.205 792.541 691.093 679.121 691.093 577.819C691.093 458.513 598.271 389.892 503.109 389.892C407.947 389.892 315.906 458.513 315.906 577.819C315.906 679.098 386.294 792.478 450.318 872.593C387.995 941.526 317.614 998.902 235.564 998.902C146.642 998.902 81.1209 931.061 81.1209 846.845C81.1209 826.57 84.241 807.856 91.2611 788.361C98.2812 770.426 120.902 720.52 130.262 701.025C203.583 541.17 282.365 380.534 364.267 220.679C379.087 191.047 404.047 141.921 422.768 119.307C443.048 94.3538 471.129 81.0975 503.109 81.0975C535.09 81.0975 563.17 94.3538 583.451 119.307C602.171 141.921 627.132 191.047 641.952 220.679C723.854 380.534 802.635 541.17 875.957 701.025C885.317 720.52 907.937 770.426 914.957 788.361C921.978 807.856 925.878 826.57 925.878 846.845C925.878 931.061 859.576 998.902 770.655 998.902Z"/>
              </svg>
            </div>
            <span className="font-bold text-xl sm:text-2xl tracking-tighter text-airbnb font-sans lowercase">
              airbnb
            </span>
          </a>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 text-sm font-semibold text-charcoal">
            <button 
              onClick={() => scrollToSection('destinations')}
              className="px-4 py-2 rounded-full hover:bg-white hover:shadow-soft-sm transition-all duration-200"
            >
              Explore
            </button>
            <button 
              onClick={() => scrollToSection('stays')}
              className="px-4 py-2 rounded-full hover:bg-white hover:shadow-soft-sm transition-all duration-200"
            >
              Stays
            </button>
            <button 
              onClick={() => scrollToSection('signature')}
              className="px-4 py-2 rounded-full hover:bg-white hover:shadow-soft-sm transition-all duration-200"
            >
              Experiences
            </button>
            <button 
              onClick={() => scrollToSection('unique')}
              className="px-4 py-2 rounded-full hover:bg-white hover:shadow-soft-sm transition-all duration-200"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('why-nestora')}
              className="px-4 py-2 rounded-full hover:bg-white hover:shadow-soft-sm transition-all duration-200"
            >
              About
            </button>
          </nav>

          {/* Right Action Icons & Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* New Feature: AI Stay Concierge Button */}
            <button
              onClick={onOpenAIConcierge}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-airbnb/10 hover:bg-airbnb/20 text-airbnb text-xs font-bold transition-colors border border-airbnb/30"
              title="Ask Airbnb AI Concierge"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Concierge</span>
            </button>

            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full hover:bg-stone-100 text-charcoal transition-colors duration-200"
              title="Search destinations"
              aria-label="Open search bar"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Wishlist / Heart */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-charcoal transition-colors duration-200"
              title="View your saved stays"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 stroke-[2] ${wishlistCount > 0 ? 'fill-airbnb text-airbnb' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-airbnb text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* "Airbnb your home" CTA */}
            <button
              onClick={onOpenHostModal}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-charcoal hover:bg-stone-100 transition-all duration-200"
            >
              <span>Airbnb your home</span>
            </button>

            {/* Profile Dropdown Container */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pl-3 border border-stone-300 rounded-full hover:shadow-soft-sm transition-all duration-200 bg-white"
                aria-expanded={profileDropdownOpen}
                aria-label="User menu"
              >
                <Menu className="w-4 h-4 text-charcoal" />
                <div className="w-7 h-7 rounded-full bg-stone-700 flex items-center justify-center text-white font-semibold text-xs overflow-hidden">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>

              {/* Profile Menu Popover */}
              {profileDropdownOpen && (
                <div 
                  className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-soft-xl border border-stone-200 py-2.5 z-50 animate-fadeIn text-left"
                  onMouseLeave={() => setProfileDropdownOpen(false)}
                >
                  <div className="px-4 py-2.5 border-b border-stone-100">
                    <p className="text-xs uppercase tracking-wider font-semibold text-charcoal-light">Welcome to Airbnb</p>
                    <p className="text-sm font-semibold text-charcoal mt-0.5">Explore unforgettable stays</p>
                  </div>

                  <div className="py-1">
                    <button 
                      onClick={() => { setProfileDropdownOpen(false); onOpenWishlist(); }}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-charcoal hover:bg-stone-50 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <Heart className="w-4 h-4 text-airbnb" />
                        Wishlists ({wishlistCount})
                      </span>
                    </button>
                    <button 
                      onClick={() => { setProfileDropdownOpen(false); onOpenAIConcierge(); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-charcoal hover:bg-stone-50 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-airbnb" />
                      AI Travel Concierge
                    </button>
                    <button 
                      onClick={() => { setProfileDropdownOpen(false); onOpenHostModal(); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-charcoal hover:bg-stone-50 transition-colors"
                    >
                      <Home className="w-4 h-4 text-charcoal" />
                      Airbnb your home
                    </button>
                    <button 
                      onClick={() => { setProfileDropdownOpen(false); onOpenFilters(); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-charcoal hover:bg-stone-50 transition-colors"
                    >
                      <SlidersHorizontal className="w-4 h-4 text-charcoal-muted" />
                      Filter preferences
                    </button>
                  </div>

                  <div className="border-t border-stone-100 pt-1 mt-1">
                    <div className="px-4 py-2 flex items-center justify-between text-xs text-charcoal-muted">
                      <span>Currency</span>
                      <select 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)}
                        className="bg-stone-100 rounded px-2 py-1 text-xs font-semibold text-charcoal border-none focus:ring-1 focus:ring-airbnb cursor-pointer"
                      >
                        <option value="INR">INR (₹)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-charcoal hover:bg-stone-100"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-soft-lg animate-fadeIn text-left">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-charcoal">
            <button 
              onClick={() => scrollToSection('destinations')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100 transition-colors"
            >
              Explore Destinations
            </button>
            <button 
              onClick={() => scrollToSection('stays')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100 transition-colors"
            >
              Extraordinary Stays
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAIConcierge(); }}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100 transition-colors text-airbnb flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              AI Stay Concierge
            </button>
            <button 
              onClick={() => scrollToSection('signature')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100 transition-colors"
            >
              Signature Experiences
            </button>
            <button 
              onClick={() => scrollToSection('unique')}
              className="text-left py-2 px-3 rounded-xl hover:bg-stone-100 transition-colors"
            >
              Unique Architecture Stays
            </button>
          </nav>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenHostModal(); }}
              className="w-full py-3 px-4 rounded-xl bg-charcoal text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 text-airbnb" />
              Airbnb your home
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenWishlist(); }}
              className="w-full py-3 px-4 rounded-xl border border-stone-300 text-charcoal text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-airbnb" />
              Wishlists ({wishlistCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
