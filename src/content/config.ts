import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('未命名文章'),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional().default(''),
    category: z.string().optional().default('台灣美食'),
    tags: z.array(z.string()).optional().default([]),
    pinned: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    password: z.string().optional().default(''),
    baseViews: z.number().optional().default(5280),
    templateType: z.string().optional(),
    seo: z.object({
      imageAlt: z.string().optional(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      ogImage: z.string().optional(),
    }).optional(),
  }).passthrough(),
});

export const collections = { blog };
