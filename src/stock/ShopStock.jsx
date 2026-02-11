import { useEffect, useState } from "react";
import "./ShopStock.css";

export default function ShopStock() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const fetchStocks = () => {
    fetch(`${BASE_URL}/api/stock/shop`)
      .then((res) => res.json())
      .then((data) => {
        setStocks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product from shop stock?")) return;

    try {
  const res = await fetch(
    `${BASE_URL}/api/stock/shop/${id}`,
    { method: "DELETE" }
  );

      if (res.ok) {
        fetchStocks(); // refresh list
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  if (stocks.length === 0) return <p>No stock in shop</p>;

  return (
    <div className="shop-stock">
      <h2>Shop Stock</h2>

      <div className="stock-table">
        <div className="table-header">
          <span>Product</span>
          <span>Company</span>
          <span>Qty</span>
          <span>Action</span>
        </div>

        {stocks.map((item) => (
          <div className="table-row" key={item._id}>
            <span>{item.productName}</span>
            <span>{item.companyName}</span>
            <span className="qty">{item.shopStock}</span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
