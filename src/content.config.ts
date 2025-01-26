import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url(),
    github: z.string().url(),
    tailwindClasses: z.string(),
    path: z.string(),
    nextPath: z.string(),
    prevPath: z.string()
  })
})

export const collections = { projects }