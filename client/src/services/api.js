import axios from "axios";

const api = axios.create({
  baseURL: "https://ramanand-portfolio-backend.vercel.app/api",
  withCredentials: true, // for cookies/sessions if needed
});

export default api;
