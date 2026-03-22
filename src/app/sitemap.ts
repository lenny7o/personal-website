import type { MetadataRoute } from 'next'
import { baseUrl } from '@/config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr`,
          en: `${baseUrl}/en`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/about`,
          en: `${baseUrl}/en/about`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/projects`,
          en: `${baseUrl}/en/projects`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/legal`,
          en: `${baseUrl}/en/legal`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
