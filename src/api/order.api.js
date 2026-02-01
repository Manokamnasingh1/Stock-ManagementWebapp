import api from "./axios";

export const placeOrder = (data) => api.post("/orders", data);
export const getOrders = () => api.get("/orders");
export const approveOrder = (id) => api.put(`/orders/${id}/approve`);
