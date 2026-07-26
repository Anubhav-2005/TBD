import type { MetadataRoute } from "next";
import { caseStudies, industries, insights, services } from "@/config/marketing";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  return [
    "",
    "/pricing",
    "/process",
    "/contact",
    "/work",
    "/insights",
    "/calculators",
    ...services.map((item) => `/services/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...caseStudies.map((item) => `/work/${item.slug}`),
    ...insights.map((item) => `/insights/${item.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
