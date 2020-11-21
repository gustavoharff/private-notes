import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://192.168.1.102:3333',
// });

const api = axios.create({
  baseURL: 'https://notes.gustavoharff.com',
});

export default api;
