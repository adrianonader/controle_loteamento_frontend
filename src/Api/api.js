import axios from "axios";

export const apiLotes = axios.create({
  baseURL: "http://localhost:3100/api/v1",
});

export const apiLoteamentos = axios.create({
  baseURL: "http://localhost:3100/api/v1",
});
