import axios from 'axios';

const isDevelopment = process.env.NODE_ENV !== 'production';

const api = axios.create({
  baseURL: isDevelopment
    ? 'http://localhost:3333'
    : 'https://notes.gustavoharff.com/',
});

export default api;
