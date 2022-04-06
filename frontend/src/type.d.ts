interface iSearch {
    term: string;
    type?: "SONG" | "ARTIST" | "ALBUM" | "ALL";
}
interface IMedia {
    artistId: number;
    artistName: string;
    trackId?: number;
    collectionName?: string;
    artworkUrl100?: string;
}
declare type AppState = {
    offset: number;
    limit: number;
    search: iSearch;
    mediaCollection: IMedia[];
};
declare type SearchAction = {
    type: string;
    search: iSearch;
};
declare type DispatchType = (args: SearchAction) => SearchAction;
/** Generate using https://app.quicktype.io/ */
