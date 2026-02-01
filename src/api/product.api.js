import api from "./axios";

export const getProducts = () => api.get("/products");
export const addProduct = (data) => api.post("/products", data);
