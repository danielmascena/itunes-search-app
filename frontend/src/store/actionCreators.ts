import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actions from "./actions";
import * as serviceAPI from "../service";

import { TOTAL_AMOUNT_CATEGORIES_TO_SEARCH } from "../config";

export type MediaThunk = ThunkAction<void, MediaState, null, Action<SearchAction>>;

const { min } = Math;

let listPointer = 0;
const getCurrentListType = (...rest: Array<Array<Media>>): Media[] => {
  const currentList = rest[listPointer % TOTAL_AMOUNT_CATEGORIES_TO_SEARCH];
  listPointer += 1;
  return currentList
};

export const fetchArtistByTerm = (): MediaThunk => async (dispatch: DispatchType, getState) => {
  const { searchTerm, offsetArtist, searchByArtist, listArtist: { length } } = getState();

  if (searchByArtist && length === 0) {
    const response = await serviceAPI.getMediaResourceArtistByTerm(searchTerm, offsetArtist, 10);
    if (response?.data) {
      if (response.data.resultCount > 0) {
        dispatch(actions.updateOffsetArtist(response.data.resultCount));
        dispatch(actions.setArtistList(response.data.results));
        return response.data.results;
      } else {
        dispatch(actions.setSearchOffByArtist());
      }
    }
  }
  return Promise.resolve();
};

export const fetchAlbumByTerm = (): MediaThunk => async (dispatch: DispatchType, getState) => {
  const { searchTerm, offsetAlbum, searchByAlbum, listAlbum: { length } } = getState();

  if (searchByAlbum && length === 0) {
    const response = await serviceAPI.getMediaResourceAlbumByTerm(searchTerm, offsetAlbum, 10);
    if (response?.data) {
      if (response.data.resultCount > 0) {
        dispatch(actions.updateOffsetAlbum(response.data.resultCount));
        dispatch(actions.setAlbumList(response.data.results));
        return response.data.results;
      } else {
        dispatch(actions.setSearchOffByAlbum());
      }
    }
  }
  return Promise.resolve();
};

export const fetchSongByTerm = (): MediaThunk => async (dispatch: DispatchType, getState) => {
  const { searchTerm, offsetSong, searchBySong, listSong: { length } } = getState();

  if (searchBySong && length === 0) {
    const response = await serviceAPI.getMediaResourceSongByTerm(searchTerm, offsetSong, 10);
    if (response?.data) {
      if (response.data.resultCount > 0) {
        dispatch(actions.updateOffsetSong(response.data.resultCount));
        dispatch(actions.setSongList(response.data.results));
        return response.data.results;
      } else {
        dispatch(actions.setSearchOffBySong());
      }
    }
  }
  return Promise.resolve();
};

export const loadResultsIntoCollection = (): MediaThunk => async (dispatch: DispatchType, getState) => {

  const { listArtist, listAlbum, listSong, mediaCollection } = getState();

  const { length: artistLen } = listArtist;
  const { length: albumLen } = listAlbum;
  const { length: songLen } = listSong;

  let count = min(10, artistLen + albumLen + songLen);
  let collectionEnhanced = [...mediaCollection];

  while (count > 0) {
    const singleSearchTypeList = getCurrentListType(listArtist, listAlbum, listSong);
    const itemPopped = singleSearchTypeList.shift();
    if (itemPopped) {
      collectionEnhanced = [...collectionEnhanced, itemPopped];
      count--;
    }
  }
  
  if (artistLen > listArtist.length) {
    dispatch(actions.setArtistList(listArtist));
  }
  if (albumLen > listAlbum.length) {
    dispatch(actions.setAlbumList(listAlbum));
  }
  if (songLen > listSong.length) {
    dispatch(actions.setSongList(listSong));
  }
  if (mediaCollection.length < collectionEnhanced.length) {
    dispatch(actions.setMediaCollection(collectionEnhanced));
  }
  return Promise.resolve();
};

export const fetchResultsByTypes = (): MediaThunk => async (dispatch: DispatchType, getState) => {

  return await Promise.all([
    dispatch(fetchArtistByTerm()),
    dispatch(fetchAlbumByTerm()),
    dispatch(fetchSongByTerm())
  ]);
};

export const fetchLoadResults = (): MediaThunk => (dispatch: DispatchType, getState) => {

  return dispatch(fetchResultsByTypes()).then(
    () => dispatch(loadResultsIntoCollection())
  );
};

export const defineSearchByTerm = (term: string): MediaThunk => async (dispatch: DispatchType, getState) => {
  const { searchTerm } = getState();

  if (term !== searchTerm) {
    await Promise.all([
      dispatch(actions.resetSearch()),
      dispatch(actions.setSearchByTerm(term))
    ]);
  }
  return dispatch(fetchLoadResults());
};


