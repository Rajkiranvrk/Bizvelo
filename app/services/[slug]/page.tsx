import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  Check, 
  ArrowLeft, 
  Smartphone, 
  Code, 
  FileSpreadsheet, 
  Layers, 
  Users, 
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services-data";

// Helper to resolve icon by string name
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSpreadsheet,
  Code,
  Smartphone,
  Layers,
  Users,
  ShoppingBag
};

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-generate static paths for Next.js build optimization
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic metadata for SEO targeting Trichy keywords
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Bizvelo Technology",
    };
  }

  const primaryKeyword = service.keywords[0];

  return {
    title: `${service.title} in Trichy | Best ${primaryKeyword} Company`,
    description: `${service.shortDesc} Serving major Trichy areas including Thillai Nagar, Srirangam, Cantonment, and Tiruverumbur.`,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} in Trichy | Bizvelo Technology`,
      description: service.shortDesc,
      url: `https://bizvelo.com/services/${service.slug}`,
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Code;

  return (
    <div className="pt-28 pb-16 font-sans">
      
      {/* Header Banner */}
      <section className="relative py-16 overflow-hidden bg-slate-900 bg-grid-pattern border-b border-slate-800/60">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link 
            href="/services" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider mb-6 font-poppins"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <IconComponent className="w-6 h-6" />
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-poppins font-bold text-white tracking-tight">
              {service.title}
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              {service.shortDesc}
            </p>
          </div>

        </div>
      </section>

      {/* Main Body Details */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Full Copywrite & Targets */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Description */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-poppins font-bold text-white">Service Overview</h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                  {service.longDesc}
                </p>
              </div>

              {/* Core Features list */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-poppins font-bold text-white">Features Included</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Benefits */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-poppins font-bold text-white">Key Operations Impact</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <GlassCard key={idx} className="p-6 border border-slate-800/80">
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                        {benefit}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sidebar Target Audiences & CTA */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Target Markets */}
              <GlassCard className="border border-slate-800/80 space-y-6">
                <h3 className="text-lg font-poppins font-bold text-white">Who is this for?</h3>
                <ul className="space-y-3 text-sm">
                  {service.targetAudience.map((audience, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{audience}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Contact Lead Card */}
              <GlassCard className="border border-slate-800/80 bg-blue-600/5 hover:border-blue-500/30 space-y-6">
                <h3 className="text-lg font-poppins font-bold text-white">Request Consultation</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Have questions about integrating {service.title} with your existing hardware or cloud platform in Trichy? We provide a free audit.
                </p>
                <Button 
                  href={`/contact?type=consultation&service=${service.id}`} 
                  variant="primary" 
                  className="w-full text-center group"
                >
                  <span>Request Callback</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </GlassCard>

            </div>

          </div>

        </div>
      </section>

      {/* Target Local Areas Block (SEO Booster) */}
      <section className="py-12 bg-slate-900 border-t border-slate-800/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 space-y-2">
          <p>
            Our tech representatives offer on-site software installation and support across all major locations in <strong>Tiruchirappalli, Tamil Nadu</strong>:
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Thillai Nagar • Srirangam • KK Nagar • Cantonment • Woraiyur • Kattur • Tiruverumbur • Lalgudi • Manachanallur • Musiri • Thuraiyur • Samayapuram
          </p>
        </div>
      </section>

    </div>
  );
}
