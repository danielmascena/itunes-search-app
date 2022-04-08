import axios from "axios";

const CONFIG_BASE_URL = "https://itunes.apple.com/search?media=music&limit=10";
const axiosInterceptor = [
  (response) => response.data,
  (error) => Promise.reject(error),
];

/**
 * Abstraction for the http request library. 
 */
const instance = axios.create({
  baseURL: CONFIG_BASE_URL,
  timeout: 1000,
});

axios.interceptors.response.use(...axiosInterceptor);

function getInstance() {
  return instance;
}

export default getInstance;
