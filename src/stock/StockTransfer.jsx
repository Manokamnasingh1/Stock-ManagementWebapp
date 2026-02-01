import React from "react";
import "./StockTransfer.css";

export default function StockTransfer() {
  return (
    <div className="transfer-page">
      <h2 className="page-title">Stock Transfer</h2>
      <p className="page-subtitle">
        Transfer stock from Godown to Shop
      </p>

      <div className="transfer-card">
        <h4 className="card-title">Godown → Shop Transfer</h4>

        {/* Product */}
        <div className="form-group">
          <label>Product *</label>
          <select>
            <option>
              Bhindi seed (clause) – Godown: 100
            </option>
          </select>
        </div>

        {/* Stock Info */}
        <div className="stock-info">
          <p>
            <strong>Godown Stock:</strong> 100
          </p>
          <p>
            <strong>Shop Stock:</strong> 0
          </p>
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label>Quantity *</label>
          <input type="number" placeholder="Enter transfer quantity" />
        </div>

        {/* Note */}
        <div className="form-group">
          <label>Note (Optional)</label>
          <textarea placeholder="Any remarks..." />
        </div>

        <button className="submit-btn">Transfer Stock</button>
      </div>
    </div>
  );
}
