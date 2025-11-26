import {
	checkout,
	polar,
	portal,
	usage,
	webhooks,
} from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { env } from "@/env";
import { db } from "@/server/db";
import { polarClient } from "@/server/polar/config";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite", // or "pg" or "mysql"
	}),
	emailAndPassword: {
		enabled: true,
	},
	// socialProviders: {
	// 	github: {
	// 		clientId: env.BETTER_AUTH_GITHUB_CLIENT_ID,
	// 		clientSecret: env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
	// 		redirectURI: "http://localhost:3000/api/auth/callback/github",
	// 	},
	// },
	plugins: [
		// polar({
		// 	client: polarClient,
		// 	createCustomerOnSignUp: false,
		// 	use: [
		// 		checkout({
		// 			successUrl: "/success?checkout_id={CHECKOUT_ID}",
		// 			authenticatedUsersOnly: true,
		// 		}),
		// 		portal(),
		// 		usage(),
		// 	],
		// }),
	],
	user: {
		deleteUser: {
			enabled: true,
			afterDelete: async (user, request) => {
				await polarClient.customers.deleteExternal({
					externalId: user.id,
				});
			},
		},
	},
});

export type Session = typeof auth.$Infer.Session;
