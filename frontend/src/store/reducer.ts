import * as actionTypes from "./actionTypes";

const initialState: MediaState = {
    searchTerm: "",
    mediaCollection: [],
    listArtist: [],
    offsetArtist: 0,
    searchByArtist: true,
    listAlbum: [],
    offsetAlbum: 0,
    searchByAlbum: true,
    listSong: [],
    offsetSong: 0,
    searchBySong: true,
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
                mediaCollection: payload.list
            };
        case actionTypes.SET_ARTIST_LIST:
            return {
                ...state,
                listArtist: payload.list
            };
        case actionTypes.SET_SEARCH_OFF_BY_ARTIST:
            return {
                ...state,
                searchByArtist: false
            };
        case actionTypes.UPDATE_OFFSET_ARTIST:
            return {
                ...state,
                offsetArtist: state.offsetArtist + payload.offsetIncrement
            };
        case actionTypes.SET_ALBUM_LIST:
            return {
                ...state,
                listAlbum: payload.list
            };
        case actionTypes.SET_SEARCH_OFF_BY_ALBUM:
            return {
                ...state,
                searchByAlbum: false
            };
        case actionTypes.UPDATE_OFFSET_ALBUM:
            return {
                ...state,
                offsetAlbum: state.offsetAlbum + payload.offsetIncrement
            };
        case actionTypes.SET_SONG_LIST:
            return {
                ...state,
                listSong: payload.list
            };
        case actionTypes.SET_SEARCH_OFF_BY_SONG:
            return {
                ...state,
                searchBySong: false
            };
        case actionTypes.UPDATE_OFFSET_SONG:
            return {
                ...state,
                offsetSong: state.offsetSong + payload.offsetIncrement
            };
        case actionTypes.SET_RESULTS_LOAD_FINISHED:
            return {
                ...state,
                shouldLoadMoreResults: false
            };
        case actionTypes.RESET_SEARCH:
            return initialState;
        default:
            return state;
    }
};

export default reducer;