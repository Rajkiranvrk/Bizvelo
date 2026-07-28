"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 bg-grid-pattern">
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none animate-float-medium" />

      {/* Glassmorphic Decorative Shapes */}
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-2xl glass-panel border border-slate-200/50 opacity-40 hidden lg:block animate-float-slow shadow-sm" />
      <div className="absolute bottom-1/5 left-10 w-16 h-16 rounded-full glass-panel border border-slate-200/50 opacity-40 hidden lg:block animate-float-medium shadow-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase font-poppins shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Leading IT & Software Company in Trichy
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-6xl md:text-7xl font-poppins font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Engineering <span className="text-gradient-accent">Next-Gen</span> Software for Local Leaders
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed"
          >
            Empower your business with custom billing systems, responsive website designs, and cloud ERP systems. Designed and developed by Trichy&apos;s leading software team to automate your daily workflows.
          </motion.p>

          {/* Trust points */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 pt-2"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>99.9% POS Uptime</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Local Support in Trichy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Google Maps #1 Ranked SEO</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button href="/contact?type=demo" variant="primary" size="lg" className="w-full sm:w-auto group">
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            
            <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto group">
              <span>Explore Services</span>
              <Play className="w-3.5 h-3.5 ml-2 text-slate-600 group-hover:text-slate-900" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
