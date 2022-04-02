import React from "react";
import renderer from 'react-test-renderer';

import Footer from "../index";

test("should renders the Footer component", () => {
    expect(renderer.create(<Footer />).toJSON()).toMatchSnapshot();
});