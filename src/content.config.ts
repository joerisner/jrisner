import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const CHEAT_SHEET_TYPES = ['Bash/Shell', 'Docker', 'Git', 'Java', 'JavaScript', 'Python'] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    description: z.string(),
    heroImage: z.string(),
    isDraft: z.boolean(),
    publishDate: z.coerce.date(),
    title: z.string(),
    tags: z.array(z.string())
  })
});

const cheatSheets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cheat-sheets' }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    type: z.enum(CHEAT_SHEET_TYPES)
  })
});

export const collections = { blog, cheatSheets };
