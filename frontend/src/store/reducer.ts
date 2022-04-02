import * as actionTypes from "./actionTypes";

const initialState: AppState = {
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

        case actionTypes.CLEAN_UP_SEARCH:
            return initialState;
        default:
            return state;
    }
};

export default reducer;