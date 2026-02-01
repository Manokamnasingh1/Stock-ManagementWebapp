import "./AddProduct.css";

export default function AddProduct() {
  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <p className="subtitle">Add new product</p>

      <div className="card">
        <h3>📦 Product Details</h3>

        <div className="form-grid">
          <div>
            <label>Category *</label>
            <select>
              <option>Seed</option>
              <option>Fertilizer</option>
              <option>Pesticide</option>
            </select>
          </div>

          <div>
            <label>Company Name *</label>
            <input type="text" placeholder="Clause" />
          </div>

          <div>
            <label>Product Name *</label>
            <input type="text" placeholder="Bhindi Seed" />
          </div>

          <div>
            <label>Weight / Quantity *</label>
            <input type="text" placeholder="1 kg" />
          </div>

          <div>
            <label>MRP (₹) *</label>
            <input type="number" placeholder="1000" />
          </div>

          <div>
            <label>Selling Price (₹) *</label>
            <input type="number" placeholder="900" />
          </div>

          <div>
            <label>Minimum Selling Price (₹) *</label>
            <input type="number" placeholder="900" />
          </div>

          <div>
            <label>Initial Stock (Godown) *</label>
            <input type="number" placeholder="100" />
          </div>

          <div>
            <label>Low Stock Alert *</label>
            <input type="number" placeholder="10" />
          </div>
        </div>

        <div className="actions">
          <button className="btn">Add Product</button>
        </div>
      </div>
    </div>
  );
}
