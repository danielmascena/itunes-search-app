import {useReducer} from "react";

export interface IFilterState {
    song: boolean;
    album: boolean;
    artist: boolean;
}

export type StateKeys = keyof IFilterState;

export type FilterAction = {
    type: "filterSong" | "filterAlbum" | "filterArtist" | "filterAll";
    payload?: { name?: StateKeys; value?: boolean; };
}

const initialState: IFilterState = {
    song: true,
    album: true,
    artist: true,
};

const filterReducer = (state: IFilterState, {type, payload: {name, value} = {}}: FilterAction) => {
    switch (type) {
        case "filterSong":
            return {
                ...state,
                song: value
            };
        case "filterAlbum":
            return {
                ...state,
                album: value
            };
        case "filterArtist":
            return {
                ...state,
                artist: value
            };
        default:
            return initialState;
    }
};

const useFilter = () => {
    const [filterValues, dispatch] = useReducer(filterReducer, initialState);

    return [filterValues, dispatch] as const;
};

export default useFilter;