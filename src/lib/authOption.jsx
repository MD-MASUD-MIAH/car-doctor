import { logInUser } from "@/app/actions/auth/loginUser";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import dbConnect, { collectionNameObj } from "./dbConnect";

export const authOption = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        console.log(credentials);

        const user = await logInUser(credentials);

        console.log(user);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks:{

    async signIn({user,account,profile,email,credentials}){



      console.log({user,account,profile,email,credentials});

      if(account){

        const {providerAccountId,provider} = account 

        const {email:user_email,image,name
        } = user


        const userCollection = dbConnect(collectionNameObj.userCollection) 
        const isExit = await userCollection.findOne({providerAccountId})


        if(!isExit){

          const payload = {providerAccountId,provider,email:user_email,image,name}

          await userCollection.insertOne(payload)
        }

      }
      



    }
  }
};
