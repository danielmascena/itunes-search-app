
enum MediaType {
    Track = "track",
    Collection = "collection",
    Artist = "artist",
}

const shortUrl = (fullUrl: string, beginTerm = 'artist') => {
    const foundBeginIndex = fullUrl.indexOf(beginTerm),
        foundEndIndex = fullUrl.lastIndexOf('?');
    if (foundBeginIndex !== -1) {
        return fullUrl.slice(foundBeginIndex, foundEndIndex);
    }
    return fullUrl;
}

export const getMediaDescription = ({
    mediaType,
    primaryGenreName,
    artistName,
    collectionName = '',
    trackName = '',
    artistLinkUrl
}: Media) => {
    let primary = '',
        secondary = '';
    
    switch (mediaType) {
        case MediaType.Artist:
            primary = artistName;
            secondary = shortUrl(artistLinkUrl);
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
    return [primary, secondary, ` Artist genre: ${primaryGenreName}`];
};