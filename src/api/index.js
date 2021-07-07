import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:1234/data/2.5',
  timeout: 1000,
});

