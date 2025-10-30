"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { authClient } from "@/lib/auth-client"

const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(4, { message: "Current password must be at least 4 characters" })
      .max(50, { message: "Password cannot exceed 50 characters" }),
    newPassword: z
      .string()
      .min(8, { message: "New password must be at least 8 characters" })
      .max(128, { message: "Password cannot exceed 128 characters" }),
    confirmNewPassword: z.string(),
    revokeOtherSessions: z.boolean(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  })

export default function ChangePasswordPage() {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      revokeOtherSessions: true,
    },
  })

  async function onSubmit(values: z.infer<typeof changePasswordSchema>) {
    const { currentPassword, newPassword, revokeOtherSessions } = values
    await authClient.changePassword(
      {
        currentPassword,
        newPassword,
        revokeOtherSessions,
      },
      {
        onRequest: () => {
          toast.loading("Updating password...")
        },
        onSuccess: () => {
          toast.dismiss()
          toast.success("Password updated successfully")
          form.reset({ currentPassword: "", newPassword: "", confirmNewPassword: "", revokeOtherSessions: true })
        },
        onError: (ctx) => {
          toast.dismiss()
          toast.error(ctx.error.message)
        },
      }
    )
  }

  return (
    <div className="py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your account password. You will stay signed in on this device.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* If you later add a checkbox to control sessions, wire it to revokeOtherSessions */}
              <div className="flex justify-end">
                <Button type="submit">Change Password</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
