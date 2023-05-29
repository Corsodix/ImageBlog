import type { LayoutServerLoad  } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
	//const { session, user } = await locals.auth.validateUser()
	const { user, session } = await locals.auth.validateUser()
	return { user }
}