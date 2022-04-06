import * as actionTypes from "./actionTypes";

const initialState: AppState = {
    offset: 0,
    limit: 10,
    search: {
        term: "",
        type: "ALL"
    },
    mediaCollection: []
};

const reducer = (
    state: AppState = initialState,
    action: SearchAction
): AppState => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_OFFSET:
            return {
                ...state,
                offset: state.offset + 10
            }
        case actionTypes.CLEAN_UP_SEARCH:
            return initialState;
        default:
            return state;
    }
};

export default reducer;