import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Topbar.css";

export default function Topbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <strong>Stock Manager</strong>
      </div>

      <div className="topbar-right">
        <span className="role">{user?.role}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
