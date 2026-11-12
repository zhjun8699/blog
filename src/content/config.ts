import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('未命名文章'),
    description: z.string().optional().default(''),
    pubDate: z.union([z.string(), z.date()]).optional(),
    updatedDate: z.union([z.string(), z.date()]).optional(),
    heroImage: z.string().optional().default(''),
    category: z.string().optional().default('台灣美食'),
    tags: z.array(z.string()).optional().default([]),
    baseViews: z.number().optional().default(5280),
    draft: z.boolean().optional().default(false),
    templateType: z.string().optional(),
  }).passthrough(),
});

export const collections = { blog };
