enum MediaType {
  Track = "track",
  Collection = "collection",
  Artist = "artist",
}

export const removeQueriesAndDomainFromUrl = (
  fullUrl: string,
  beginTerm = "artist"
) => {
  const foundBeginIndex = fullUrl.indexOf(beginTerm),
    foundEndIndex = fullUrl.lastIndexOf("?");
  if (foundBeginIndex !== -1) {
    return fullUrl.slice(foundBeginIndex, foundEndIndex);
  }
  return fullUrl;
};

export const getFullMediaTitle = (
  primaryText: string,
  auxiliaryText: MediaType
) => `${primaryText} - ${auxiliaryText}`;

export const getMediaDescription = ({
  mediaType,
  primaryGenreName,
  artistName,
  collectionName = "",
  trackName = "",
  artistLinkUrl,
}: Media) => {
  let primary = "",
    secondary = "";

  switch (mediaType) {
    case MediaType.Artist:
      primary = getFullMediaTitle(artistName, mediaType);
      secondary = removeQueriesAndDomainFromUrl(artistLinkUrl);
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
      primary = secondary = "Unknown";
  }
  return [primary, secondary, ` Artist genre: ${primaryGenreName}`];
};

export const convertDataFromAPItoMediaType = (result) => {
  const {
    artistId,
    artistName,
    artistLinkUrl,
    primaryGenreName,
    collectionName,
    collectionId,
    artworkUrl100,
    trackName,
    trackId,
  } = result;
  switch (result.wrapperType) {
    case MediaType.Artist:
      return {
        mediaType: MediaType.Artist,
        artistId,
        artistName,
        artistLinkUrl,
        primaryGenreName,
      };
    case MediaType.Collection:
      return {
        mediaType: MediaType.Collection,
        artistId,
        artistName,
        artistLinkUrl,
        primaryGenreName,
        collectionName,
        collectionId,
        artworkUrl100,
      };
    case MediaType.Track:
      return {
        mediaType: MediaType.Track,
        artistId,
        artistName,
        artistLinkUrl,
        primaryGenreName,
        collectionName,
        collectionId,
        artworkUrl100,
        trackId,
        trackName,
      };
    default:
      return result;
  }
};
