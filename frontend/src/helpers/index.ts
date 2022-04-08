
enum MediaType {
    Track = "track",
    Collection = "collection",
    Artist = "artist",
}

export const getMediaDescription = ({
    mediaType,
    primaryGenreName,
    artistName,
    collectionName = '',
    trackName = '',
    artistLinkUrl
}: IMedia) => {
    let primary = '',
        secondary = '';
    
    switch (mediaType) {
        case MediaType.Artist:
            primary = artistName;
            secondary = artistLinkUrl;
            break;
        case MediaType.Collection:
            primary = collectionName;
            secondary = artistName;
            break;
        case MediaType.Track:
            primary = trackName;
            secondary = `${collectionName} - ${artistName}`;
            break;
        default:
            primary = secondary = 'Unknown';
    }
    return [primary, secondary, `Artist genre: ${primaryGenreName}`];
};