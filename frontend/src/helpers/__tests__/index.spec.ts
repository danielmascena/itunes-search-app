import {
  getMediaDescription,
  removeQueriesAndDomainFromUrl,
  convertDataFromAPItoMediaType,
} from "../index";

import { MOCK_RESOURCE_MEDIA } from "../../helpers/mock-data";

describe("Helper module testing for Track type", () => {
  const trackMockData: Track = MOCK_RESOURCE_MEDIA.results.find(
    (mock) => mock.wrapperType === "track"
  );
  const trackMediaConverted: Media =
    convertDataFromAPItoMediaType(trackMockData);

  it("convertDataFromAPItoMediaType should return the converted media mapped with the information from the API", () => {
    expect(trackMediaConverted.mediaType).toEqual(trackMockData.wrapperType);

    expect(trackMediaConverted).toHaveProperty("trackName");
  });

  it("getMediaDescription to return the correct information", () => {
    const [primary, secondary, additional] =
      getMediaDescription(trackMediaConverted);

    // verify the correct return from getFullMediaTitle called internally
    expect(primary).toBe(
      `${trackMockData.trackName} - ${trackMockData.wrapperType}`
    );

    expect(secondary).toBe(
      `${trackMockData.collectionName} - ${trackMockData.artistName}`
    );

    expect(additional).toBe(` Artist genre: ${trackMockData.primaryGenreName}`);
  });

  it("removeQueriesAndDomainFromUrl should shrink the url length", () => {
    const urlExample =
      "https://music.apple.com/us/artist/iron-maiden/546381?uo=4";
    const shortUrl = removeQueriesAndDomainFromUrl(urlExample);

    expect(shortUrl).not.toContain(
      urlExample.slice(7, 24) /*/music.apple.com/*/
    );
    expect(shortUrl).not.toContain(urlExample.slice(-5) /*?uo=4*/);
  });
});
