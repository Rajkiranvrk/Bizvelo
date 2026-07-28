"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import GlassCard from "../ui/GlassCard";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Mr. Rajasekaran",
    role: "Managing Director",
    company: "Metro Mart Supermarket",
    location: "Thillai Nagar, Trichy",
    quote: "Bizvelo's GST billing software changed how we do business. Our cashiers handle heavy checkout queues with zero lag, and the inventory alerts prevent stockouts. Their local support team in Trichy set up everything on-site in a weekend.",
    stars: 5,
  },
  {
    name: "Dr. Maria Joseph",
    role: "Administrative Head",
    company: "St. Joseph's Academy Group",
    location: "Cantonment, Trichy",
    quote: "Our admissions process was completely paper-based, causing delays during enrollments. Bizvelo built a custom CRM that tracks student documents and automates fees. It saved our counselors hundreds of hours.",
    stars: 5,
  },
  {
    name: "Mr. G. Venkatesan",
    role: "Founder & CEO",
    company: "VeloMetals Fabrication Ltd",
    location: "Tiruverumbur Industrial Area, Trichy",
    quote: "Finding an ERP that fits a custom manufacturing floor is tough. Bizvelo designed a modular ERP that tracks steel raw inputs, shift timings, and automatically drafts GST bills. Operational delays dropped by 30%.",
    stars: 5,
  },
  {
    name: "Mrs. Meenakshi Sundaram",
    role: "Owner",
    company: "Cauvery Crafts & Textiles",
    location: "Srirangam, Trichy",
    quote: "We wanted to sell our handicrafts globally but didn't know how. Bizvelo designed a stunning e-commerce site with glassmorphic elements and integrated Razorpay UPI checkouts. We now ship orders across India and the US.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(slideTimer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Success Stories</h2>
          <p className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900">
            Trusted by Trichy&apos;s Leading Business Owners
          </p>
          <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
        </div>

        {/* Carousel Slider */}
        <div className="relative min-h-[380px] md:min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <GlassCard className="border border-slate-200 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center bg-white shadow-sm">
                
                {/* Quote Icon Background */}
                <Quote className="absolute right-6 top-6 w-32 h-32 text-slate-100/60 -z-10 select-none" />
                
                {/* Star rating and review content */}
                <div className="space-y-6 flex-1">
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-slate-800 text-base sm:text-lg md:text-xl italic font-sans leading-relaxed">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </p>

                  {/* Reviewer Meta */}
                  <div>
                    <h4 className="text-slate-900 font-poppins font-semibold text-base">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-sans mt-0.5">
                      {testimonials[activeIndex].role}, <span className="text-blue-600 font-medium">{testimonials[activeIndex].company}</span>
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>

                </div>

              </GlassCard>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controller Dots and Arrows */}
        <div className="flex items-center justify-between mt-8">
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
