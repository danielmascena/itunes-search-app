interface iSearch {
    term: string,
    type?: "SONG" | "ARTIST" | "ALBUM" | "ALL"
}

interface IMedia {
    artistId: number,
    artistName: string,
    trackId: number,
    collectionName: string,
    artworkUrl100: string
}

type AppState = {
    search: iSearch;
    mediaCollection: IMedia[];
};

type SearchAction = {
    type: string;
    search: iSearch;
};

type DispatchType = (args: SearchAction) => SearchAction;
