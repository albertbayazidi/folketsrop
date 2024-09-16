import { defineCollection, z } from 'astro:content';

const kulturCollection = defineCollection({
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

const politikkCollection = defineCollection({
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

const naringslivCollection = defineCollection({
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

const meningCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    description:z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    respons_to: z.array(z.string()).optional(), 
 }),
})

export const collections = {
  'Politikk' : politikkCollection,
  'Kultur': kulturCollection,
  'Utenriks': utenriksCollection,
  'Mening': meningCollection,
  'Naringsliv': naringslivCollection,

};
