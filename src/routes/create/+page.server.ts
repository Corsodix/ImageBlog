import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';


export const load = (async ({locals}) => {
    const {user} = await locals.auth.validateUser()
	
	return {
		posts: await prisma.post.findMany(),
        user
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	createPost: async ({ request, locals }) => {
		const { session, user } = await locals.auth.validateUser()
		if (!session || !user) {
			throw redirect(302, '/')
		}

		const { title, content,published } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>
        console.log(published)
		try {
			await prisma.post.create({
				data: {
					title,
					content,
                    published: published === 'on',
					userId: user.id
				}
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: 'Could not create the article.' })
		}

		return {
			status: 201
		}
	}
} 