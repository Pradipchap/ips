import { API_TOKEN_LOCAL_KEY } from "@/constants/misc";

export const saveAPIToken = (value: string) => {
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${API_TOKEN_LOCAL_KEY}=${value}; path=/; samesite=strict${secure}`;
};
