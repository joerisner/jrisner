import { defineCollection, z } from 'astro:content';

const cheatSheets = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    type: z.string()
  })
});

export const collections = { cheatSheets };
