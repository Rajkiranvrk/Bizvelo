import { servicesData } from "@/data/services-data";
import { blogPosts } from "@/data/blog-posts";

export async function GET() {
  const baseUrl = "https://bizvelo.com"; // Replace with your production domain

  const staticPages = ["", "/about", "/services", "/portfolio", "/blog", "/contact"];

  const servicePages = servicesData.map((service) => `/services/${service.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  const allPages = [...staticPages, ...servicePages, ...blogPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      const url = `${baseUrl}${page}`;
      const isBlog = page.startsWith("/blog/");
      const isService = page.startsWith("/services/");
      
      let priority = "0.5";
      let changefreq = "monthly";

      if (page === "") {
        priority = "1.0";
        changefreq = "weekly";
      } else if (isService) {
        priority = "0.9";
        changefreq = "weekly";
      } else if (isBlog) {
        priority = "0.8";
        changefreq = "weekly";
      } else if (page === "/services" || page === "/portfolio" || page === "/contact") {
        priority = "0.8";
        changefreq = "weekly";
      }

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
