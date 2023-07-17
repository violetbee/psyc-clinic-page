import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { DefaultSession, NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from './db';
import { checkIsPwCorrect } from './crypt';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 3000,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user = {
          id: token.id,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        } as DefaultSession['user'];
      }
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          type: 'email',
        },
        password: {
          type: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });
        if (
          user &&
          checkIsPwCorrect(
            credentials?.password as string,
            user.password as string
          )
        ) {
          return user;
        } else {
          throw new Error('Kullanıcı adı veya şifre yanlış');
        }
      },
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
