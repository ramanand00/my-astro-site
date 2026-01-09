import axios from "axios";

const api = axios.create({
  baseURL: "https://my-astro-site-zpfu.vercel.app/api",
  withCredentials: true, // for cookies/sessions if needed
});

export default api;
