import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../sidebar/AdminSidebar";
import Topbar from "../common/Topbar";
import "./Adminlayout.css";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="admin-main">
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
