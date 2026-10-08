import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		status: z.enum(['active', 'prototyping', 'completed', 'archived']),
		category: z.string(),
		tech: z.array(z.string()).default([]),
		start_date: z.string().optional(),
		github_repo: z.string().url().optional(),
		summary: z.string(),
		starter: z.boolean().default(false),
	}),
});

const docs = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
	schema: z.object({
		title: z.string(),
		category: z.enum(['hardware', 'software']),
		summary: z.string(),
		order: z.number().default(0),
		starter: z.boolean().default(false),
	}),
});

export const collections = { projects, docs };