import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";

import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { env } from "~/env";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      username: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/success`;
    },
    async session({ session }) {
      return session;
    },
  },
  providers: [
    TwitterProvider({
      clientId: env.TWITTER_CLIENT_ID,
      clientSecret: env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
