import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api"; // Change this to your backend URL

const api = axios.create({
  baseURL: BASE_URL,
});

// Attach token to requests
api.interceptors.request.use((config) => {
  const tokens = localStorage.getItem("authTokens");
  if (tokens) {
    const { access } = JSON.parse(tokens);
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

export default api;
