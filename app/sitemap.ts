
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://juan-portfolio.example.com/", lastModified: new Date() }];
}
