import * as React from "react";
import renderer from "react-test-renderer";

import Header from "../index";

test("renders the Header component", () => {
  expect(renderer.create(<Header />).toJSON()).toMatchSnapshot();
});
