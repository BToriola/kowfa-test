import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials) => {
      const payload = {
        phoneNumber: credentials.phoneNumber,
        countryCode: credentials.countryCode,
        otpCode: credentials.otpCode,
      };

      const res = await fetch(
        "https://xchange-ng.herokuapp.com/api/v1/auth/user/verifyOTP",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "*",
            // tenant: credentials.tenantKey,
            "Accept-Language": "en-US",
          },
        }
      );

      const user = await res.json();
      if (!res.ok) {
        throw new Error(user.message);
      }
      // If no error and we have user data, return it
      if (res.ok && user) {
        console.log("User found is ", user);
        return user;
      }
      //Return null if user data could not be retrieved
      return null;
    },
  }),
];

const callbacks = {
  jwt: async ({ token, user }) => {
    // console.log('JWTOKEN', data, user)
    // first time jwt callback is run, user object is available
    if (user && token) {
      token.user = user;
    }
    return token;
  },
  session: async ({ session, token, user }) => {
    if (token) {
      session.data = token;
      // session.user = token.user;
    }
    console.log("SESSIONTOKEN", session, token, user);
    // console.log('USERSESSION', data.user.data.user)
    return session;
  },
};

const options = {
  providers,
  callbacks,
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  pages: {
    error: "/verification", // Changing the error redirect page to our custom login page
  },
};

export default (req, res) => NextAuth(req, res, options);

// export default NextAuth({
//     providers: [
//         CredentialProvider({
//             name: "credentials",
//             credentials: {
//                 phone: { label: "Phone", type: "phone", placeholder: "phone" }
//             },
//             authorize: (credentials) => {
//                 if (message == "OTP  sent") {
//                     setLoading(false)
//                     router.push("/verification")
//                 }
//             }
//         })
//     ],
//     pages: {
//         signIn: '/'
//     }
// })
