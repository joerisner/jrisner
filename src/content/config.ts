import { defineCollection, z } from 'astro:content';

export const CHEAT_SHEET_TYPES = ['Bash/Shell', 'Docker', 'Git', 'Java', 'JavaScript'] as const;

const cheatSheets = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    type: z.enum(CHEAT_SHEET_TYPES)
  })
});

export const collections = { cheatSheets };
