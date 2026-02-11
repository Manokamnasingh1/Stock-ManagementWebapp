import { useEffect, useState } from "react";
import "./GodownStock.css";

export default function GodownStock() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    fetch("https://stockmangtback.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (products.length === 0) return <p>No products in godown</p>;

  return (
    <div className="godown-stock">
      <h2>Godown Stock</h2>

      <div className="stock-table">
        {/* Header */}
        <div className="table-header">
          <span>Product</span>
          <span>Company</span>
          <span>Stock</span>
        </div>

        {/* Rows */}
        {products.map((item) => (
          <div className="table-row" key={item._id}>
            <span>{item.productName}</span>
            <span>{item.companyName}</span>
            <span className={`qty ${item.initialStock === 0 ? "qty-zero" : ""}`}>
              {item.initialStock}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
