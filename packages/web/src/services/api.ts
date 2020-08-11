import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-note-app.netlify.app',
});

export default api;
