import React from "react";
import { Metadata } from "next";
import PortfolioSection from "@/components/sections/PortfolioSection";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio | Bizvelo Technology Trichy",
  description: "Browse our software developments, POS billing systems, ecommerce stores, custom mobile apps, and ERP deployments in Trichy, Tamil Nadu.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 font-sans">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 overflow-hidden bg-slate-50 bg-grid-pattern border-b border-slate-200/60">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider font-poppins shadow-sm">
            Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-slate-900 tracking-tight">
            Our Work in Action
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            See how we help local retailers, schools, clinics, and factories in Trichy automate invoicing, manage inventory, and launch high-converting online brands.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filterable Portfolio Grid */}
      <PortfolioSection showFilters={true} />

      {/* 3. Target Local areas cloud */}
      <section className="py-12 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
        <p className="max-w-2xl mx-auto leading-relaxed">
          Case studies represent client deployments located in Trichy, Srirangam, Cantonment, Thillai Nagar, KK Nagar, Woraiyur, Kattur, and Tiruverumbur.
        </p>
      </section>

    </div>
  );
}
