import { User } from "@/lib/models/user.model";
import clientPromise from "@/lib/mongodbClient";
import { connectToDB } from "@/lib/mongoose";
import { verifyPassword } from "@/lib/utils";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
	providers: [
		CredentialsProvider({
			name: "Credentials",
			async authorize(credentials, req) {
				const { username, password } = credentials;

				if (!username || !password)
					throw new Error("please enter required field");

				await connectToDB();

				const user = await User.findOne({ username });
				if (!user) throw new Error("user not found");

				const passwordVerify = await verifyPassword(password, user.password);
				if (!passwordVerify) throw new Error("username or password incorrect");

				return user;
			},
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],

	pages: {
		signIn: "/sign-in",
		error: "/sign-in",
	},
	adapter: MongoDBAdapter(clientPromise),
	callbacks: {
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
