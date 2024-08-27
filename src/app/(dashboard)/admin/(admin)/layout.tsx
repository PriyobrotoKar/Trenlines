import Header from "@/components/admin/Header";
import Sidebar from "@/components/Sidebar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import SidebarProvider from "@/providers/SidebarProvider";
import SyncIndicatorProvider from "@/providers/SyncIndicatorProvider";
import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex p-8 min-h-svh gap-10">
      <SidebarProvider>
        <Sidebar />
        <ReactQueryProvider>
          <SyncIndicatorProvider>
            <div className="space-y-10 w-full lg:ml-[16rem]">
              <Header />
              {children}
            </div>
          </SyncIndicatorProvider>
        </ReactQueryProvider>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;
