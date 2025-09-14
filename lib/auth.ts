import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { username } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: new Database("./sqlite.db"),
  plugins: [username(), nextCookies()],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  emailAndPassword: {
    enabled: true
  }
})
