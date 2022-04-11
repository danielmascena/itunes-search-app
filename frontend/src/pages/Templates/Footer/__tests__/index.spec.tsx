import * as React from "react";
import renderer from "react-test-renderer";

import Footer from "../index";

test("renders the Footer component", () => {
  expect(renderer.create(<Footer />).toJSON()).toMatchSnapshot();
});
