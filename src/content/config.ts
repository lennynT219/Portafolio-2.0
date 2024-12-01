import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    description: z.string(),
    github: z.string().url(),
    img: z.string(),
    color: z.string(),
    technologies: z.array(z.string())
  })
})

export const collections = { projects }
