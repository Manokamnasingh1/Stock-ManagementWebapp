import React, { useEffect, useState } from "react";
import "./StockManagement.css";

export default function StockManagement() {
  const [stats, setStats] = useState({
    godownStock: 0,
    shopStock: 0,
  });
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/api/dashboard/summary`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats({
            godownStock: data.data.godownStock || 0,
            shopStock: data.data.shopStock || 0,
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="stock-page">
      <h2 className="page-title">Stock Management</h2>
      <p className="page-subtitle">Godown and Shop stock summary</p>

      <div className="stock-grid">
        {/* GODOWN CARD */}
        <div className="stock-card">
          <div className="stock-card-header purple">
            <span>🏬</span>
            <h3>Godown Stock</h3>
          </div>
          <div className="stock-count">{stats.godownStock}</div>
        </div>

        {/* SHOP CARD */}
        <div className="stock-card">
          <div className="stock-card-header green">
            <span>🏪</span>
            <h3>Shop Stock</h3>
          </div>
          <div className="stock-count">{stats.shopStock}</div>
        </div>
      </div>
    </div>
  );
}
