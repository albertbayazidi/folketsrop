import { defineCollection, z } from 'astro:content';

const artikkelsCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    description:z.string().optional(),
    image: z.string().optional(),
    main_tag: z.string(),
    sub_tags: z.array(z.string()).optional(),

 }),
})


export const collections = {
  'artikkels' : artikkelsCollection,

};
