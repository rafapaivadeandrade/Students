import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.hatchways.io/api/assessment/students',
});

export default api;
