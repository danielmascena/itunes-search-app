import * as React from "react";
import renderer from "react-test-renderer";

import EndOfResults from "../index";

test("renders the EndOfResults component", () => {
  expect(renderer.create(<EndOfResults />).toJSON()).toMatchSnapshot();
});
