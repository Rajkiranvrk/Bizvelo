"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Clock, RefreshCw, Send } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

function ContactContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "billing",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Dynamically set interest based on query parameter
  useEffect(() => {
    const serviceParam = searchParams?.get("service");
    const typeParam = searchParams?.get("type");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    } else if (typeParam === "demo") {
      setFormData((prev) => ({ ...prev, service: "billing", message: "Hi, I would like to request a free demo of your Billing Software." }));
    }
  }, [searchParams]);

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
    <div className="pt-28 pb-16 font-sans">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 overflow-hidden bg-slate-50 bg-grid-pattern border-b border-slate-200/60">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-550/10 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider font-poppins shadow-sm">
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-slate-900 tracking-tight">
            Contact Bizvelo Technology
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about billing software, custom ERP builds, or website design in Trichy? Reach out today for a free quotation.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Contact Details & Hours */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-poppins font-bold text-slate-900">Office Location & Support</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We are based in the heart of Tiruchirappalli. Drop by our office or call us directly. Our engineers are ready to visit your shop or factory for on-site reviews.
                </p>
              </div>

              {/* Detail block */}
              <div className="space-y-6">
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-poppins font-bold text-slate-900 uppercase tracking-wider">Office Address</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      45, Shastri Road, Thillai Nagar,<br />
                      Tiruchirappalli, Tamil Nadu, 620018
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-poppins font-bold text-slate-900 uppercase tracking-wider">Phone Support</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      Sales & Support: <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">+91 98765 43210</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-poppins font-bold text-slate-900 uppercase tracking-wider">Email Correspondence</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      General Queries: <a href="mailto:info@bizvelo.com" className="text-blue-600 hover:text-blue-700 transition-colors">info@bizvelo.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-poppins font-bold text-slate-900 uppercase tracking-wider">Business Hours</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      Monday - Saturday: 9:00 AM - 6:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>

              {/* WhatsApp Callout */}
              <GlassCard className="border border-emerald-100 bg-emerald-50/20 hover:border-emerald-200 shadow-sm">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-poppins font-bold text-slate-900">Instant Chat Available</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Need immediate answers? Start a WhatsApp conversation.</p>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-wider mt-2 inline-block font-semibold"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>
              </GlassCard>

            </div>

            {/* Column 2: Lead capture form */}
            <div className="lg:col-span-7">
              <GlassCard className="border border-slate-200 bg-white shadow-md p-8">
                <h2 className="text-xl font-poppins font-bold text-slate-900 mb-6">Send an Online Inquiry</h2>
                
                {status === "success" ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl space-y-3">
                    <h4 className="font-poppins font-bold text-base">Thank You!</h4>
                    <p className="text-xs leading-relaxed text-slate-600 font-sans">
                      Your form has been successfully sent. A Bizvelo developer will reach out to you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Anand Babu"
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
                          placeholder="e.g. anand@gmail.com"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Service Interests */}
                      <div className="space-y-1">
                        <label htmlFor="service" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Product / Service Needed</label>
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

                    {/* Requirements */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tell us about your requirements</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mention any custom specifications, shop size, or website feature lists..."
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
                          <span>Sending Inquiry...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <span>Send Inquiry</span>
                          <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                    
                    {status === "error" && (
                      <p className="text-xs text-rose-600 text-center font-semibold">
                        Error sending message. Please try again.
                      </p>
                    )}

                  </form>
                )}
              </GlassCard>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Integrated Google Maps Iframe */}
      <section className="w-full h-[400px] border-t border-slate-200 overflow-hidden relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7770857321595!2d78.68266207593674!3d10.828359489323382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf506ea4a480d%3A0xc3b83c79a957814b!2sThillai%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bizvelo Technology location in Thillai Nagar Trichy"
        />
      </section>

    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-40 text-center font-sans text-slate-600 bg-slate-50 min-h-[80vh] flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-t-blue-600 border-r-blue-600 border-b-slate-200 border-l-slate-200 animate-spin mb-4" />
        <p className="text-sm font-semibold tracking-wider uppercase font-poppins text-slate-500">Loading Contact Details...</p>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
