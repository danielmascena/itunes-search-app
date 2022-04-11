import requester from "./requester";

import { dispatch } from "../store/index";
import { setRequestFail } from "../store/actions";
interface ServerResponse<T> {
  data: ResponseResult<T>;
  status: number;
}
interface ResponseResult<T> {
  resultCount: number;
  results: T[];
}

/*
 * entities: musicArtist (allArtist), album, mix, song.
 * attributes: mixTerm, genreIndex, artistTerm, composerTerm, albumTerm, ratingIndex, songTerm
 */

/* TODO: implement the cache strategy for all fetch functions using the memoize() from lodash utility library, like this:
 * import memoize from "lodash.memoize";
 * export const getMediaResourceArtistByTerm = memoize(async (searchTerm: string, offset = 0) => requester().get(...));
 */

// e.g. of the endpoint: https://itunes.apple.com/search?media=music&attribute=artistTerm&entity=musicArtist&term=iron
export const getMediaResourceArtistByTerm = async (
  searchTerm: string,
  offset = 0
) =>
  requester()
    .get<ServerResponse<Artist>>(
      `search?media=music&limit=10&entity=musicArtist&attribute=artistTerm&term=${encodeURI(
        searchTerm
      )}&offset=${offset}`
    )
    .catch((err) => {
      dispatch(setRequestFail());
      console.error(err);
    });

// e.g. of the endpoint: https://itunes.apple.com/search?media=music&attribute=albumTerm&entity=album&term=powerslave
export const getMediaResourceAlbumByTerm = async (
  searchTerm: string,
  offset = 0
) =>
  requester()
    .get<ServerResponse<Album>>(
      `search?media=music&limit=10&entity=album&attribute=albumTerm&term=${encodeURI(
        searchTerm
      )}&offset=${offset}`
    )
    .catch((err) => {
      dispatch(setRequestFail());
      console.error(err);
    });

// e.g. of the endpoint: https://itunes.apple.com/search?media=music&attribute=songTerm&entity=song&term=paranoid
export const getMediaResourceSongByTerm = async (
  searchTerm: string,
  offset = 0
) =>
  requester()
    .get<ServerResponse<Track>>(
      `search?media=music&limit=10&entity=song&attribute=songTerm&term=${encodeURI(
        searchTerm
      )}&offset=${offset}`
    )
    .catch((err) => {
      dispatch(setRequestFail());
      console.error(err);
    });
