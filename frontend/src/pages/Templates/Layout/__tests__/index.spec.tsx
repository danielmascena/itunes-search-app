import React from "react";
import renderer from 'react-test-renderer';

import Layout from "../index";

test("should renders the Layout component", () => {
    expect(renderer.create(<Layout />).toJSON()).toMatchSnapshot();
});