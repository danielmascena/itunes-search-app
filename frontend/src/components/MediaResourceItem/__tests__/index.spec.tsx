import * as React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { singleMockArtist } from "../../../helpers/mock-data";

import MediaResourceItem from "../index";

describe("MediaResourceItem Component", () => {
  it("renders the MediaResourceItem component", () => {
    expect(
      renderer.create(<MediaResourceItem {...singleMockArtist} />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders the artist name", () => {
    render(<MediaResourceItem {...singleMockArtist} />);
    const listItem = screen.getByText(/iron maiden/i);
    expect(listItem).toBeInTheDocument();
  });
});
