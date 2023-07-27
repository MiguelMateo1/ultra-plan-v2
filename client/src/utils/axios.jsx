import axios from 'axios';

const fetchUrl = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://ultra-plan.onrender.com',
});

export default fetchUrl;

