import { defineCollection, z } from 'astro:content';

const classCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description:z.string().optional(),
    image: z.string().optional(),
 }),
})

const utenriksCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description:z.string().optional(),
    image: z.string().optional(),
 }),
})

export const collections = {
  'Klasse': classCollection,
  'Utenriks': utenriksCollection,
};
