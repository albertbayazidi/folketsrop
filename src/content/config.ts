import { defineCollection, z } from 'astro:content';

const classCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    description:z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
 }),
})

const utenriksCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    description:z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
 }),
})

export const collections = {
  'Klasse': classCollection,
  'Utenriks': utenriksCollection,
};
