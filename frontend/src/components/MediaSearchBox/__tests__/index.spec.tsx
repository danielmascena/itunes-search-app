import * as React from "react";
import { render, fireEvent, screen, cleanup } from '@testing-library/react';

import MediaSearchBox from "../index";

describe("MediaSearchForm Component", () => {
    afterEach(() => {
        cleanup();
        jest.resetModules();
    });
    
    test("Search box fires the change event with the correct query", async () => {
        const changeHandler = jest.fn();
        const querySearch = "I am with the band";

        const { findByTestId } = render(<MediaSearchBox onChange={changeHandler} />);
        const searchTextbox = await findByTestId("search-textbox");

        fireEvent.change(searchTextbox, { target: { value: querySearch } });

        expect(changeHandler).toHaveBeenCalledWith(querySearch);
    });
});