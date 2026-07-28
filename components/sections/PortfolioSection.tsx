"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import GlassCard from "../ui/GlassCard";
import { portfolioItems } from "@/data/portfolio-items";
import Button from "../ui/Button";

interface PortfolioSectionProps {
  limit?: number;
  showFilters?: boolean;
}

export default function PortfolioSection({
  limit,
  showFilters = true,
}: PortfolioSectionProps) {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { name: "All Projects", value: "all" },
    { name: "Billing Systems", value: "billing" },
    { name: "E-Commerce", value: "ecommerce" },
    { name: "Mobile Apps", value: "mobile" },
    { name: "ERP Systems", value: "erp" },
    { name: "CRM Platforms", value: "crm" },
  ];

  const filteredItems = portfolioItems.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-t border-b border-slate-100">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Our Case Studies</h2>
          <p className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900 font-poppins">
            Delivering Success in Every Deployment
          </p>
          <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
        </div>

        {/* Filter Categories Tab (Optional) */}
        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-poppins">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 cursor-pointer shadow-sm ${
                  filter === cat.value
                    ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/15"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Case Studies Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="flex"
              >
                <GlassCard className="w-full flex flex-col justify-between hover:border-blue-500/30 overflow-hidden relative group border border-slate-100 bg-white hover:shadow-md transition-all duration-300">
                  <div className="space-y-6">
                    {/* Category tag & location */}
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                      <span className="text-cyan-600 font-poppins">
                        {item.category.toUpperCase()}
                      </span>
                      <span className="text-slate-500 font-sans">
                        {item.location}
                      </span>
                    </div>

                    {/* Title and Short Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-poppins font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    {/* Impact metrics bubble */}
                    <div className="px-4 py-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold flex items-center gap-2 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item.impactMetrics}</span>
                    </div>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-[10px] sm:text-xs px-2 py-0.5 bg-slate-50 border border-slate-150 rounded-md text-slate-650 font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details Trigger (goes to contact page prefilled or logs info) */}
                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                    <span className="text-slate-500">Client: {item.clientName}</span>
                    <Link href={`/contact?type=consultation&project=${item.id}`} className="hover:text-blue-700 transition-colors flex items-center gap-1 text-blue-600 font-medium">
                      <span>Inquire Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA for Homepage */}
        {limit && (
          <div className="text-center mt-12">
            <Button href="/portfolio" variant="outline" size="md" className="group">
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
