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
			username: string;
			name: string;
			surname: string;
			email: string;
			role: string;
			division: string;
			firm?: string;
			about?: string;
		};
	}
}

export {};