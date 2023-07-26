import axios from 'axios';

const API_URI = 'http://localhost:3000/api';

export const registerRequest = (user) =>
  axios.post(`${API_URI}/register`, user);

export const loginRequest = (user) => axios.post(`${API_URI}/login`, user);
