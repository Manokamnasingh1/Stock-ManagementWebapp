import { useEffect, useState } from "react";
import "./StockTransfer.css";

export default function StockTransfer() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch("https://stockmangtback.onrender.com/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Product select
  const handleProductChange = (e) => {
    const product = products.find((p) => p._id === e.target.value);
    setSelectedProduct(product);
    setQuantity("");
    setNote("");
  };
  const BASE_URL = import.meta.env.VITE_API_URL;

  // Transfer stock
  const handleTransfer = async () => {
    if (!selectedProduct) {
      alert("Please select a product");
      return;
    }

    if (!quantity || Number(quantity) <= 0) {
      alert("Enter valid quantity");
      return;
    }

    if (Number(quantity) > selectedProduct.initialStock) {
      alert("Not enough godown stock");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/stock/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: selectedProduct._id,
          quantity: Number(quantity),
          note,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Transfer failed");
        setLoading(false);
        return;
      }

      alert("✅ Stock transferred successfully");

      // Refresh product list & selected product
      await fetchProducts();
      setSelectedProduct(null);
      setQuantity("");
      setNote("");
    } catch (error) {
      console.error(error);
      alert("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transfer-page">
      <h2 className="page-title">Stock Transfer</h2>
      <p className="page-subtitle">Transfer stock from Godown to Shop</p>

      <div className="transfer-card">
        <h4 className="card-title">Godown → Shop Transfer</h4>

        {/* Product Select */}
        <div className="form-group">
          <label>Product *</label>
          <select value={selectedProduct?._id || ""} onChange={handleProductChange}>
            <option value="">Select product</option>
            {products.map((p) => (
              <option key={p._id} value={p._id}>
                {p.productName} ({p.companyName}) – Godown: {p.initialStock}
              </option>
            ))}
          </select>
        </div>

        {/* Stock Info */}
        {selectedProduct && (
          <div className="stock-info">
            <p>
              <strong>Godown Stock:</strong> {selectedProduct.initialStock}
            </p>
            <p>
              <strong>Shop Stock:</strong> {selectedProduct.shopStock || 0}
            </p>
          </div>
        )}

        {/* Quantity */}
        <div className="form-group">
          <label>Quantity *</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter transfer quantity"
          />
        </div>

        {/* Note */}
        <div className="form-group">
          <label>Note (Optional)</label>
          <textarea
            placeholder="Any remarks..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          className="submit-btn"
          onClick={handleTransfer}
          disabled={loading}
        >
          {loading ? "Transferring..." : "Transfer Stock"}
        </button>
      </div>
    </div>
  );
}
