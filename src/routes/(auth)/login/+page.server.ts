import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';

import { superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/zod/schema';


export const load = async ({ locals }) => {
    // Server API:
    const session = await locals.auth.validate()
    if (session) {
        throw redirect(302, '/')
    }

    const form = await superValidate(loginSchema);

    // Always return { form } in load and form actions.
    return { form };
};

/* 
export const actions: Actions = {
    default: async ({ request, locals}) => {
        const { email, password } = Object.fromEntries(
            await request.formData()
        ) as Record<string, string>

        try {
            const key = await auth.useKey('email', email, password)
            const session = await auth.createSession(key.userId)
            locals.auth.setSession(session)
        } catch (error) {
            console.error(error)
            return fail(400, {message: 'Could not login user.'})
        }
        throw redirect(302, "/")
    }
};

 */
export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, loginSchema)
        if (!form.valid) {
            return fail(400, { form })
        }
        try {
            //const user = await auth.useKey('email', form.data.email,form.data.password)
            const user = await auth.useKey('email', form.data.email, form.data.password)
            const session = await auth.createSession(user.userId);
            event.locals.auth.setSession(session);
        } catch (error) {
            return fail(400, { form })
        }
        //return {form}
        throw redirect(302, "/")
    }
}