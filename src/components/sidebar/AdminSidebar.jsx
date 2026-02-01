import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Stock Manager</h2>

          {/* ❌ Close button (mobile only) */}
          <button
            className="sidebar-close"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/admin" onClick={() => setOpen(false)}>Dashboard</NavLink>
          <NavLink to="/admin/add-product" onClick={() => setOpen(false)}>Add Product</NavLink>
          <NavLink to="/admin/stock-management" onClick={() => setOpen(false)}>Stock Management</NavLink>
          <NavLink to="/admin/stock-transfer" onClick={() => setOpen(false)}>Stock Transfer</NavLink>
          <NavLink to="/admin/godown-stock" onClick={() => setOpen(false)}>Godown Stock</NavLink>
          <NavLink to="/admin/shop-stock" onClick={() => setOpen(false)}>Shop Stock</NavLink>
          <NavLink to="/admin/settings" onClick={() => setOpen(false)}>Settings</NavLink>
        </nav>
      </aside>
    </>
  );
}
