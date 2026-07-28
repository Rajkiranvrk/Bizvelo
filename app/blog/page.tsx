"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { blogPosts } from "@/data/blog-posts";

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { name: "All Articles", value: "all" },
    { name: "Billing Software", value: "Billing Software" },
    { name: "Website Development", value: "Website Development" },
    { name: "Mobile Apps", value: "Mobile Apps" },
    { name: "ERP Systems", value: "ERP" },
    { name: "CRM Platforms", value: "CRM" },
    { name: "SEO & Growth", value: "SEO" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-28 font-sans">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 overflow-hidden bg-slate-900 bg-grid-pattern border-b border-slate-800/60">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-poppins">
            Tech Blog & Strategy
          </div>
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-white tracking-tight">
            Knowledge Hub
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Read expert guides, tax-compliance alerts, and coding secrets from our software developers and SEO consultants in Trichy.
          </p>
        </div>
      </section>

      {/* 2. Search & Category Filters */}
      <section className="py-12 bg-slate-950 border-b border-slate-900 font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.value
                      ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/10"
                      : "bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-slate-900/40 border border-slate-800 focus:border-blue-500 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Blog Posts Grid */}
      <section className="py-20 bg-slate-950 min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <p className="text-slate-500 text-sm">No articles match your search parameters.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="text-xs font-semibold text-blue-400 hover:text-white transition-colors underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="flex">
                  <Link href={`/blog/${post.slug}`} className="flex w-full group">
                    <GlassCard className="w-full flex flex-col justify-between hover:scale-[1.01] duration-300 relative group overflow-hidden">
                      
                      <div className="space-y-4">
                        {/* Meta Category & Date */}
                        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-cyan-400 font-poppins">
                          <span>{post.category}</span>
                          <span className="text-slate-500">{post.date}</span>
                        </div>

                        {/* Title and Excerpt */}
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-poppins font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Author & Read Time footer */}
                      <div className="pt-6 border-t border-slate-800/60 mt-6 flex items-center justify-between text-xs text-slate-500 font-sans">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-400 group-hover:text-white transition-colors font-semibold">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>

                    </GlassCard>
                  </Link>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
