import api from "./axios";

export const getUsers = () => api.get("/users");
export const addUser = (data) => api.post("/users", data);
