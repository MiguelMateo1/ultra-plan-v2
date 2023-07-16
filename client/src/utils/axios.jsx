import axios from 'axios';

const fetchUrl = axios.create({
  baseURL: 'http://localhost:8000',
});

export default fetchUrl;

