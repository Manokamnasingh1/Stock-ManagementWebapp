import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function StaffSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button className="staff-sidebar-toggle" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Overlay */}
      {open && <div className="staff-overlay" onClick={() => setOpen(false)} />}

      <aside className={`staff-sidebar ${open ? "open" : ""}`}>
        <div className="staff-sidebar-header">
          <h3>Staff Panel</h3>
          <button className="staff-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="staff-menu">
          <NavLink to="/staff" onClick={() => setOpen(false)}>Dashboard</NavLink>
          <NavLink to="/staff/sales" onClick={() => setOpen(false)}>Sales Entry</NavLink>
          <NavLink to="/staff/stock" onClick={() => setOpen(false)}>Stock View</NavLink>
          <NavLink to="/login">Logout</NavLink>
        </nav>
      </aside>
    </>
  );
}
