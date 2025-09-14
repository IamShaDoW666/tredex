"use client"

import Link from "next/link"
import SignInForm from "./sign-in-form";

export default function SignInClient() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center">
            <h1 className="text-7xl md:text-9xl italic font-bold dark:text-foreground mb-4">TREDEX</h1>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-foreground dark:text-foreground">
            Sign in to your account
          </h3>
          <div className="py-7">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
            </div>
          </div>
          <SignInForm />

          <p className="pt-3 text-sm text-muted-foreground">
            By continue, you agree to our{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
