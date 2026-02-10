import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import StaffDashboard from "./components/dashboard/StaffDashboard";
import StaffLayout from "./components/Layout/StaffLayout";
import AddProduct from "./products/AddProduct";
import StockManagement from "./stock/StockManagement";
import StockTransfer from "./stock/StockTransfer";
import GodownStock from "./stock/GodownStock";
import ShopStock from "./stock/ShopStock";
import Reports from "./stock/Reports";
import Settings from "./stock/Settings";

// PrivateRoute for authentication + role check
function PrivateRoute({ children, role }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>; // wait for auth context

  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/login" replace />;

  return children;
}

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/*"
        element={
          <PrivateRoute role="ADMIN">
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="stock-management" element={<StockManagement />} />
        <Route path="stock-transfer" element={<StockTransfer />} />
        <Route path="godown-stock" element={<GodownStock />} />
        <Route path="shop-stock" element={<ShopStock />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* STAFF ROUTES */}
      <Route
        path="/staff/*"
        element={
          <PrivateRoute role="STAFF">
            <StaffLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<StaffDashboard />} />
      </Route>

      {/* DEFAULT REDIRECT */}
      <Route
        path="*"
        element={
          <Navigate
            to={user ? (user.role === "ADMIN" ? "/admin" : "/staff") : "/login"}
            replace
          />
        }
      />
    </Routes>
  );
}
