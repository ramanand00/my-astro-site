import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs'; // Replace with your backend URL

export const fetchBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
