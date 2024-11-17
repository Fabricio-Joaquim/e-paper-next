import { FileText } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Documentos",
    url: "#",
    icon: FileText,
    height: 16,
    width: 16,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="offcanvas" side="left" className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-border/40  md:sticky md:block">
      <SidebarContent className="items-center">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <a href={item.url} className="group-data-[state=collapsed]:flex group-data-[state=collapsed]:items-center gap-2 w-full bg-primary-100">
                      <FileText />
                      <span className="uration-200 transition-all group-data-[state=collapsed]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}