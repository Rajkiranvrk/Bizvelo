"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Zap, HeartHandshake, Award, Cpu } from "lucide-react";
import GlassCard from "../ui/GlassCard";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const values = [
    {
      icon: Shield,
      title: "Local On-Site Support",
      desc: "Based in Trichy (Thillai Nagar), we are always close by. We offer direct on-site setup, training, and emergency troubleshooting."
    },
    {
      icon: Sparkles,
      title: "Apple & Stripe Inspired UI/UX",
      desc: "No outdated interfaces. We build state-of-the-art glassmorphism layouts, clean typography, and smooth transitions that wow customers."
    },
    {
      icon: Zap,
      title: "Speed & SEO Optimized",
      desc: "Our websites load in under 2 seconds. We configure schemas, sitemaps, and keywords to rank your brand on Google Search and Maps."
    },
    {
      icon: Cpu,
      title: "Hybrid Offline-Cloud POS",
      desc: "Our billing software works perfectly offline, and auto-syncs with the cloud when the internet returns. Zero billing delays."
    },
    {
      icon: HeartHandshake,
      title: "Custom Tailored Workflows",
      desc: "We don't force generic templates. We write custom code that matches your exact business inputs, inventory flow, and reports."
    },
    {
      icon: Award,
      title: "Transparent Pricing",
      desc: "No surprise renewal fees or lock-in commissions. You get complete transparency on cloud hosting, domains, and licensing."
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-cyan-600 font-poppins">Why Partner With Us</h2>
            <h3 className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900 leading-tight">
              Bizvelo Technology is the Best Software Company in Trichy
            </h3>
            <div className="h-[2px] w-20 bg-blue-600 mt-4" />
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              We bridge the gap between world-class engineering and local support. Local retailers, educational groups, and manufacturers across Trichy trust Bizvelo because we build high-speed systems that automate work and generate real leads.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <GlassCard className="h-full hover:border-blue-500/20 group">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-poppins font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-sans">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics bar */}
        <div className="mt-20 border border-slate-200/80 bg-white/95 backdrop-blur rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-slate-900">120+</div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Clients Served</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-slate-900">15M+</div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Bills Processed</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-slate-900">99.8%</div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Client Retention</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-slate-900">24/7</div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Support Uptime</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
