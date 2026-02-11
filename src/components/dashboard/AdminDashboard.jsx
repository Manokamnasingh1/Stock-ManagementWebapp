import React, { useEffect, useState } from "react";
import "./Dnashboard.css";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    godownStock: 0,
    shopStock: 0,
    todaySales: 0,
  });
const BASE_URL = import.meta.env.VITE_API_URL;




  useEffect(() => {
    
    fetch(`${BASE_URL}/api/dashboard/summary`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-subtitle">
        View an overview of your business
      </p>

      <div className="dashboard-cards">
        <div className="summary-card blue">
          <p className="card-title">Total Products</p>
          <h3>{stats.totalProducts}</h3>
          <span>All products</span>
        </div>

        <div className="summary-card purple">
          <p className="card-title">Godown Stock</p>
          <h3>{stats.godownStock}</h3>
          <span>Total items in godown</span>
        </div>

        <div className="summary-card green">
          <p className="card-title">Shop Stock</p>
          <h3>{stats.shopStock}</h3>
          <span>Total items in shop</span>
        </div>

        <div className="summary-card orange">
          <p className="card-title">Today Sales</p>
          <h3>₹{stats.todaySales}</h3>
          <span>0 orders</span>
        </div>
      </div>

      <div className="shop-info">
        <h3>Shop Information</h3>
        <p><strong>Shop Name:</strong> Krishi Product Store</p>
        <p><strong>Address:</strong> Main Market, Siwan, Bihar</p>
      </div>
    </div>
  );
}
