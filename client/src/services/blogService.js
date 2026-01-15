import axios from 'axios';

const API_URL = 'https://ramanand-portfolio-backend.vercel.app/api/blogs'; // Replace with your backend URL

export const fetchBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
