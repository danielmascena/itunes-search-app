import * as React from "react";
import renderer from 'react-test-renderer';

import ResultsNotFound from "../index";

test("should renders the ResultsNotFound component", () => {
    expect(renderer.create(<ResultsNotFound />).toJSON()).toMatchSnapshot();
});