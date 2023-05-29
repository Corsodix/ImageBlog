import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';


export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) {
        throw redirect(302, '/')
    }
}

export const actions: Actions = {
    default: async ({ request }) => {
        const { email, password, name, surname, role, division, firm, about, img } = Object.fromEntries(
            await request.formData()
        ) as Record<string, string>

        try {
            await auth.createUser({
                primaryKey: {
                    providerId: 'email',
                    providerUserId: email,
                    password,
                },
                attributes: {
                    email, name, surname, role, division, firm, about, img
                }
            })
        } catch (error) {
            console.error("", error)
            return fail(400, { message: 'Could not register user'})
        }
        throw redirect(302, "/login")
    }
};