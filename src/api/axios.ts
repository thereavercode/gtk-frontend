// src/api/axios.ts
import axios from "axios";

const username = import.meta.env.VITE_AUTH_USER || "cardinal";
const password = import.meta.env.VITE_AUTH_PASS || "supersecret";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_PROD || "http://localhost:8080",
  headers: {
    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
  },
});

export default api;
