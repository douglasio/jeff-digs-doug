import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PATHS } from "_util";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "password",
			credentials: {
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials, _request) {
				if (credentials?.password == process.env.NEXTAUTH_PASSWORD) {
					console.log("Password was correct");
					return { id: "0" };
				} else {
					console.log("Password was incorrect");
					return null;
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: PATHS.PAGES.SIGN_IN,
	},
};
