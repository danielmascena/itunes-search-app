import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionTypes from "./actionTypes";
import * as serviceAPI from "../service";


export const setSearchOffByArtist = () => ({
  type: actionTypes.SET_SEARCH_OFF_BY_ARTIST
});

export const setSearchOffByAlbum = () => ({
  type: actionTypes.SET_SEARCH_OFF_BY_ALBUM
});

export const setSearchOffBySong = () => ({
  type: actionTypes.SET_SEARCH_OFF_BY_SONG
});

export const loadMediaCollection = (list: Media[]) => ({
  type: actionTypes.SET_MEDIA_COLLECTION,
  payload: { list }
});

export const increaseOffsetForArtist = (increment: number) => ({
  type: actionTypes.SET_SEARCH_OFFSET,
  payload: {offset: increment}
})

export const setSearchByTerm = (term: string) => ({
    type: actionTypes.SET_SEARCH_TERM,
    payload: {term}
});

export const setCollectionSize = (size: number) => ({
  type: actionTypes.SET_COLLECTION_SIZE,
  payload: {size}
});

export const resetSearch = () => ({
  type: actionTypes.RESET_SEARCH
});

export const endLoadResults = () => ({
  type: actionTypes.SET_RESULTS_LOAD_FINISHED
});

export const fetchArtistByTerm = (): ThunkAction<void, MediaState, unknown, AnyAction> => {

  return async (dispatch: DispatchType, getState) => {
    const { searchTerm, collectionSize, shouldLoadMoreResults } = getState();

    if (shouldLoadMoreResults) {
      const response = await serviceAPI.getMediaResourceArtistByTerm(searchTerm, collectionSize, 10);
      if (response?.data) {
        if (response.data.resultCount > 0) {
          dispatch(loadMediaCollection(response.data.results));
          dispatch(setCollectionSize(response.data.resultCount + collectionSize));
        } else {
          dispatch(endLoadResults());
        }
      }
    }
  };
};

export const defineSearchByTerm = (term: string): ThunkAction<void, MediaState, unknown, AnyAction> => {

  return async (dispatch: DispatchType, getState) => {
    const { searchTerm } = getState();

    if (term !== searchTerm) {
      dispatch(resetSearch());
      dispatch(setSearchByTerm(term));
    }
    dispatch(fetchArtistByTerm());
  };
};

export const getMoreSearchResults = (size: number): ThunkAction<void, MediaState, unknown, AnyAction> => {

  return async (dispatch: DispatchType, getState) => {
    const { collectionSize } = getState();

    dispatch(increaseOffsetForArtist(size));
    dispatch(fetchArtistByTerm());
  };
};
