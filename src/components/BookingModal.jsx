import React, { useState } from 'react';
import { CheckCircle2, X, Download, Calendar, Users, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function BookingModal({ reservation, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!reservation) return null;

  const { property, nights, guests, checkIn, checkOut, total, currency } = reservation;
  const bookingCode = `NES-${Math.floor(1000 + Math.random() * 9000)}-${property.country.slice(0, 3).toUpperCase()}`;

  const formatPrice = (val) => {
    if (currency === 'INR') return `₹${val.toLocaleString('en-IN')}`;
    if (currency === 'USD') return `$${Math.round(val / 83).toLocaleString()}`;
    return `€${Math.round(val / 90).toLocaleString()}`;
  };

  const handleDownloadPass = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-60 bg-charcoal-deep/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-4xl p-8 sm:p-10 shadow-soft-xl border border-stone-200 text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-charcoal transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated Success Badge */}
        <div className="w-16 h-16 rounded-full bg-cypress-100 text-cypress-700 mx-auto flex items-center justify-center mb-6 shadow-soft-sm">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
        </div>

        <p className="text-xs uppercase tracking-widest font-bold text-terracotta-600 mb-1">
          Reservation Confirmed
        </p>
        <h2 className="font-serif text-3xl font-normal text-charcoal">
          Your escape is secured.
        </h2>
        <p className="mt-2 text-xs text-charcoal-muted font-light">
          A confirmation pass has been dispatched to your email. Your host has been notified.
        </p>

        {/* Boarding-Pass Style Card */}
        <div className="mt-6 p-6 rounded-3xl bg-stone-50 border border-stone-200 text-left space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-charcoal-light">Reservation Code</p>
              <p className="font-mono text-base font-bold text-charcoal">{bookingCode}</p>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-cypress-100 text-cypress-800 text-[10px] font-bold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Guaranteed</span>
            </div>
          </div>

          <div>
            <p className="font-serif text-lg font-semibold text-charcoal">{property.title}</p>
            <p className="text-xs text-charcoal-muted flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-terracotta-500" />
              {property.location}, {property.country}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-200 text-xs">
            <div>
              <span className="text-charcoal-light">Stay Dates:</span>
              <p className="font-medium text-charcoal">{checkIn} → {checkOut} ({nights} nights)</p>
            </div>
            <div>
              <span className="text-charcoal-light">Guests:</span>
              <p className="font-medium text-charcoal">{guests} traveler{guests > 1 ? 's' : ''}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-200 flex justify-between items-center text-sm font-bold text-charcoal">
            <span>Total Amount:</span>
            <span className="text-terracotta-600">{formatPrice(total)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadPass}
            className="flex-1 py-3 px-5 rounded-full border border-stone-300 hover:border-charcoal text-xs font-semibold text-charcoal flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{downloaded ? 'Pass Saved ✓' : 'Save Travel Pass'}</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-5 rounded-full bg-charcoal hover:bg-terracotta-600 text-canvas text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
