import * as React from "react";
import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from 'uuid';

import MediaResourceItem from "../index";

jest.mock("uuidv4");
describe("MediaResourceItem Component", () => {

    it.todo("should render the markup");

    it("renders the song name", () => {
        const mockMedia = {
            artistName: "Iron Maiden",
            artworkUrl100: "",
            mediaType: "artist",
            artistId: uuidv4(),
            primaryGenreName: "metal"
        };

        render(<MediaResourceItem {...mockMedia} />);
        const linkElement = screen.getByText(/iron maiden/i);
        expect(linkElement).toBeInTheDocument();
    });
});