import api from "./axios";

export const getGodownStock = () => api.get("/stock/godown");
export const getShopStock = () => api.get("/stock/shop");
