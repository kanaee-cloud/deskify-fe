import axios from 'axios';

const api = axios.create({
  baseURL:'https://deskify-api.vercel.app', // Base URL API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
