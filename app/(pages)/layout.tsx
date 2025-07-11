"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import axios from "axios";

export default function Layout({ children }: { children: React.ReactNode }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <div className="flex gap-4 items-center p-4 border-b">
          <div>
            <SidebarTrigger />
          </div>
          <div className="font-semibold text-3xl">Cryptrek</div>
        </div>
        {children}
      </div>
    </SidebarProvider>
  );
}
