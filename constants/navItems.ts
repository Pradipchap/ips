import { INavSection } from "@/interfaces/componentInterfaces";
import { Frame } from "lucide-react";

export const NAV_ITEMS: INavSection[] = [
  {
    title: "",
    items: [
      { title: "Users Management", icon: Frame, navigation: "users" },
      { title: "Client Management", icon: Frame, navigation: "clients" },
      { title: "Tokens Management", icon: Frame, navigation: "tokens" },
      { title: "Sign Management", icon: Frame, navigation: "sign" },
      { title: "PDF Verification", icon: Frame, navigation: "verification" }
    ]
  }
];
