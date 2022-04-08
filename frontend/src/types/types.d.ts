interface iSearch {
    term: string;
    type?: "SONG" | "ARTIST" | "ALBUM" | "ALL";
}
interface IMedia {
    mediaType: MediaType;
    artistId: number;
    artistName: string;
    primaryGenreName: string;
    collectionId?: string;
    collectionName?: string;
    trackId?: number;
    trackName?: string;
    artworkUrl100?: string;
    artistLinkUrl?: string;
}
declare enum MediaType {
    Track = "track",
    Collection = "collection",
    Artist = "artist"
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
interface Artist {
    wrapperType: WrapperArtistType;
    artistType: ArtistType;
    artistName: string;
    artistLinkUrl: string;
    artistId: number;
    amgArtistId?: number;
    primaryGenreName: string;
    primaryGenreId: number;
}
declare enum ArtistType {
    Artist = "Artist"
}
declare enum WrapperArtistType {
    Artist = "artist"
}
interface Track {
    wrapperType: WrapperTrackType;
    kind: Kind;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    releaseDate: Date;
    collectionExplicitness: Explicitness;
    trackExplicitness: Explicitness;
    discCount: number;
    discNumber: number;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable: boolean;
    contentAdvisoryRating?: ContentAdvisoryRating;
    collectionArtistId?: number;
    collectionArtistName?: string;
}
declare enum Explicitness {
    Cleaned = "cleaned",
    Explicit = "explicit",
    NotExplicit = "notExplicit"
}
declare enum ContentAdvisoryRating {
    Clean = "Clean",
    Explicit = "Explicit"
}
declare enum Kind {
    Song = "song"
}
declare enum WrapperTrackType {
    Track = "track"
}
interface Album {
    wrapperType: WrapperAlbumType;
    collectionType: CollectionType;
    artistId: number;
    collectionId: number;
    amgArtistId?: number;
    artistName: string;
    collectionName: string;
    collectionCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice?: number;
    collectionExplicitness: CollectionExplicitness;
    trackCount: number;
    copyright: string;
    country: string;
    currency: string;
    releaseDate: Date;
    primaryGenreName: string;
    contentAdvisoryRating?: string;
}
declare enum CollectionExplicitness {
    Explicit = "explicit",
    NotExplicit = "notExplicit"
}
declare enum CollectionType {
    Album = "Album"
}
declare enum WrapperAlbumType {
    Collection = "collection"
}
