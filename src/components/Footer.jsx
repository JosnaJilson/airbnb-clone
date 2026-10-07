import React, { useState } from 'react';
import { 
  Instagram, 
  Youtube, 
  Globe, 
  ArrowRight, 
  CheckCircle2,
  Twitter
} from 'lucide-react';

export default function Footer({ currency, setCurrency }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-stone-100 text-charcoal pt-16 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand Editorial Banner */}
        <div className="pb-12 border-b border-stone-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-airbnb">
                <svg width="28" height="28" viewBox="0 0 1007 1080" fill="currentColor">
                  <path d="M949.278 666.715C875.957 506.859 795.615 344.664 713.713 184.809C698.893 155.177 670.813 98.2527 645.852 67.8412C609.971 24.1733 556.93 0.779785 503.109 0.779785C449.288 0.779785 396.247 24.1733 360.366 67.8412C335.406 98.2527 307.325 155.177 292.505 184.809C210.603 344.664 130.262 506.859 56.9404 666.715C47.5802 687.769 24.9598 737.675 16.3796 760.289C6.23941 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.401 1079.22 235.564 1079.22C346.326 1079.22 434.468 1008.26 503.109 934.18C571.751 1008.26 659.892 1079.22 770.655 1079.22C904.817 1079.22 1006.22 975.509 1006.22 846.845C1006.22 817.213 999.979 787.581 989.839 760.289C981.259 737.675 958.638 687.769 949.278 666.715ZM503.109 810.195C447.728 738.455 396.247 649.56 396.247 577.819C396.247 506.079 446.948 470.209 503.109 470.209C559.27 470.209 610.751 508.419 610.751 577.819C610.751 647.22 558.49 738.455 503.109 810.195ZM770.655 998.902C688.628 998.902 618.271 941.557 555.955 872.656C620.205 792.541 691.093 679.121 691.093 577.819C691.093 458.513 598.271 389.892 503.109 389.892C407.947 389.892 315.906 458.513 315.906 577.819C315.906 679.098 386.294 792.478 450.318 872.593C387.995 941.526 317.614 998.902 235.564 998.902C146.642 998.902 81.1209 931.061 81.1209 846.845C81.1209 826.57 84.241 807.856 91.2611 788.361C98.2812 770.426 120.902 720.52 130.262 701.025C203.583 541.17 282.365 380.534 364.267 220.679C379.087 191.047 404.047 141.921 422.768 119.307C443.048 94.3538 471.129 81.0975 503.109 81.0975C535.09 81.0975 563.17 94.3538 583.451 119.307C602.171 141.921 627.132 191.047 641.952 220.679C723.854 380.534 802.635 541.17 875.957 701.025C885.317 720.52 907.937 770.426 914.957 788.361C921.978 807.856 925.878 826.57 925.878 846.845C925.878 931.061 859.576 998.902 770.655 998.902Z"/>
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-tighter text-airbnb font-sans lowercase">
                airbnb
              </span>
            </div>
            <p className="text-base text-charcoal font-medium">
              Belong anywhere. Stay somewhere unforgettable.
            </p>
            <p className="mt-1 text-xs text-charcoal-muted">
              Get inspired with curated stays and travel experiences across the globe.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="relative flex items-center max-w-md lg:ml-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-full px-5 py-3 text-sm text-charcoal placeholder-charcoal-muted focus:outline-none focus:border-airbnb"
              />
              <button
                type="submit"
                className="absolute right-1 px-5 py-2 rounded-full bg-airbnb hover:bg-airbnb-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-cypress-700 flex items-center gap-1.5 lg:justify-end">
                <CheckCircle2 className="w-3.5 h-3.5 text-cypress-600" />
                Thank you! You have subscribed to Airbnb travel highlights.
              </p>
            )}
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-left">
          
          {/* Column 1: Explore */}
          <div>
            <h4 className="font-semibold text-charcoal mb-3">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-muted">
              <li><a href="#destinations" className="hover:underline">Popular Destinations</a></li>
              <li><a href="#stays" className="hover:underline">Holiday Homes</a></li>
              <li><a href="#signature" className="hover:underline">Airbnb Experiences</a></li>
              <li><a href="#unique" className="hover:underline">Unique Architecture</a></li>
            </ul>
          </div>

          {/* Column 2: Hosting */}
          <div>
            <h4 className="font-semibold text-charcoal mb-3">
              Hosting
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-muted">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-semibold text-charcoal mb-3">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-muted">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          {/* Column 4: Airbnb */}
          <div>
            <h4 className="font-semibold text-charcoal mb-3">
              Airbnb
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-muted">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Settings */}
        <div className="pt-6 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          
          <div className="flex items-center gap-3">
            <span>© 2026 Airbnb, Inc.</span>
            <span>•</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>•</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-5">
            
            {/* Language Selector */}
            <div className="flex items-center gap-1.5 font-semibold text-charcoal">
              <Globe className="w-3.5 h-3.5" />
              <span>English (IN)</span>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-1.5">
              <span>Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-white text-charcoal rounded-md px-2 py-1 text-xs font-semibold border border-stone-300 cursor-pointer focus:outline-none"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-charcoal ml-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-airbnb">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-airbnb">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-airbnb">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
