import { INavSection } from "@/interfaces/componentInterfaces";
import { Users, Briefcase, Coins, Signature, FileCheck } from "lucide-react";

export const NAV_ITEMS: INavSection[] = [
  {
    title: "",
    items: [
      { title: "Users Management", icon: Users, navigation: "users" },
      { title: "Client Management", icon: Briefcase, navigation: "clients" },
      { title: "Tokens Management", icon: Coins, navigation: "tokens" },
      { title: "Sign Management", icon: Signature, navigation: "sign" },
      { title: "PDF Verification", icon: FileCheck, navigation: "verification" }
    ]
  }
];
