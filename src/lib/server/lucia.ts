// lib/server/lucia.ts
import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import prisma from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { dev } from "$app/environment";
import { idToken } from "@lucia-auth/tokens";




export const auth = lucia({
	adapter: prisma(new PrismaClient()),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		//const userDt: Lucia.UserAttributes = userData
		const userDt = userData
		return userDt
	}
});

export const emailVerificationToken = idToken(auth, "email_verification", {
	expiresIn: 60 * 60 // 1 hour
});

export type Auth = typeof auth;


/* const sendEmail = async (emailAddress: string, subject: string, content: string) => {
	// framework for sending emails
};

export const sendEmailVerificationEmail = async (
	emailAddress: string,
	verificationToken: string
) => {
	const verificationLink = `http://localhost:5173/email-verification/${verificationToken}`;
	const emailContent = `Please verify your email by clicking the link below:<br/><br/>
<a href="${verificationLink}">${verificationLink}</a>`;
	await sendEmail(emailAddress, 'Email verification', emailContent);
}; */