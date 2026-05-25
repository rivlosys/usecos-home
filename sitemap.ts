import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://usecos.app';
  const routes = ['', '/mortgage', '/pay', '/vin', '/gst', '/blog'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // In a real implementation, you would fetch blog slugs from your file system or CMS here
  const blogs = ['how-much-house-can-i-afford-canada', 'mortgage-stress-test-canada'].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogs];
}