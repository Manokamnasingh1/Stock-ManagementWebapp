import axios from "./axios"; // your configured axios instance

// Transfer stock from Godown → Shop
export const transferStock = async (productId, quantity) => {
  try {
    const res = await axios.post("/stock/transfer", { productId, quantity });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Get all shop stock
export const getShopStock = async () => {
  try {
    const res = await axios.get("/stock/all");
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
