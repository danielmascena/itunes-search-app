
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
};

export const getFullMediaTitle = (primaryText: string, auxiliaryText: MediaType) => `${primaryText} - ${auxiliaryText}`;

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
            primary = getFullMediaTitle(artistName, mediaType);
            secondary = shortUrl(artistLinkUrl);
            break;
        case MediaType.Collection:
            primary = getFullMediaTitle(collectionName, mediaType);
            secondary = artistName;
            break;
        case MediaType.Track:
            primary = getFullMediaTitle(trackName, mediaType);
            secondary = `${collectionName} - ${artistName}`;
            break;
        default:
            primary = secondary = 'Unknown';
    }
    return [primary, secondary, ` Artist genre: ${primaryGenreName}`];
};
