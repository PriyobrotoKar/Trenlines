import Header from "@/components/admin/Header";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex p-8 min-h-svh gap-10">
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
