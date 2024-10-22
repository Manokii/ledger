"use server";
import { signOut as authSignOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function signOut() {
  await authSignOut();
  redirect("/signin");
}
