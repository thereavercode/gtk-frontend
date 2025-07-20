// src/api/axios.ts
import axios from "axios";

const username = import.meta.env.VITE_AUTH_USER || "cardinal";
const password = import.meta.env.VITE_AUTH_PASS || "supersecret";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8080",
  headers: {
    Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
      "base64"
    )}`,
  },
});

export default api;
// This code sets up an Axios instance with basic authentication and a base URL from environment variables.
// It uses the Buffer API to encode the username and password in base64 format for the Authorization header.
