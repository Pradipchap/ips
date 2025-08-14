"use client";

import { usePathname, useRouter } from "next/navigation";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { NAV_ITEMS } from "@/constants/navItems";
import { cn } from "@/lib/utils"; // ShadCN utility for conditional classNames
import { useMemo } from "react";

export default function NavMain() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract first path segment once, not on every render in map
  const activeSegment = useMemo(() => pathname.split("/")[1] || "", [pathname]);

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <SidebarGroup className="gap-8">
      {NAV_ITEMS.map(section => (
        <div key={section.title}>
          <SidebarGroupLabel className="text-sm font-medium text-blue-900 tracking-tight text-balance">
            {section.title}
          </SidebarGroupLabel>

          <SidebarMenu className="gap-3">
            {section.items.map(({ title, icon: Icon, navigation }) => {
              const isCurrentRoute = activeSegment === navigation;

              return (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    tooltip={title}
                    onClick={() => handleNavigation(navigation)}
                    className={cn(
                      "h-16 transition-colors duration-300 ease-in-out", // smooth animation
                      isCurrentRoute ? "bg-blue-900 hover:bg-blue-800" : "bg-gray-300 hover:bg-gray-200"
                    )}
                  >
                    {Icon && <Icon color={isCurrentRoute ? "white" : "black"} />}
                    <h2
                      className={cn(
                        "text-base font-medium tracking-tight text-balance",
                        isCurrentRoute ? "text-white" : "text-black"
                      )}
                    >
                      {title}
                    </h2>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>
      ))}
    </SidebarGroup>
  );
}
