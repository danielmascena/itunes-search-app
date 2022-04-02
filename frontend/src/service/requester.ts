import axios from "axios";

/**
 * Abstraction for the http request library. 
 */
const instance = axios.create({
  baseURL: " https://itunes.apple.com/search?media=music&limit=10",
  timeout: 1000
});

function getInstance() {
  return instance;
}

export default getInstance;
