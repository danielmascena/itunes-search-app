
interface Media {
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

enum MediaType {
    Track = "track",
    Collection = "collection",
    Artist = "artist",
}

type MediaState = {
    searchTerm: string;
    mediaCollection: Media[];
    listArtist: Media[];
    offsetArtist: number;
    searchByArtist: boolean;
    listAlbum: Media[];
    offsetAlbum: number;
    searchByAlbum: boolean;
    listSong: Media[];
    offsetSong: number;
    searchBySong: boolean;

    shouldLoadMoreResults: boolean;
};

type PayloadSearch = { 
    term?: string;
    list?: Media[];
    offsetIncrement?: number;
};

type SearchAction = {
    type: string;
    payload?: PayloadSearch;
};

type DispatchType = (args: SearchAction) => SearchAction;


/** Generate using https://app.quicktype.io/ */

interface Artist {
    wrapperType:      WrapperArtistType;
    artistType:       ArtistType;
    artistName:       string;
    artistLinkUrl:    string;
    artistId:         number;
    amgArtistId?:     number;
    primaryGenreName: string;
    primaryGenreId:   number;
}

enum ArtistType {
    Artist = "Artist",
}

enum WrapperArtistType {
    Artist = "artist",
}

 interface Track {
    wrapperType:            WrapperTrackType;
    kind:                   Kind;
    artistId:               number;
    collectionId:           number;
    trackId:                number;
    artistName:             string;
    collectionName:         string;
    trackName:              string;
    collectionCensoredName: string;
    trackCensoredName:      string;
    artistViewUrl:          string;
    collectionViewUrl:      string;
    trackViewUrl:           string;
    previewUrl:             string;
    artworkUrl30:           string;
    artworkUrl60:           string;
    artworkUrl100:          string;
    collectionPrice:        number;
    trackPrice:             number;
    releaseDate:            Date;
    collectionExplicitness: Explicitness;
    trackExplicitness:      Explicitness;
    discCount:              number;
    discNumber:             number;
    trackCount:             number;
    trackNumber:            number;
    trackTimeMillis:        number;
    country:                string;
    currency:               string;
    primaryGenreName:       string;
    isStreamable:           boolean;
    contentAdvisoryRating?: ContentAdvisoryRating;
    collectionArtistId?:    number;
    collectionArtistName?:  string;
}

 enum Explicitness {
    Cleaned = "cleaned",
    Explicit = "explicit",
    NotExplicit = "notExplicit",
}

 enum ContentAdvisoryRating {
    Clean = "Clean",
    Explicit = "Explicit",
}

 enum Kind {
    Song = "song",
}

 enum WrapperTrackType {
    Track = "track",
}

 interface Album {
    wrapperType:            WrapperAlbumType;
    collectionType:         CollectionType;
    artistId:               number;
    collectionId:           number;
    amgArtistId?:           number;
    artistName:             string;
    collectionName:         string;
    collectionCensoredName: string;
    artistViewUrl:          string;
    collectionViewUrl:      string;
    artworkUrl60:           string;
    artworkUrl100:          string;
    collectionPrice?:       number;
    collectionExplicitness: CollectionExplicitness;
    trackCount:             number;
    copyright:              string;
    country:                string;
    currency:               string;
    releaseDate:            Date;
    primaryGenreName:       string;
    contentAdvisoryRating?: string;
}

 enum CollectionExplicitness {
    Explicit = "explicit",
    NotExplicit = "notExplicit",
}

 enum CollectionType {
    Album = "Album",
}

 enum WrapperAlbumType {
    Collection = "collection",
}
