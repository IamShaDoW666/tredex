import { betterAuth, User } from "better-auth";
import Database from "better-sqlite3";
import { admin } from "better-auth/plugins"
export const auth = betterAuth({
  database: new Database("./sqlite.db"),
  plugins: [admin()],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  emailAndPassword: {
    enabled: true
  },
})
