import axios from 'axios';

const API_URL = 'https://my-astro-site-zpfu.vercel.app/api/blogs'; // Replace with your backend URL

export const fetchBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
