import axios from "axios";

import { dispatch } from "../store/index";
import { setRequestFail } from "../store/actions";
import { convertDataFromAPItoMediaType } from "../helpers";
import { BASE_ENDPOINT_URL } from "../config";

enum MediaType {
  Track = "track",
  Collection = "collection",
  Artist = "artist",
}

/**
 * Abstraction for the http request library.
 */
const instance = axios.create({
  baseURL: BASE_ENDPOINT_URL,
  transformResponse: [
    (responseData) => {
      try {
        const { results, resultCount } = JSON.parse(responseData);
        const mediaList = results.map(convertDataFromAPItoMediaType);
        return { results: mediaList, resultCount };
      } catch (error) {
        dispatch(setRequestFail());
        throw Error(
          `[requestClient] Error parsingJSON data - ${JSON.stringify(error)}`
        );
      }
    },
  ],
});

function getInstance() {
  return instance;
}

export default getInstance;
