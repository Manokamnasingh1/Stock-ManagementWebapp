import api from "./axios";

export const dailySummary = (date) =>
  api.get(`/reports/daily?date=${date}`);
