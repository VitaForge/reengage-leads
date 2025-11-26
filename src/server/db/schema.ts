import { relations } from "drizzle-orm";
import { boolean, index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

// Better Auth core tables
export const user = pgTable("user", {
	id: text()
		.notNull()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text(),
	email: text().notNull().unique(),
	emailVerified: boolean().default(false),
	image: text(),
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp().$onUpdate(() => new Date()),
});

export const userRelations = relations(user, ({ many }) => ({
	account: many(account),
	session: many(session),
}));

export const account = pgTable(
	"account",
	{
		id: text()
			.notNull()
			.primaryKey()
			.$defaultFn(() => crypto.randomUUID()),
		userId: text()
			.notNull()
			.references(() => user.id),
		accountId: text().notNull(),
		providerId: text().notNull(),
		accessToken: text(),
		refreshToken: text(),
		accessTokenExpiresAt: timestamp(),
		refreshTokenExpiresAt: timestamp(),
		scope: text(),
		idToken: text(),
		password: text(),
		createdAt: timestamp().defaultNow().notNull(),
		updatedAt: timestamp().$onUpdate(() => new Date()),
	},
	(t) => [index("account_user_id_idx").on(t.userId)]
);

export const accountRelations = relations(account, ({ one }) => ({
	user: one(user, { fields: [account.userId], references: [user.id] }),
}));

export const session = pgTable(
	"session",
	{
		id: text()
			.notNull()
			.primaryKey()
			.$defaultFn(() => crypto.randomUUID()),
		userId: text()
			.notNull()
			.references(() => user.id),
		token: text().notNull().unique(),
		expiresAt: timestamp().notNull(),
		ipAddress: text(),
		userAgent: text(),
		createdAt: timestamp().defaultNow().notNull(),
		updatedAt: timestamp().$onUpdate(() => new Date()),
	},
	(t) => [index("session_user_id_idx").on(t.userId)]
);

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const verification = pgTable(
	"verification",
	{
		id: text()
			.notNull()
			.primaryKey()
			.$defaultFn(() => crypto.randomUUID()),
		identifier: text().notNull(),
		value: text().notNull(),
		expiresAt: timestamp().notNull(),
		createdAt: timestamp().defaultNow().notNull(),
		updatedAt: timestamp().$onUpdate(() => new Date()),
	},
	(t) => [index("verification_identifier_idx").on(t.identifier)]
);
