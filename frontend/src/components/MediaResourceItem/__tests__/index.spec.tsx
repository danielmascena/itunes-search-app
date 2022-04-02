import React from 'react';
import { render, screen } from '@testing-library/react';

import MediaResourceItem from "../index";

describe("MediaResourceItem Component", () => {

    it.todo("should render the markup");

    it("renders the song name", () => {
        render(<MediaResourceItem />);
        const linkElement = screen.getByText(/iron maiden/i);
        expect(linkElement).toBeInTheDocument();
    });
});