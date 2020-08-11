import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-note-app-server.herokuapp.com',
});

export default api;
