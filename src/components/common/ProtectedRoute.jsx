import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function PrivateRoute({ children, role }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>; // Wait for AuthContext

  if (!user) return <Navigate to="/login" replace />; // Not logged in
  if (role && user.role !== role) return <Navigate to="/login" replace />; // Role mismatch

  return children;
}

export default PrivateRoute;

