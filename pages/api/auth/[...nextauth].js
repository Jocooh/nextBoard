import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { connectDB } from '@/util/database';

export const authOptions = {
  providers: [
    //깃헙로그인
    GithubProvider({
      clientId: process.env.REACT_APP_CLIENTID,
      clientSecret: process.env.REACT_APP_CLIENTSECRET,
    }),
  ],
  secret: process.env.REACT_APP_SECRET, //소셜은 JWT를 주로 사용
  adapter: MongoDBAdapter(connectDB), //
};
export default NextAuth(authOptions);
