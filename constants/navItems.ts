import { INavSection } from "@/interfaces/componentInterfaces";
import { Frame } from "lucide-react";

export const NAV_ITEMS: INavSection[] = [
  {
    title: "ACCOUNT",
    items: [
      { title: "Api Tokens", icon: Frame, navigation: "" },
      { title: "Companies", icon: Frame, navigation: "" },
      { title: "Users", icon: Frame, navigation: "" }
    ]
  },
  {
    title: "ADVERTISEMENT",
    items: [
      { title: "Ads With Images", icon: Frame, navigation: "" },
      { title: "Advertisers", icon: Frame, navigation: "" }
    ]
  },
  { title: "AUTHENTICATION AND AUTHORIZATION", items: [{ title: "Groups", icon: Frame, navigation: "" }] },
  {
    title: "CERTMGR",
    items: [
      { title: "Clients", icon: Frame, navigation: "" },
      { title: "Company Private Keys", icon: Frame, navigation: "" }
    ]
  }
];
