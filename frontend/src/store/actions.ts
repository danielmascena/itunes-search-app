
import * as actionTypes from "./actionTypes";

export const setSearchOffByArtist = () => ({
  type: actionTypes.SET_SEARCH_OFF_BY_ARTIST
});

export const setSearchOffByAlbum = () => ({
  type: actionTypes.SET_SEARCH_OFF_BY_ALBUM
});

export const setSearchOffBySong = () => ({
  type: actionTypes.SET_SEARCH_OFF_BY_SONG
});

export const setMediaCollection = (list: Media[]) => ({
  type: actionTypes.SET_MEDIA_COLLECTION,
  payload: { list }
});

export const setSearchByTerm = (term: string) => ({
    type: actionTypes.SET_SEARCH_TERM,
    payload: { term }
});

export const resetSearch = () => ({
  type: actionTypes.RESET_SEARCH
});

export const endLoadResults = () => ({
  type: actionTypes.SET_RESULTS_LOAD_FINISHED
});

export const setArtistList = (list: Media[]) => ({
    type: actionTypes.SET_ARTIST_LIST,
    payload: { list }
});

export const setAlbumList = (list: Media[]) => ({
    type: actionTypes.SET_ALBUM_LIST,
    payload: { list }
});

export const setSongList = (list: Media[]) => ({
    type: actionTypes.SET_SONG_LIST,
    payload: { list }
});

export const updateOffsetArtist = (offsetIncrement: number) => ({
    type: actionTypes.UPDATE_OFFSET_ARTIST,
    payload: { offsetIncrement }
});

export const updateOffsetAlbum = (offsetIncrement: number) => ({
    type: actionTypes.UPDATE_OFFSET_ALBUM,
    payload: { offsetIncrement }
});

export const updateOffsetSong = (offsetIncrement: number) => ({
    type: actionTypes.UPDATE_OFFSET_SONG,
    payload: { offsetIncrement }
});