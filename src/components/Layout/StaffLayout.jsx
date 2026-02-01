import { Outlet } from "react-router-dom";
import StaffSidebar from "../sidebar/StaffSidebar";
import Topbar from "../common/Topbar";
import "./StaffLayout.css";

export default function StaffLayout() {
  return (
    <div className="staff-layout">
      <StaffSidebar />

      <div className="staff-content">
        <Topbar />
        <div className="staff-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
