"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import GlassCard from "../ui/GlassCard";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why is Bizvelo Technology considered the best software company in Trichy?",
    answer: "Bizvelo Technology is recognized as a leading software company in Trichy because we combine premium, custom engineering with responsive local on-site support. We design systems from scratch using modern frameworks (Next.js, Flutter, PostgreSQL) to ensure security, speed, and clean code, avoiding slow generic templates. Our team is physically located in Trichy, enabling fast in-person deployment and support."
  },
  {
    question: "Do you offer GST billing software in Trichy?",
    answer: "Yes, we are a major provider of GST Billing Software in Trichy. Our billing systems are 100% compliant with Indian tax laws, allowing you to generate GST-compliant invoices instantly, calculate CGST/SGST/IGST automatically, print thermal receipts, read barcodes, and export detailed GSTR reports for tax filing."
  },
  {
    question: "Will the billing software work if my retail shop's internet goes down?",
    answer: "Absolutely. Our POS and billing software is built with an offline-first architecture. It runs locally on your cash register terminal during internet outages, letting you invoice clients without interruption. Once your internet connection is restored, the system automatically syncs sales and inventory data to the cloud."
  },
  {
    question: "What is the typical cost of website development in Trichy?",
    answer: "Website development costs depend on the scope, number of pages, and complexity. A professional responsive landing page starts at a lower tier, whereas custom database-driven web portals, educational booking systems, and e-commerce platforms vary based on features. Contact us to get an exact custom quotation."
  },
  {
    question: "How long does it take to design and launch a corporate website?",
    answer: "A standard corporate website takes about 2 to 3 weeks from wireframe design to launch. More complex projects, such as customized e-commerce storefronts or enterprise web portals, take 4 to 8 weeks. We provide clear phase-by-phase timelines before starting any work."
  },
  {
    question: "Can your team build mobile applications for both Android and iOS?",
    answer: "Yes, Bizvelo Technology is a top-tier mobile app development company in Trichy. We specialize in cross-platform development using Flutter and React Native, which allows you to run a single codebase on both Android and iOS, reducing development costs by up to 45% while matching native performance."
  },
  {
    question: "What industries do you build custom ERP software for in Trichy?",
    answer: "We develop custom ERP software for a wide variety of industries in Trichy, including manufacturing units in Tiruverumbur, wholesale distributors in Cantonment, supermarkets in Thillai Nagar, multi-specialty hospitals in Woraiyur, and schools/colleges in Srirangam."
  },
  {
    question: "Can you help our local Trichy shop rank higher on Google Search and Maps?",
    answer: "Yes! As an expert SEO company in Trichy, we optimize all our web designs with technical SEO best practices, including JSON-LD schemas, XML sitemaps, fast load speeds, and local keyword targeting. We also offer Google Business Profile optimization to help you rank in the Google Maps Local 3-Pack."
  },
  {
    question: "Do you build custom CRM systems to track leads?",
    answer: "Yes, we build custom CRM software in Trichy designed to capture leads from your website and social media ads, organize them in visual pipelines, and send automated follow-up reminders via email and WhatsApp. This ensures your sales team converts more inquiries."
  },
  {
    question: "Is there on-site training provided for our staff after deployment?",
    answer: "Yes! For all billing software, CRM, and ERP deployments in Trichy, we provide on-site installation, configuration, and hands-on staff training. We make sure your checkout operators and office admins are comfortable using the system."
  },
  {
    question: "What databases and backend technologies do you use?",
    answer: "We build secure backends using Node.js, Express, Go, and Next.js server actions. For databases, we primarily use PostgreSQL and SQLite for local deployments, ensuring robust relational data integrity and high processing speeds."
  },
  {
    question: "How does the Google Sheets integration work for lead capture?",
    answer: "For startups and small businesses, we set up contact and demo request forms to post directly to a Google Sheet via a secure Next.js API endpoint. This allows you to view and manage leads in Google Sheets in real-time, without needing database servers."
  },
  {
    question: "Can you upgrade or redesign our existing outdated website?",
    answer: "Yes, we offer complete website redesign services. We migrate outdated websites to modern, fast Next.js apps with custom CSS glassmorphism styling and mobile-responsive layouts, helping you improve user engagement and search rankings."
  },
  {
    question: "Do you charge recurring monthly subscription fees?",
    answer: "No, we do not charge forced monthly software fees. For custom website builds and software, you pay a one-time development fee. Ongoing costs are transparent and limited to yearly domain registrations, cloud hosting, and optional support contracts."
  },
  {
    question: "Where is Bizvelo Technology located, and how can we meet in person?",
    answer: "Our office is located at 45, Shastri Road, Thillai Nagar, Tiruchirappalli, Tamil Nadu, 620018. You can schedule an in-person meeting at our office, or we can send our engineers to visit your business location anywhere in Trichy."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-poppins">FAQ</h2>
          <p className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-slate-900 font-poppins">
            Frequently Asked Questions
          </p>
          <div className="h-[2px] w-20 bg-blue-600 mx-auto mt-4" />
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Everything you need to know about our custom software development, billing solutions, web design, and local support services in Trichy.
          </p>
        </div>

        {/* Collapsible FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <GlassCard 
              key={idx} 
              className={`p-0 overflow-hidden border duration-300 ${
                openIndex === idx ? "border-blue-500/30 bg-blue-50/10" : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-poppins focus:outline-none cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${
                    openIndex === idx ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                  }`} />
                  <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${
                    openIndex === idx ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all ${
                  openIndex === idx ? "rotate-180 border-blue-500/30 text-blue-600" : "group-hover:border-slate-400"
                }`}>
                  {openIndex === idx ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-100"
                  >
                    <p className="px-6 py-5 text-sm leading-relaxed text-slate-600 font-sans bg-slate-50/40">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
