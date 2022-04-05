import requester from "./requester";

/*
 * entities: musicArtist (allArtist), album, mix, song.
 * attributes: mixTerm, genreIndex, artistTerm, composerTerm, albumTerm, ratingIndex, songTerm
 */

export const getMediaResourceArtistByTerm = async (searchTerm: string) =>
  requester().get(`&entity=musicArtist&attribute=artistTerm&term=${encodeURI(searchTerm)}`);

export const getMediaResourceAlbumByTerm = async (searchTerm: string) =>
  requester().get(`&entity=album&attribute=albumTerm&term=${encodeURI(searchTerm)}`);

export const getMediaResourceSongByTerm = async (searchTerm: string) =>
  requester().get(`&entity=song&attribute=songTerm&term=${encodeURI(searchTerm)}`);


