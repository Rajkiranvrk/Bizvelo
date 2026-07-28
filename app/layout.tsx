import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsappCTA from "@/components/ui/WhatsappCTA";
import SchemaMarkup from "@/components/ui/SchemaMarkup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bizvelo Technology | Best Software Company in Trichy | Billing Software, Website & Mobile App Development",
  description: "Bizvelo Technology is a leading software company in Trichy offering Billing Software, Website Development, Mobile App Development, ERP, CRM and Custom Software Solutions for businesses across Tamil Nadu.",
  keywords: [
    "Billing Software Trichy",
    "Software Company Trichy",
    "Website Development Company Trichy",
    "Web Design Company Trichy",
    "Mobile App Development Company Trichy",
    "ERP Software Trichy",
    "CRM Software Trichy",
    "GST Billing Software Trichy",
    "POS Software Trichy",
    "Best Software Company in Trichy",
    "Custom Software Development Trichy"
  ],
  metadataBase: new URL("https://bizvelo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bizvelo Technology | Best Software Company in Trichy",
    description: "Leading software company in Trichy providing ERP, CRM, custom web and mobile app development, and POS billing software solutions.",
    url: "https://bizvelo.com",
    siteName: "Bizvelo Technology",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bizvelo Technology - Software Company in Trichy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizvelo Technology | Best Software Company in Trichy",
    description: "Empower your business with custom billing software, mobile apps, and premium websites built by Bizvelo Technology in Trichy.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Dynamic Schema JSON-LD Markup */}
        <SchemaMarkup />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col justify-between`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsappCTA />
      </body>
    </html>
  );
}
