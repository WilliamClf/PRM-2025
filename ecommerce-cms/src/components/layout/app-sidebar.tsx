import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ShoppingCart } from "lucide-react"
// This is sample data.
const data = {
    navMain: [
    {
      title: "Cadastros",
      url: "#",
      items: [
        {
          title: "Categorias",
          url: "/categories",
        },
        {
          title: "Marcas",
          url: "/brands",
        },
        {
          title: "Produtos",
          url: "/products",
        },
      ],
    },
    {
      title: "Vendas",
      url: "#",
      items: [
        {
          title: "Clientes",
          url: "/customers",
        },
        {
          title: "Pedidos",
          url: "/orders",
        },
      ],
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SideBarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                    <a href="#">
                        <div
                            className="bg-sidebar-primary text-sidebar-foreground
                                       flex aspect-square size-0 items-center
                                       justify-center rounded-lg">
                            <ShoppingCart/>
                        </div>
                        <div>
                            <span>
                                E-commerce-cms
                            </span>
                        </div>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SideBarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}