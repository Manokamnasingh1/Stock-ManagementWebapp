import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css"; // Import the CSS

// Import the logo from assets
import logo from "../assets/logo.jpg";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ADMIN");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
    console.log("LOGIN PAGE RENDERED");

  const handleLogin = () => {
    if (role === "ADMIN" && userId === "Admin" && password === "admin123") {
      setUser({ id: userId, role: "ADMIN" });
      navigate("/admin");
    } else if (role === "STAFF" && userId === "staff" && password === "staff123") {
      setUser({ id: userId, role: "STAFF" });
      navigate("/staff");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo */}
        <img src={logo} alt="Stock Management Logo" className="logo" />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ADMIN">Admin</option>
          <option value="STAFF">Staff</option>
        </select>

        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
