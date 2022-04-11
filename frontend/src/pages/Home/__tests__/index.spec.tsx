import * as React from "react";

import { render, screen, cleanup } from "../../../helpers/testUtils";
import { singleMockArtist } from "../../../helpers/mock-data";

import Home from "../index";

describe("Home Component", () => {
  afterEach(cleanup);

  it("renders with the a search term from the store", () => {
    render(<Home />, {
      initialState: {
        searchTerm: "Queen",
        mediaCollection: [singleMockArtist],
      },
    });
    expect(screen.getByText(/queen/i)).toBeInTheDocument();
  });
});
