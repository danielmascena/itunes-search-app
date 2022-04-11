import * as React from "react";
import { render, screen, cleanup } from "../../../helpers/testUtils";
import { singleMockArtist } from "../../../helpers/mock-data";

import MediaResourceList from "../index";

describe("MediaResourceList Component", () => {
  afterEach(cleanup);

  it("renders with the a search term from the store", () => {
    const artistTerm = "Motorhead";
    const listOfResults = [singleMockArtist];
    render(<MediaResourceList />, {
      initialState: {
        searchTerm: artistTerm,
        mediaCollection: listOfResults,
      },
    });
    expect(
      screen.getByText(
        `These are the result searching for ${artistTerm}. Found ${listOfResults.length} entries`
      )
    ).toBeInTheDocument();
  });
});
