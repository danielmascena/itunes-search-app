import React from "react";
import renderer from 'react-test-renderer';

import Header from "../index";

test("should renders the Header component", () => {
    expect(renderer.create(<Header />).toJSON()).toMatchSnapshot();
});