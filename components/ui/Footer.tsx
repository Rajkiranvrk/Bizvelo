import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Billing Software Development", href: "/services/billing-software" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "ERP Software Solutions", href: "/services/erp-software" },
    { name: "CRM Software Systems", href: "/services/crm-software" },
    { name: "Ecommerce Web Design", href: "/services/ecommerce" },
  ];

  const locations = [
    "Thillai Nagar", "Srirangam", "KK Nagar", "Cantonment", 
    "Woraiyur", "Kattur", "Tiruverumbur", "Lalgudi", "Manachanallur"
  ];

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8 text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-poppins font-bold tracking-tight text-slate-900">
                Bizvelo<span className="text-blue-600">Tech</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600">
              Bizvelo Technology is a world-class IT services and software company in Trichy, Tamil Nadu. We engineer premium custom software, billing systems, and responsive website designs to scale local businesses.
            </p>
            <div className="pt-2 flex gap-4 text-sm text-slate-600">
              <span className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded-md text-emerald-600 font-medium">GST Registered</span>
              <span className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded-md text-blue-600 font-medium">ISO 9001:2015</span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-slate-900 font-poppins font-semibold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-slate-900 transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-500" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4 text-sm">
            <h3 className="text-slate-900 font-poppins font-semibold text-sm uppercase tracking-wider mb-1">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Bizvelo Technology</strong><br />
                  45, Shastri Road, Thillai Nagar,<br />
                  Tiruchirappalli, Tamil Nadu 620018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-slate-900 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:info@bizvelo.com" className="hover:text-slate-900 transition-colors">info@bizvelo.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Local SEO Coverage */}
          <div>
            <h3 className="text-slate-900 font-poppins font-semibold text-sm uppercase tracking-wider mb-5">Service Areas in Trichy</h3>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              We provide software deployment and on-site support across Tiruchirappalli district:
            </p>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span 
                  key={loc}
                  className="text-xs px-2 py-1 bg-white border border-slate-200 rounded hover:border-slate-300 hover:text-slate-900 transition-all cursor-default"
                >
                  {loc}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Also serving businesses in Madurai, Thanjavur, Karur, Pudukkottai, and Coimbatore.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Bizvelo Technology. All rights reserved. Made in Trichy, Tamil Nadu.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-900 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
