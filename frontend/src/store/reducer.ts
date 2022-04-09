import * as actionTypes from "./actionTypes";

const initialState: MediaState = {
    offset: 0,
    searchTerm: "",
    searchByArtist: true,
    searchBySong: true,
    searchByAlbum: true,
    mediaCollection: [],
    collectionSize: 0,
    shouldLoadMoreResults: true
};

const reducer = (
    state: MediaState = initialState,
     {type, payload }: SearchAction
): MediaState => {
    switch (type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: payload.term
            };
        case actionTypes.SET_MEDIA_COLLECTION:
            return {
                ...state,
                mediaCollection: [...state.mediaCollection, ...payload.list],
            }
        case actionTypes.SET_SEARCH_OFF_BY_ARTIST:
            return {
                ...state,
                searchByArtist: false
            };
        case actionTypes.SET_SEARCH_OFF_BY_ALBUM:
            return {
                ...state,
                searchByAlbum: false
            };
        case actionTypes.SET_SEARCH_OFF_BY_SONG:
            return {
                ...state,
                searchBySong: false
            };
        case actionTypes.SET_SEARCH_OFFSET:
            return {
                ...state,
                offset: payload.offset
            };
        case actionTypes.SET_COLLECTION_SIZE:
            return {
                ...state,
                collectionSize: payload.size
            }
        case actionTypes.SET_RESULTS_LOAD_FINISHED:
            return {
                ...state,
                shouldLoadMoreResults: false
            }
        case actionTypes.RESET_SEARCH:
            return initialState;
        default:
            return state;
    }
};

export default reducer;