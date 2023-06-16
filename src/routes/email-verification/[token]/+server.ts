import { auth, emailVerificationToken } from "$lib/server/lucia";
import { LuciaTokenError } from "@lucia-auth/tokens";
import { redirect } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, locals }) => {
	const tokenParams = params.token;
	try {
		const token = await emailVerificationToken.validate(tokenParams);
		await auth.invalidateAllUserSessions(token.userId);
		await auth.updateUserAttributes(token.userId, {
			email_verified: true
		});
		const session = await auth.createSession(token.userId);
		locals.auth.setSession(session);
		// success
	} catch(e) {
		if (e instanceof LuciaTokenError && e.message === "EXPIRED_TOKEN") {
			// expired token/link
		}
		if (e instanceof LuciaTokenError && e.message === "INVALID_TOKEN") {
			// invalid link
		}
	}
};