"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const values = [
    { title: "Technical Integrity", desc: "We write clean, efficient, native-grade code that performs reliably and scales.", icon: Award },
    { title: "Local Commitment", desc: "We are rooted in Trichy. We serve local merchants with on-site support and training.", icon: ShieldCheck },
    { title: "Empathetic Partnership", desc: "We take the time to understand your workflow bottlenecks, putting business needs first.", icon: HeartHandshake },
  ];

  const team = [
    { name: "Suresh Kumar", role: "Co-Founder & CEO", desc: "Expert in ERP design and business flow automation.", initials: "SK" },
    { name: "Rohan Raj", role: "UI/UX & Frontend Lead", desc: "Crafts premium glassmorphic interfaces.", initials: "RR" },
    { name: "Deepak Kumar", role: "SEO & Growth Director", desc: "Helps local businesses rank #1 on Google.", initials: "DK" },
    { name: "Arun Prasath", role: "Lead Mobile Developer", desc: "Builds high-performance Flutter apps.", initials: "AP" },
  ];

  return (
    <div className="pt-28 pb-16 font-sans">
      
      {/* 1. Header Hero */}
      <section className="relative py-16 overflow-hidden bg-slate-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider font-poppins"
          >
            About Bizvelo Technology
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-poppins font-bold text-slate-900 tracking-tight"
          >
            Empowering Trichy&apos;s Digital Economy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            We engineer high-performance billing software, websites, and enterprise ERP tools to automate business operations across Tamil Nadu.
          </motion.p>
        </div>
      </section>

      {/* 2. Overview, Vision, Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Overview */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-slate-900">Who We Are</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in Trichy, Tamil Nadu, Bizvelo Technology emerged from a simple observation: local small businesses, retail shops, and manufacturing plants were struggling with complex, expensive, and poorly supported IT software. 
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We set out to change this. As a full-stack IT consultancy, we specialize in building highly responsive websites that rank on Google, hybrid offline-online billing systems, and modular ERP databases that connect every department. We provide direct local support right where our clients work.
              </p>
            </motion.div>

            {/* Vision & Mission Cards */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <GlassCard className="space-y-4 border border-slate-100 bg-white">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-slate-900">Our Vision</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    To be the most trusted IT and software development partner for businesses in Tier-2 and Tier-3 cities across India.
                  </p>
                </GlassCard>

                <GlassCard className="space-y-4 border border-slate-100 bg-white">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-slate-900">Our Mission</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    To deliver premium, cost-effective, and custom software systems that simplify daily workflows and increase sales.
                  </p>
                </GlassCard>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-slate-50 relative border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Our DNA</h2>
            <p className="text-3xl font-poppins font-bold text-slate-900">Core Company Values</p>
            <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <GlassCard key={idx} className="text-center flex flex-col items-center hover:border-blue-500/20 group border border-slate-100 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-blue-5 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">{val.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Our Builders</h2>
            <p className="text-3xl font-poppins font-bold text-slate-900">Meet the Expert Team</p>
            <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <GlassCard key={idx} className="text-center space-y-4 flex flex-col items-center hover:scale-[1.02] duration-300 border border-slate-100 bg-white shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-poppins font-bold shadow-lg shadow-blue-500/10">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs text-blue-600 font-medium font-poppins mt-0.5">{member.role}</p>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">{member.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Inquire CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-center space-y-6">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-slate-900">Want to Work with Our Team?</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 mb-6">
            Contact us for a free digital consultation. We are ready to visit your business location anywhere in Tiruchirappalli.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>

    </div>
  );
}
