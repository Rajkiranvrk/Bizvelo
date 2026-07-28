"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Store, 
  Utensils, 
  GraduationCap, 
  Stethoscope, 
  Factory, 
  Sparkles,
  RefreshCw,
  Send,
  MessageSquare
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "billing",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const industries = [
    { name: "Supermarkets & Retailers", icon: Store, desc: "Fast POS checkouts, inventory syncing, and GST reporting." },
    { name: "Retail Shops & Boutiques", icon: Building2, desc: "Sleek billing systems, barcodes, and custom discount schemes." },
    { name: "Restaurants & Cafes", icon: Utensils, desc: "KOT management, table ordering systems, and instant billing." },
    { name: "Educational Institutions", icon: GraduationCap, desc: "Fee collections, student databases, and counselor CRMs." },
    { name: "Hospitals & Pharmacies", icon: Stethoscope, desc: "Drug batch expirations, patient bills, and prescriptions." },
    { name: "Manufacturing & Factories", icon: Factory, desc: "Centralized ERP operations, raw stocks, and labor sheets." },
  ];

  const technologies = [
    { name: "Next.js 15 / React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js / Express", category: "Backend" },
    { name: "Go (Golang)", category: "Backend" },
    { name: "PostgreSQL / SQLite", category: "Database" },
    { name: "Flutter", category: "Mobile App" },
    { name: "React Native", category: "Mobile App" },
    { name: "Electron", category: "Desktop App" },
  ];

  const steps = [
    { num: "01", title: "Consultation & Scope", desc: "We sit down (in-person in Trichy) to map out your daily workflow bottlenecks." },
    { num: "02", title: "Prototype & Wireframe", desc: "We design a premium glassmorphic UI layout so you can preview the design." },
    { num: "03", title: "Agile Development", desc: "We write clean, SEO-optimized code in structured phases with weekly updates." },
    { num: "04", title: "QA & Verification", desc: "We run rigorous checks for load speed (PageSpeed 95+), bugs, and tax calculations." },
    { num: "05", title: "Deploy & Support", desc: "We visit your site in Trichy to install hardware, train staff, and launch online." },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "billing", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Grid */}
      <ServicesSection />

      {/* 3. Why Choose Bizvelo (SEO stats and values) */}
      <WhyChooseUs />

      {/* 4. Industries We Serve Grid */}
      <section className="py-24 bg-white relative overflow-hidden font-sans">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Who We Serve</h2>
            <p className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900 font-poppins">
              Tailored Systems for Key Local Industries
            </p>
            <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <GlassCard key={idx} className="hover:border-blue-500/20 group border border-slate-100 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    {ind.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Portfolio Section (Case Studies - limit to 3) */}
      <PortfolioSection limit={3} showFilters={false} />

      {/* 6. Process Flow (Steps) */}
      <section className="py-24 bg-white relative overflow-hidden font-sans border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">How We Work</h2>
            <p className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900 font-poppins">
              Our Structured Engineering Process
            </p>
            <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Connecting lines for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[1px] bg-slate-200" />
                )}
                
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xl font-poppins font-bold text-blue-600 mb-6 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300">
                  {step.num}
                </div>

                <h3 className="text-base font-poppins font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Technologies Used Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Our Stack</h2>
            <p className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900 font-poppins">
              Modern Technologies We Leverage
            </p>
            <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-500/30 text-sm font-medium text-slate-700 hover:text-slate-900 transition-all flex items-center gap-2 cursor-default font-poppins shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>{tech.name}</span>
                <span className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md uppercase tracking-wider border border-slate-100 font-sans">{tech.category}</span>
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Testimonials Section */}
      <Testimonials />

      {/* 9. Collapsible FAQ Section */}
      <FAQSection />

      {/* 10. CTA + Lead Capture Form Section */}
      <section id="contact-form" className="py-24 bg-slate-50 relative overflow-hidden font-sans border-t border-slate-100">
        {/* Radial glows */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/3 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* CTA Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">Get Started Today</h2>
              <h3 className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900 leading-tight">
                Ready to Automate Your Business Operations?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Schedule a call with our software consultants. We will showcase a live billing demo or layout a custom website roadmap tailored for your business in Trichy.
              </p>
              
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Free Initial Consultation & Wireframing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>No-Obligation Hardware Compatibility Audit</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Transparent Phase-by-Phase Deliverables</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Lead Form Card Right Column */}
            <div className="lg:col-span-7">
              <GlassCard className="border border-slate-200 p-8 bg-white shadow-md">
                <h4 className="text-xl font-poppins font-bold text-slate-900 mb-6">Request a Callback / Free Demo</h4>
                
                {status === "success" ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl space-y-3">
                    <h5 className="font-poppins font-bold text-base">Inquiry Submitted Successfully!</h5>
                    <p className="text-xs leading-relaxed text-slate-600">
                      Thank you for contacting Bizvelo Technology. Our technical representative in Trichy will call you back within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. ramesh@gmail.com"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Service Interests */}
                      <div className="space-y-1">
                        <label htmlFor="service" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Service Needed</label>
                        <select
                          name="service"
                          id="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors"
                        >
                          <option value="billing">GST Billing Software</option>
                          <option value="website">Website Development</option>
                          <option value="mobile">Mobile App Development</option>
                          <option value="erp">ERP Enterprise Software</option>
                          <option value="crm">CRM Lead Systems</option>
                          <option value="seo">SEO & Local Marketing</option>
                        </select>
                      </div>
                    </div>

                    {/* Brief Requirements */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Brief Requirements</label>
                      <textarea
                         name="message"
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your business or specific software features needed..."
                        className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      variant="primary"
                      className="w-full text-center py-3 group"
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center justify-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Submitting Request...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <span>Submit Inquiry</span>
                          <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                    
                    {status === "error" && (
                      <p className="text-xs text-rose-600 text-center font-semibold">
                        Failed to submit. Please check your connections or call us directly!
                      </p>
                    )}

                  </form>
                )}
              </GlassCard>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
