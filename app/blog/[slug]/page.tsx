import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, User, BookOpen } from "lucide-react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found | Bizvelo Technology",
    };
  }

  return {
    title: `${post.title} | Bizvelo Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://bizvelo.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 font-sans">
      
      {/* Article Header Banner */}
      <section className="relative py-16 overflow-hidden bg-slate-900 bg-grid-pattern border-b border-slate-800/60">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider mb-6 font-poppins"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-poppins bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-sans pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>By {post.author}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Article Body Content */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Article content */}
            <div className="lg:col-span-8">
              <div 
                className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans space-y-6 whitespace-pre-wrap"
              >
                {post.content}
              </div>

              {/* Tag Cloud */}
              <div className="border-t border-slate-800/60 mt-12 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-poppins">Target Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-slate-900 border border-slate-800/80 rounded-md text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA card */}
            <div className="lg:col-span-4">
              <GlassCard className="border border-slate-800/80 bg-blue-600/5 hover:border-blue-500/30 sticky top-28 space-y-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-poppins font-bold text-white leading-snug">Need a Custom Invoicing System?</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  We build GST POS systems and custom websites for retail merchants, educational groups, and manufacturers in Trichy.
                </p>
                <Button href="/contact?type=demo" variant="primary" className="w-full text-center">
                  Get Free Demo
                </Button>
              </GlassCard>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
