import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://deskify-api.vercel.app', // Base URL API from environment variable
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
