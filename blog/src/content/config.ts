import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    pinned: z.boolean().optional().default(false),
    category: z.string().default('台灣美食'),
    templateType: z.string().optional().default('一般文章'),
    tags: z.array(z.string()).optional().default([]),
    heroImage: z.string().optional(),
    seo: z.object({
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      ogImage: z.string().optional(),
      imageAlt: z.string().optional(),
    }).optional(),
    placeInfo: z.object({
      enabled: z.boolean().optional().default(false),
      name: z.string().optional(),
      address: z.string().optional(),
      hours: z.string().optional(),
      phone: z.string().optional(),
      rating: z.string().optional(),
      mapUrl: z.string().optional(),
    }).optional(),
    promoCard: z.object({
      enabled: z.boolean().optional().default(false),
      title: z.string().optional(),
      image: z.string().optional(),
      price: z.string().optional(),
      summary: z.string().optional(),
      buttonText: z.string().optional(),
      url: z.string().optional(),
      trackingId: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog };
