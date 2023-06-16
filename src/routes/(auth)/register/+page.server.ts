import { redirect, type Actions, fail } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

import { superValidate } from 'sveltekit-superforms/server';
import { authSchema } from '$lib/zod/schema';

/* const schema = z.object({
    password: z.string().min(3),
    name: z.string().min(2),
    surname: z.string().min(2),
    email: z.string().email(),
    division: z.string().min(1),
    firm: z.string(),
    about: z.string(),
    img: z.string()
}); */


export const load = async () => {
    // Server API:
    //const session = await locals.auth.validate()
    const form = await superValidate(authSchema);

    // Always return { form } in load and form actions.
    return { form };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, authSchema)
        if (!form.valid) {
            return fail(400, { form })
        }
        try {
            const user = await auth.createUser({
                primaryKey: {
                    providerId: 'email',
                    providerUserId: form.data.email,
                    password: form.data.password,
                },
                attributes: {
                    email: form.data.email,
                    name: form.data.name,
                    surname: form.data.surname,
                    role: 'USER',
                    email_verified: false,
                    division: form.data.division,
                    firm: form.data.firm,
                    about: form.data.about,
                    img: form.data.img
                }
            })
            const session = await auth.createSession(user.id);
            event.locals.auth.setSession(session);
        } catch (error) {
            return fail(400, { form })
        }
        //return {form}
        throw redirect(302, "/login")
    }
}

/* export const load: PageServerLoad = async ({ locals }) => {
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
}; */