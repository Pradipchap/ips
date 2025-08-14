"use client";
import * as React from "react";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { AudioWaveform } from "lucide-react";
const TeamSwitcher = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-5 items-center justify-center rounded-lg">
            <AudioWaveform className="size-5" />
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
export default TeamSwitcher;
