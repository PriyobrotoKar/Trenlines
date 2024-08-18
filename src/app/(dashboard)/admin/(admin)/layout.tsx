import Header from "@/components/admin/Header";
import Sidebar from "@/components/Sidebar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex p-8 min-h-svh gap-10">
      <Sidebar />
      <ReactQueryProvider>
        <div className="space-y-10 w-full ml-[16rem]">
          <Header />
          {children}
        </div>
      </ReactQueryProvider>
    </div>
  );
};

export default AdminLayout;
