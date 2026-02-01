import api from "./axios";

export const loginApi = async (data) => {
  // TEMP MOCK (until backend ready)
  if (data.userId === "admin" && data.password === "admin123") {
    return {
      token: "fake-jwt",
      role: "ADMIN",
      name: "Super Admin",
    };
  }

  throw new Error("Invalid credentials");
};
