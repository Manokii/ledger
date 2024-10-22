import { db } from "@/db";
import { accounts, sessions, users, verificationTokens } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { providers } from "./providers";

const adapter = DrizzleAdapter(db, {
  usersTable: users,
  accountsTable: accounts,
  sessionsTable: sessions,
  verificationTokensTable: verificationTokens,
});

/**
 * Override the default `createUser` method to add custom logic.
 */
const createUser: NonNullable<Adapter["createUser"]> = async (user) => {
  const userPromise = adapter.createUser?.(user);
  const createDefaultSettings = "qwe";

  const [adapterUser] = await Promise.all([userPromise]);

  if (!adapterUser) {
    throw new Error("Failed to create user");
  }

  return adapterUser;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: Object.assign(adapter, { createUser }),
  providers,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return Boolean(profile?.email_verified);
      }
      return true;
    },
  },
});
