import { useState } from "react";
import "./AddProduct.css";

/* 🔹 Initial state (used for reset also) */
const initialState = {
  category: "Seed",
  companyName: "",
  productName: "",
  quantity: "",
  unit: "",
  mrp: "",
  sellingPrice: "",
  minSellingPrice: "",
  initialStock: "",
  lowStockAlert: 10,
};
const BASE_URL = import.meta.env.VITE_API_URL;

export default function AddProduct() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  /* 🔹 Handle input change */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* 🔹 Submit form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      category: formData.category,
      companyName: formData.companyName,
      productName: formData.productName,
      weightQuantity: {
        quantity: Number(formData.quantity),
        unit: formData.unit,
      },
      mrp: Number(formData.mrp),
      sellingPrice: Number(formData.sellingPrice),
      minSellingPrice: Number(formData.minSellingPrice),
      initialStock: Number(formData.initialStock),
      lowStockAlert: Number(formData.lowStockAlert),
    };

    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/api/products/add`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to add product");
        setLoading(false);
        return;
      }

      alert("✅ Product added successfully");

      /* 🔥 CLEAR FORM */
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      alert("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <p className="subtitle">Add new product</p>

      <div className="card">
        <h3>📦 Product Details</h3>

        <form onSubmit={handleSubmit} className="form-grid">
          {/* Category */}
          <div>
            <label>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Seed">Seed</option>
              <option value="Fertilizer">Fertilizer</option>
              <option value="Pesticide">Pesticide</option>
            </select>
          </div>

          {/* Company Name */}
          <div>
            <label>Company Name *</label>
            <input
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Product Name */}
          <div>
            <label>Product Name *</label>
            <input
              name="productName"
              type="text"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Weight / Quantity */}
          <div>
            <label>Weight / Quantity *</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                name="quantity"
                type="number"
                placeholder="Qty"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
              <select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                required
              >
                <option value="">Unit</option>
                <option value="gm">Gram (gm)</option>
                <option value="kg">Kilogram (kg)</option>
                <option value="ltr">Liter (ltr)</option>
                <option value="pcs">Piece (pcs)</option>
              </select>
            </div>
          </div>

          {/* MRP */}
          <div>
            <label>MRP (₹) *</label>
            <input
              name="mrp"
              type="number"
              value={formData.mrp}
              onChange={handleChange}
              required
            />
          </div>

          {/* Selling Price */}
          <div>
            <label>Selling Price (₹) *</label>
            <input
              name="sellingPrice"
              type="number"
              value={formData.sellingPrice}
              onChange={handleChange}
              required
            />
          </div>

          {/* Minimum Selling Price */}
          <div>
            <label>Minimum Selling Price (₹) *</label>
            <input
              name="minSellingPrice"
              type="number"
              value={formData.minSellingPrice}
              onChange={handleChange}
              required
            />
          </div>

          {/* Initial Stock */}
          <div>
            <label>Initial Stock *</label>
            <input
              name="initialStock"
              type="number"
              value={formData.initialStock}
              onChange={handleChange}
              required
            />
          </div>

          {/* Low Stock Alert */}
          <div>
            <label>Low Stock Alert *</label>
            <input
              name="lowStockAlert"
              type="number"
              value={formData.lowStockAlert}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="actions">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
