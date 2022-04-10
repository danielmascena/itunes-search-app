import axios from "axios";

import { dispatch } from "../index";
import { setRequestFail } from "../store/actions";
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
        const {results, resultCount} = JSON.parse(responseData);
        const mediaList = results.map((result) => {

          const {artistId, artistName, artistLinkUrl, primaryGenreName, collectionName, collectionId, artworkUrl100, trackName, trackId} = result;
          switch (result.wrapperType) {
            case MediaType.Artist:
              return {
                mediaType: MediaType.Artist,
                artistId, 
                artistName, 
                artistLinkUrl, 
                primaryGenreName
              };
            case MediaType.Collection:
              return {
                mediaType: MediaType.Collection,
                artistId, 
                artistName, 
                artistLinkUrl, 
                primaryGenreName,
                collectionName, 
                collectionId, 
                artworkUrl100
              };
            case MediaType.Track:
              return {
                mediaType: MediaType.Track,
                artistId, 
                artistName, 
                artistLinkUrl, 
                primaryGenreName,
                collectionName, 
                collectionId, 
                artworkUrl100,
                trackId,
                trackName
              }
            default:
              return result;
          }
        });
        return {results: mediaList, resultCount};
      } catch (error) {
        dispatch(setRequestFail());
        throw Error(
          `[requestClient] Error parsingJSON data - ${JSON.stringify(
            error
          )}`
        );
      }
      
    },
  ],
});


function getInstance() {
  return instance;
}

export default getInstance;
