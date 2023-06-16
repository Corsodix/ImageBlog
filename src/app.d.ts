import type { PrismaClient } from "@prisma/client";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			auth: import("lucia-auth").AuthRequest;
		 }
		// interface PageData {}
		// interface Platform {}
	}
	let __prisma: PrismaClient
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type UserAttributes = {
			name: string;
			surname: string;
			email: string;
			email_verified: boolean;
			role: string;
			division: string;
			firm?: string;
			about?: string;
			img?: string;
		};
	}
}

export {};