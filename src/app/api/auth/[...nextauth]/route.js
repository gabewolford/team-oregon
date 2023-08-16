import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (!passwordsMatch) {
            return null;
          }

          return user
        } catch (error) {
          console.log("Error: " + error)
        }

      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session: async ({ session, token }) => {
        session.id = token.id;
        session.jwt = token.jwt;
        session.user.firstName = token.firstName
        session.user.lastName = token.lastName
        session.user.createdAt = token.createdAt 
        return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
        if (user) {
            token.id = user.id;
            token.jwt = user.jwt;
            token.firstName = user.firstName 
            token.lastName = user.lastName 
            token.createdAt = user.createdAt 
        }
        return Promise.resolve(token);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
