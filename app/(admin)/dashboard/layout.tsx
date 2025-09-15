import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { UserProvider } from "@/context/UserContext"
import AppHeader from "@/components/AppHeader"
import AppSidebar from "@/components/AppSideBar"
import '../../../styles/tailwind.css'


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return redirect("/login")
  }

  const user = session?.user;
  return (
    <UserProvider user={user}>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <AppHeader user={user} />
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  )
}
