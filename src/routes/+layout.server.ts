import type { LayoutServerLoad  } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
	//const { session, user } = await locals.auth.validateUser()
	const { user } = await locals.auth.validateUser()
	const val = 1
	return { user, val }
}