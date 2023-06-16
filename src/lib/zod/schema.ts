import { z } from 'zod'

/* export const authSchema = z.object({
	email: z.string().email(),
	password: z.string(),
}) */

export const loginSchema = z.object({
    password: z.string().min(3),
    email: z.string().email(),
});


export const authSchema = z.object({
    password: z.string().min(3),
    name: z.string().min(2),
    surname: z.string().min(2),
    email: z.string().email(),
    division: z.string().min(1),
    firm: z.string(),
    about: z.string(),
    img: z.string()
});

export const postSchema = z.object({
	title: z.string().nonempty({ message: 'Missing title' }),
	slug: z.string().nonempty({ message: 'Missing slug' }),
	description: z.string().nonempty({ message: 'Missing descripton' }),
	markdown: z.string().nonempty({ message: 'Missing Markdown' }),
	published: z.boolean(),
})