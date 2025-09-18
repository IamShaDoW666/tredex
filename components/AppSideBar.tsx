"use client"

import Link from "next/link"
import { Layers, LayoutDashboard } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import SignOutForm from "@/components/SignOutForm"
import { usePathname } from "next/navigation"
import { FaMoneyBill } from "react-icons/fa"

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname.startsWith(`/${path}`)
  }
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="flex items-center">
        <h1 className="text-3xl md:text-5xl italic font-bold dark:text-foreground mb-4">TREDEX</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-2 py-4">
          <SidebarMenuItem>
            <SidebarMenuButton isActive={pathname == "/dashboard"} size="lg">
              <Link href="/dashboard" className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                  <LayoutDashboard className="h-5 w-5" />
                </div>
                <span className={`text-sm font-medium`}>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={isActive("dashboard/categories")} size="lg">
              <Link href="/dashboard/categories" className={`flex items-center gap-3`}>
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                  <Layers />
                </div>
                <span className={`text-sm font-medium`}>Categories</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={isActive("dashboard/products")} size="lg">
              <Link href="/dashboard/products" className={`flex items-center gap-3`}>
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                  <Layers />
                </div>
                <span className={`text-sm font-medium`}>Products</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SignOutForm />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
