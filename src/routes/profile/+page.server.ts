import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';


export const load = (async ({locals}) => {

    const post = prisma.


    const user = await locals.auth.validateUser()
    return {user}
}) satisfies PageServerLoad;