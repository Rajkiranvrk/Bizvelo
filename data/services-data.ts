export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  keywords: string[];
  features: string[];
  benefits: string[];
  targetAudience: string[];
  iconName: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "billing-software",
    title: "Billing Software Development",
    slug: "billing-software",
    shortDesc: "Premium GST Billing Software and POS solutions in Trichy tailored for retail shops, supermarkets, and restaurants to manage billing, inventory, and GST filing seamlessly.",
    longDesc: "Bizvelo Technology is the premier provider of Billing Software in Trichy, Tamil Nadu. We specialize in building custom, high-speed, secure, and user-friendly GST Billing Software and Point of Sale (POS) systems. Our solutions help local business owners in Trichy automate sales transactions, manage multi-store inventory, track vendor details, handle GST tax compliance, and generate insightful financial reports. Whether you run a busy supermarket in Cantonment, a boutique retail store in Thillai Nagar, or a multicuisine restaurant in KK Nagar, our software is designed to scale with your business operations.",
    keywords: ["Billing Software Trichy", "GST Billing Software Trichy", "POS Software Trichy", "Billing Software Company in Trichy"],
    features: [
      "Quick Billing & POS checkout (supports barcode scanners & thermal printers)",
      "Automated GST calculation & simplified GSTR report generation",
      "Real-time Inventory & stock alerts to prevent running out of items",
      "Customer Loyalty Program & discounts management module",
      "Multi-store synchronization & cloud data backup",
      "Comprehensive Sales, Purchase, and Profit reports"
    ],
    benefits: [
      "99% billing speed improvement compared to manual systems",
      "Accurate inventory tracking reducing losses by up to 25%",
      "Seamless GST filings ensuring zero tax penalties",
      "Works offline with automated sync to cloud once online"
    ],
    targetAudience: [
      "Supermarkets & Grocery Stores",
      "Retail Clothing & Footwear Outlets",
      "Restaurants & Cafes",
      "Pharma Shops & Healthcare Clinics",
      "Wholesale & Distribution Centers"
    ],
    iconName: "FileSpreadsheet"
  },
  {
    id: "website-development",
    title: "Website Design & Development",
    slug: "website-development",
    shortDesc: "Modern, secure, and highly optimized website development in Trichy. We build premium websites that rank #1 and convert visitors into long-term customers.",
    longDesc: "As the leading Website Development Company in Trichy, Bizvelo Technology crafts premium websites that reflect your brand's true caliber. We combine sleek aesthetics with technical SEO best practices to build high-converting corporate sites, responsive landing pages, and interactive web portals. Our team of skilled web developers and designers in Trichy utilizes the latest modern frameworks like React, Next.js, and Node.js to deliver websites with blazing-fast speeds, glassmorphism layouts, and mobile-first responsiveness. We ensure your business stands out online in local markets like Srirangam, Woraiyur, and across Tamil Nadu.",
    keywords: ["Website Development Company Trichy", "Web Design Company Trichy", "Website Development Services in Trichy"],
    features: [
      "Mobile-First Responsive Layouts that fit every screen size perfectly",
      "Stripe, Linear, and Apple-inspired modern glassmorphic designs",
      "Technical SEO configuration (Schema, fast page speed, clean semantics)",
      "Interactive landing pages with Framer Motion animations",
      "Content Management Systems (CMS) for easy updates",
      "Secure hosting setup & SSL integration"
    ],
    benefits: [
      "Enhanced local search ranking to drive organic inquiries",
      "Less than 2-second page load times for low bounce rates",
      "High-converting layouts that boost lead generation",
      "Seamless integration with social media and chat support (WhatsApp)"
    ],
    targetAudience: [
      "Startups & Tech Businesses",
      "Educational Institutions & Colleges",
      "Hospitals & Medical Centers",
      "Real Estate Agencies",
      "Professional Service Providers (Consultants, Lawyers)"
    ],
    iconName: "Code"
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    shortDesc: "Premium Android and iOS mobile application development in Trichy. Build a powerful, native-performing app for your brand to engage customers on the go.",
    longDesc: "Bizvelo Technology is an expert Mobile App Development Company in Trichy, delivering top-tier Android and iOS applications. We design and develop high-performance, secure, and intuitive apps that deliver native-grade experiences. From simple e-commerce utility apps to complex logistics and fintech applications, our Trichy-based app developers leverage Flutter, React Native, and native technologies to execute your vision. We handle the entire lifecycle—from UI/UX wireframing to App Store and Google Play Store deployment—helping Trichy businesses capture the mobile-first customer base.",
    keywords: ["Mobile App Development Company Trichy", "Android App Development Trichy", "Mobile App Development Experts in Trichy"],
    features: [
      "Cross-platform development (React Native & Flutter) for cost efficiency",
      "Intuitive, pixel-perfect user interfaces with micro-animations",
      "Push Notification engine to keep users active and engaged",
      "Offline local data caching for smooth performance without internet",
      "Secure payment gateway integrations (UPI, Cards, Wallets)",
      "Comprehensive admin panel dashboard for app management"
    ],
    benefits: [
      "Direct channel of communication with your customer base",
      "Enhanced brand loyalty and repeated purchases",
      "Robust data security protecting user credentials",
      "High rating on App store and Play store optimization"
    ],
    targetAudience: [
      "E-commerce Retailers",
      "Delivery & Logistics Startups",
      "Schools & Training Academies",
      "Booking & Appointment services",
      "Enterprise businesses wanting internal mobile portals"
    ],
    iconName: "Smartphone"
  },
  {
    id: "erp-development",
    title: "ERP Software Development",
    slug: "erp-development",
    shortDesc: "End-to-end Enterprise Resource Planning (ERP) systems in Trichy to streamline inventory, HR, finance, and operations in a unified central database.",
    longDesc: "Empower your organization with custom ERP Software from the top ERP Software Company in Trichy, Bizvelo Technology. We build robust enterprise software tailored to streamline manufacturing, tracking, finance, human resources, supply chain, and warehouse operations. Our modular ERP solutions connect every department of your enterprise in Trichy, ensuring data consistency, reducing manual paper workflows, and providing real-time operational transparency to decision-makers. Ideal for manufacturing hubs in Tiruverumbur, Kattur, and larger businesses across Trichy district.",
    keywords: ["ERP Software Company Trichy", "ERP Software Trichy", "Enterprise Software Trichy"],
    features: [
      "Modular design: Inventory, Procurement, Finance, HR, and CRM modules",
      "Real-time tracking of manufacturing stages and material usage",
      "Automated invoice processing and double-entry accounting reconciliation",
      "Employee attendance, payroll management, and performance logging",
      "Comprehensive dashboards with multi-level role permissions",
      "Automated reports scheduler for daily business operations"
    ],
    benefits: [
      "Elimination of double-data entry and information silos",
      "Up to 30% increase in operational productivity and tracking accuracy",
      "Accurate cost calculations for raw materials and final goods",
      "Data compliance with local industrial and tax standards"
    ],
    targetAudience: [
      "Manufacturing & Processing Units",
      "Construction & Real Estate Developers",
      "Large-Scale Wholesale Distributors",
      "Multi-Specialty Hospitals",
      "Educational Groups & Academies"
    ],
    iconName: "Layers"
  },
  {
    id: "crm-development",
    title: "CRM Software Development",
    slug: "crm-development",
    shortDesc: "Custom Customer Relationship Management systems in Trichy to monitor leads, manage sales pipelines, and improve customer retention rates.",
    longDesc: "Maximize your sales velocity and nurture customer loyalty with custom CRM solutions from Bizvelo Technology, the leading CRM Software Company in Trichy. Our custom CRM software enables your sales and support teams in Trichy to log lead interactions, manage deals, track follow-ups, and automate customer support tickets. We design CRM platforms that integrate seamlessly with your website, phone systems, email triggers, and WhatsApp campaigns, making sure no potential lead is lost in your sales funnel.",
    keywords: ["CRM Software Company Trichy", "CRM Software Trichy", "Customer Relationship Management Trichy"],
    features: [
      "Lead lifecycle tracking: Capture, qualify, assign, and convert",
      "Sales Pipeline visual board (Kanban drag-and-drop)",
      "Automated Email, SMS, and WhatsApp follow-up reminders",
      "Customer support ticketing system with SLA tracking",
      "Detailed sales representatives performance analysis reports",
      "API integrations with major marketing and database platforms"
    ],
    benefits: [
      "Increase in sales conversion rates by up to 35%",
      "Clarity on lead sources and marketing campaign performance",
      "Improved customer satisfaction with structured response times",
      "Consolidated history of every customer interaction in one profile"
    ],
    targetAudience: [
      "B2B Service Providers",
      "Financial & Insurance Advisors",
      "Real Estate Agencies",
      "IT Consultancies",
      "Educational Admissions teams"
    ],
    iconName: "Users"
  },
  {
    id: "ecommerce-development",
    title: "Ecommerce Website Development",
    slug: "ecommerce-development",
    shortDesc: "Premium, scalable e-commerce store development in Trichy with secure checkouts, local payment gateways, and lightning-fast product filtering.",
    longDesc: "Launch a high-converting online storefront with our Ecommerce Website Development in Trichy. Bizvelo Technology designs premium e-commerce solutions that make selling products online seamless. We focus on catalog speeds, simple navigation, frictionless checkout flows, secure UPI payment gateway configurations, and local delivery mapping. From Thillai Nagar clothing brands to Cantonment gourmet shops, we build custom e-commerce web applications that allow you to reach customers nationwide while optimizing local search terms.",
    keywords: ["Ecommerce Website Development Trichy", "E-commerce Website Trichy", "Online Store Development Trichy"],
    features: [
      "High-speed product catalog with faceted search & filtering",
      "Mobile-optimized checkout flows designed to minimize cart abandonment",
      "Integrated secure payment gateways (Razorpay, Instamojo, UPI, Card, NetBanking)",
      "Dynamic shipping rates, distance calculators, and tracking triggers",
      "Vendor and stock management dashboards for store administrators",
      "SEO optimized product pages with structured Schema markup"
    ],
    benefits: [
      "Open your store 24/7 to accept orders and collect payments",
      "Expanded reach beyond Trichy to state and national levels",
      "Lower operational costs compared to traditional physical outlets",
      "Comprehensive user habits analytics to plan seasonal promotions"
    ],
    targetAudience: [
      "Fashion & Apparel Brands",
      "Gourmet food & organic grocery outlets",
      "Electronics & Gadget retailers",
      "Handicrafts & local art stores",
      "Wholesale dealers transitioning online"
    ],
    iconName: "ShoppingBag"
  }
];
