"use client";
import { useGetUsers } from "@/apis/queries";
import React from "react";

export default function UsersPage() {
  const { data } = useGetUsers({});
  console.log("users", data);
  return <div>page</div>;
}
