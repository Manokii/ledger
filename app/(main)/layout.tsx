import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

export default async function MainLayout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session?.user) {
    return redirect("/signin");
  }

  return (
    <SidebarProvider>
      <AppSidebar user={session.user}>
        <main className="px-4">{children}</main>
      </AppSidebar>
    </SidebarProvider>
  );
}
