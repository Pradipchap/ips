"use client";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { NAV_ITEMS } from "@/constants/navItems";

const NavMain = () => {
  return (
    <SidebarGroup className=" gap-5">
      {NAV_ITEMS.map(section => {
        return (
          <div key={section.title}>
            <SidebarGroupLabel className="text-sm font-medium text-blue-900 tracking-tight text-balance">
              {section.title}
            </SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map(({ title, icon: Icon }) => {
                return (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton className="h-10" tooltip={title}>
                      {Icon && <Icon />}
                      <h2 className=" text-base font-medium tracking-tight text-balance">{title}</h2>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </div>
        );
      })}
    </SidebarGroup>
  );
};

export default NavMain;
