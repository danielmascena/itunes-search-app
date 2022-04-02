import * as actionTypes from "./actionTypes";

export function addArticle(search: iSearch) {
  const action: SearchAction = {
    type: actionTypes.SEARCH_BY_ARTIST,
    search
  };

  return (dispatch: DispatchType) => dispatch(action);
}