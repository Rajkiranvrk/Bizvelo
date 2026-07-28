"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import ServicesSection from "@/components/sections/ServicesSection";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const operationalFeatures = [
    { title: "24/7 SLA Support", desc: "For critical retail checkouts and active factories in Trichy, we offer SLA-backed technical assistance." },
    { title: "Modular Architecture", desc: "Our billing, ERP, and CRM platforms are modular. Scale up by adding features later without rebuilding." },
    { title: "Code Ownership", desc: "No restrictive software licensing. You get full ownership details of the builds upon project sign-off." },
    { title: "On-site Training", desc: "Our engineers provide detailed hands-on training for cashier staff, managers, and administrators." }
  ];

  return (
    <div className="pt-28 font-sans">
      
      {/* 1. Services Header */}
      <section className="relative py-16 overflow-hidden bg-slate-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider font-poppins shadow-sm"
          >
            Bizvelo Services
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-poppins font-bold text-slate-900 tracking-tight"
          >
            End-to-End Digital Engineering
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            We design, develop, secure, and rank custom software for supermarkets, shops, factories, educational institutions, and clinics in Trichy.
          </motion.p>
        </div>
      </section>

      {/* 2. Primary Services Grid */}
      <ServicesSection />

      {/* 3. Operational Guarantees */}
      <section className="py-20 bg-slate-50 relative border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Our Standards</h2>
            <p className="text-3xl font-poppins font-bold text-slate-900">Technical Operational Guarantees</p>
            <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {operationalFeatures.map((feat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlassCard className="flex gap-4 items-start hover:border-blue-500/20 group h-full bg-white border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-poppins font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-sans">
                      {feat.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 bg-white text-center space-y-6">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-slate-900 leading-tight">
            Need a Customized Application or Special Integration?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 mb-8 leading-relaxed font-sans">
            Our engineers can integrate card readers, barcode machines, custom databases, and API webhooks tailored specifically to your existing setup.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Discuss Custom Project
          </Button>
        </div>
      </section>

    </div>
  );
}
