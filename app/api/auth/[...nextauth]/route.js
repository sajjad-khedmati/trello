import { User } from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";
import { verifyPassword } from "@/lib/utils";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
	],
	pages: {
		signIn: "/sign-in",
		error: "/sign-in",
	},
});

export { handler as GET, handler as POST };
