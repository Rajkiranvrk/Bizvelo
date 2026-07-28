"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileSpreadsheet, 
  Code, 
  Smartphone, 
  Layers, 
  Users, 
  ShoppingBag,
  ArrowRight 
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { servicesData } from "@/data/services-data";

// Helper to resolve icon by string name
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSpreadsheet,
  Code,
  Smartphone,
  Layers,
  Users,
  ShoppingBag
};

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Our Expertise</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold tracking-tight text-slate-900">
            Custom IT Solutions Designed to Drive Growth
          </p>
          <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          <p className="text-slate-600 font-sans mt-4 text-sm sm:text-base leading-relaxed">
            Bizvelo Technology builds scalable software products specifically optimized to help Trichy local businesses streamline workflows and capture modern online markets.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code;
            return (
              <motion.div key={service.id} variants={cardVariants} className="flex">
                <Link href={`/services/${service.slug}`} className="flex w-full group">
                  <GlassCard className="w-full flex flex-col justify-between hover:scale-[1.02] duration-300 relative overflow-hidden group border border-slate-100">
                    
                    {/* Hover Glow Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="space-y-5 relative z-10">
                      {/* Icon container */}
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-poppins font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-sans">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Learn More link */}
                    <div className="pt-6 border-t border-slate-100 mt-6 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors relative z-10">
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                    </div>

                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 text-sm font-sans mb-4">
            Need a unique workflow developed for your warehouse or shop?
          </p>
          <Link 
            href="/contact?type=consultation" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <span>Request Custom Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
