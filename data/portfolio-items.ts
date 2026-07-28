export interface PortfolioItem {
  id: string;
  title: string;
  category: "billing" | "ecommerce" | "mobile" | "erp" | "crm";
  clientName: string;
  location: string;
  description: string;
  impactMetrics: string;
  technologies: string[];
  imageUrl: string;
  challenge: string;
  solution: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "trichy-supermarket-pos",
    title: "Metro Mart GST POS & Inventory System",
    category: "billing",
    clientName: "Metro Mart Supermarket",
    location: "Thillai Nagar, Trichy",
    description: "A high-volume GST billing and multi-terminal POS software designed to handle fast checkouts and live stock updates for a popular supermarket chain.",
    impactMetrics: "3.5x faster checkouts, 0% stock discrepancies",
    technologies: ["Next.js", "Electron", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/images/portfolio/pos_preview.jpg", // We can use placeholder or generate later, let's specify path
    challenge: "The client suffered from frequent long checkout queues during peak hours, and manual inventory tracking led to expired products and out-of-stock items.",
    solution: "We deployed a dual offline-first billing terminal system that synchronizes in the background. It integrates thermal printing, barcode scanners, and custom inventory alerts."
  },
  {
    id: "handicrafts-ecommerce",
    title: "Cauvery Crafts Online Store",
    category: "ecommerce",
    clientName: "Cauvery Handicrafts Emporium",
    location: "Srirangam, Trichy",
    description: "A premium e-commerce platform showcasing regional wood carvings and brass icons, built for a global audience with localized payment options.",
    impactMetrics: "+180% sales growth, 45% international orders",
    technologies: ["React", "Node.js", "Express", "Razorpay", "PostgreSQL"],
    imageUrl: "/images/portfolio/ecommerce_preview.jpg",
    challenge: "The client wanted to transition from offline retail to online global sales while maintaining a high-end showcase aesthetic for delicate craftsmanship.",
    solution: "We designed a minimal, luxury glassmorphism layout with high-resolution media carousels, faceted search, international multi-currency processing, and native Razorpay UPI checkout."
  },
  {
    id: "trichy-delivery-app",
    title: "Tricarrier Logistics Mobile App",
    category: "mobile",
    clientName: "Tricarrier Express Delivery",
    location: "KK Nagar, Trichy",
    description: "An on-demand local delivery app in Trichy with live GPS tracking, dynamic delivery routing, and SMS/WhatsApp customer notification triggers.",
    impactMetrics: "22-minute average delivery time, 15k+ downloads",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
    imageUrl: "/images/portfolio/delivery_preview.jpg",
    challenge: "Managing coordinates for local delivery drivers in Trichy manually led to late shipments, misrouted parcels, and customer frustration.",
    solution: "We engineered a cross-platform mobile app for customers and drivers, combining live socket-based location tracking, shortest-route algorithms, and immediate WhatsApp delivery notifications."
  },
  {
    id: "metal-factory-erp",
    title: "VeloMetals Enterprise ERP Software",
    category: "erp",
    clientName: "VeloMetals Fabrication Ltd",
    location: "Tiruverumbur Industrial Area, Trichy",
    description: "An end-to-end ERP solution streamlining raw material inventory, assembly stages, worker shifts, payroll, and industrial billing sheets.",
    impactMetrics: "28% reduction in production delays, ₹4.5L monthly savings",
    technologies: ["Next.js", "Go", "PostgreSQL", "Docker", "Tailwind CSS"],
    imageUrl: "/images/portfolio/erp_preview.jpg",
    challenge: "Manual ledger booking and siloed software between inventory and dispatch led to factory idle times and inaccurate cost estimates.",
    solution: "We implemented a modular ERP architecture connecting the warehouse, floor manager, finance office, and executive boards with live production logs."
  },
  {
    id: "education-admissions-crm",
    title: "St. Joseph's Academy Admissions CRM",
    category: "crm",
    clientName: "St. Joseph's Academy Group",
    location: "Cantonment, Trichy",
    description: "A customer relationship platform built to manage inquiries, verify student documents, track counselor follow-ups, and automate fee schedules.",
    impactMetrics: "92% follow-up accuracy, 400+ hours saved annually",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    imageUrl: "/images/portfolio/crm_preview.jpg",
    challenge: "Managing thousands of incoming student inquiries via paper forms and Excel sheets caused massive delays and lost admissions leads.",
    solution: "We custom-built a cloud-based CRM with automated WhatsApp reminders, document verification pipelines, and counselor dashboards with live status analytics."
  },
  {
    id: "trichy-hospital-billing",
    title: "Kauvery Clinic POS & Pharmacy Management",
    category: "billing",
    clientName: "Kauvery Medical Clinic",
    location: "Woraiyur, Trichy",
    description: "A fast, GST-compliant billing software for a multi-specialty clinic pharmacy to manage batch expiries, drug inventory, and doctor prescriptions.",
    impactMetrics: "Zero inventory audit mismatches, instant receipt dispatch",
    technologies: ["Next.js", "SQLite", "Tailwind CSS", "TypeScript"],
    imageUrl: "/images/portfolio/pharmacy_preview.jpg",
    challenge: "The pharmacy struggled with tracking drug batches and expirations, leading to waste and slower billing speeds during rush clinic hours.",
    solution: "We created a localized POS application with barcode reading, auto-expiry locks, automatic chemical substitute lookup, and unified GST report export."
  }
];
