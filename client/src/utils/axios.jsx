import axios from 'axios';

const fetchUrl = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://ultra-plan.onrender.com',
  // baseURL: 'https://d424-software-engineering-capstone-1-8qpo.onrender.com',
});

export default fetchUrl;

