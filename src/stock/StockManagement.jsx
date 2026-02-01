import React from "react";
import "./StockManagement.css";

export default function StockManagement() {
  return (
    <div className="stock-page">
      {/* Header */}
      <h2 className="page-title">Stock Management</h2>
      <p className="page-subtitle">
        View godown and shop stock
      </p>

      <div className="stock-grid">
        {/* Godown Stock */}
        <div className="stock-card">
          <div className="stock-card-header purple">
            <span>🏬</span>
            <h3>Godown Stock</h3>
          </div>

          <div className="stock-table">
            <div className="stock-row stock-head">
              <span>Product</span>
              <span>Stock</span>
            </div>

            <div className="stock-row">
              <div>
                <strong>Bhindi Seed</strong>
                <p>Clause · 1 kg</p>
              </div>
              <span className="badge dark">100</span>
            </div>
          </div>
        </div>

        {/* Shop Stock */}
        <div className="stock-card">
          <div className="stock-card-header green">
            <span>🏪</span>
            <h3>Shop Stock</h3>
          </div>

          <div className="stock-table">
            <div className="stock-row stock-head">
              <span>Product</span>
              <span>Stock</span>
            </div>

            <div className="stock-row">
              <div>
                <strong>Bhindi Seed</strong>
                <p>Clause · 1 kg</p>
              </div>
              <span className="badge danger">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
