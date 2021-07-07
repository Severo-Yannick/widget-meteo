import axios from "axios";

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  timeout: 1000,
  params : {
    appid: '8bb32f4f381b78518a42a9cbc56034ba',
    units: 'metric',
  }
});

