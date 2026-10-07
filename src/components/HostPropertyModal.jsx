import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight, Home } from 'lucide-react';

export default function HostPropertyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [nightsPerMonth, setNightsPerMonth] = useState(12);
  const [estimatedNightlyRate, setEstimatedNightlyRate] = useState(14000);
  const [propertyType, setPropertyType] = useState('Glass Villa');
  const [location, setLocation] = useState('Uluwatu, Bali');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const estimatedMonthlyEarnings = nightsPerMonth * estimatedNightlyRate;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
        onClose();
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-4xl p-8 sm:p-10 shadow-soft-xl border border-stone-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-charcoal transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-left mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-airbnb bg-airbnb/10 px-3 py-1 rounded-full">
                Airbnb Setup
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal mt-3">
                Airbnb your home.
              </h2>
              <p className="text-sm text-charcoal-muted mt-1 font-light">
                You could earn extra income sharing your place on Airbnb with verified travelers worldwide.
              </p>
            </div>

            {/* Interactive Earnings Calculator Widget */}
            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 mb-6 text-left">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted">Estimated Monthly Earnings</span>
                <span className="font-serif text-3xl font-bold text-airbnb">
                  ₹{estimatedMonthlyEarnings.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-xs text-charcoal-light mb-4">
                Based on {nightsPerMonth} booked nights at ₹{estimatedNightlyRate.toLocaleString('en-IN')} per night in {location}.
              </p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-charcoal-muted mb-1">
                    <span>Nights booked per month</span>
                    <span>{nightsPerMonth} nights</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="28"
                    value={nightsPerMonth}
                    onChange={(e) => setNightsPerMonth(Number(e.target.value))}
                    className="w-full accent-airbnb cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-charcoal-muted mb-1">
                    <span>Target nightly rate</span>
                    <span>₹{estimatedNightlyRate.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={estimatedNightlyRate}
                    onChange={(e) => setEstimatedNightlyRate(Number(e.target.value))}
                    className="w-full accent-airbnb cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Step Navigation Form */}
            <form onSubmit={handleNextStep} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-charcoal-muted">Property Type</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full mt-1 px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-airbnb"
                  >
                    <option value="Glass Villa">Entire Villa</option>
                    <option value="Alpine Chalet">Alpine Chalet</option>
                    <option value="Heritage Machiya">Heritage Townhouse</option>
                    <option value="Treehouse Retreat">Treehouse</option>
                    <option value="Desert Sanctuary">Desert Oasis</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-charcoal-muted">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Zermatt or Wayanad"
                    className="w-full mt-1 px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-airbnb"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-200">
                <span className="text-xs text-charcoal-light">Step {step} of 3</span>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-airbnb hover:bg-airbnb-hover text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <span>{step === 3 ? 'Publish Listing' : 'Continue'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cypress-100 text-cypress-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="font-serif text-3xl text-charcoal">Listing Application Received!</h3>
            <p className="text-sm text-charcoal-muted max-w-md mx-auto">
              Welcome to the Airbnb Host Community. An onboarding specialist will guide your initial listing launch.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
