import axios from 'axios';

const api = axios.create({
  baseURL: 'https://notes.gustavoharff.com/',
});

export default api;
