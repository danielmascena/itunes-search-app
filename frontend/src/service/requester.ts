import axios from "axios";

const CONFIG_BASE_URL = "https://itunes.apple.com/search?limit=10";

enum MediaType {
    Track = "track",
    Collection = "collection",
    Artist = "artist",
}

/**
 * Abstraction for the http request library. 
 */
const instance = axios.create({
  baseURL: CONFIG_BASE_URL,
  timeout: 1000,
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
