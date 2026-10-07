import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="relative bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-14 lg:p-16 border border-stone-200/90 shadow-soft-lg text-center overflow-hidden">
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-8 left-8 text-stone-200 pointer-events-none">
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 opacity-40 rotate-180" />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-charcoal-muted text-xs uppercase tracking-widest font-semibold mb-8">
          <span>Guest Stories</span>
        </div>

        {/* 5-Star Rating Indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-6 text-amber-400">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="min-h-[140px] sm:min-h-[120px] flex items-center justify-center">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-3.5xl font-normal text-charcoal leading-snug sm:leading-relaxed max-w-3xl transition-opacity duration-300">
            “{current.quote}”
          </blockquote>
        </div>

        {/* Author Details */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <img
            src={current.avatar}
            alt={current.author}
            className="w-13 h-13 rounded-full object-cover border-2 border-stone-200 shadow-soft-sm"
          />
          <div className="text-center sm:text-left">
            <p className="font-serif text-lg font-semibold text-charcoal">
              {current.author}
            </p>
            <p className="text-xs text-charcoal-muted font-medium">
              {current.role} • {current.location}
            </p>
            <p className="text-xs text-terracotta-600 font-semibold mt-0.5">
              {current.stay}
            </p>
          </div>
        </div>

        {/* Navigation Buttons and Indicators */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-stone-300 hover:border-charcoal flex items-center justify-center text-charcoal hover:bg-stone-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-charcoal' : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-stone-300 hover:border-charcoal flex items-center justify-center text-charcoal hover:bg-stone-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
