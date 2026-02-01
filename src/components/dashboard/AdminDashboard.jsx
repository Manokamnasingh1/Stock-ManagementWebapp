import React from "react";
import "./Dnashboard.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-subtitle">
        View an overview of your business
      </p>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="summary-card blue">
          <p className="card-title">Total Products</p>
          <h3>0</h3>
          <span>All products</span>
        </div>

        <div className="summary-card purple">
          <p className="card-title">Godown Stock</p>
          <h3>0</h3>
          <span>Total items in godown</span>
        </div>

        <div className="summary-card green">
          <p className="card-title">Shop Stock</p>
          <h3>0</h3>
          <span>Total items in shop</span>
        </div>

        <div className="summary-card orange">
          <p className="card-title">Today Sales</p>
          <h3>₹0</h3>
          <span>0 orders</span>
        </div>
      </div>

      {/* Shop Info */}
      <div className="shop-info">
        <h3>Shop Information</h3>
        <p><strong>Shop Name:</strong> Krishi Product Store</p>
        <p><strong>Address:</strong> Main Market, Siwan, Bihar</p>
      </div>
    </div>
  );
}
