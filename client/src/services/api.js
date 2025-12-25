import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-3mf2.vercel.app/api",
  withCredentials: true, // for cookies/sessions if needed
});

export default api;
