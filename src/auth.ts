import { AuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { connectToDatabase } from "./lib/server/mongodb";
import { ObjectId } from "mongodb";
import { checkAndUpdateUserTier } from "./app/api/user/service";

export enum UserTier {
  Trial = 0,
  Alpha,
}

if (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_CLIENT_SECRET) {
  throw new Error("Missing Discord OAuth credentials");
}

const auth: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "identify email",
          prompt: "consent",
        },
      },
    }),
  ],
  adapter: MongoDBAdapter(
    connectToDatabase().then((res) => res.client),
    {
      databaseName: "qrbtf",
    },
  ) as Adapter,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      try {
        if (token.sub) {
          session.user.id = token.sub;
        }

        if (user) {
          user.tier = await checkAndUpdateUserTier(user);
          session.user.tier = user.tier || UserTier.Trial;
          session.user.subscribe_time = user.subscribe_time;
          session.user.subscribe_expire = user.subscribe_expire;
        }

        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin", // Redirect to sign in page on error
  },
  debug: process.env.NODE_ENV === "development",
};

export default auth;
