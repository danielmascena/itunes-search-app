import * as actionTypes from "./actionTypes";

export function getArtists(searchTerm: iSearch) {
  const action: SearchAction = {
    type: actionTypes.SEARCH_BY_ARTIST,
    search: searchTerm
  };

  return (dispatch: DispatchType, getState, api) => {
    dispatch(action);
  }
}