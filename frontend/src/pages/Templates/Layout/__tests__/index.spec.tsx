import * as React from "react";
import renderer from "react-test-renderer";
import Box from "@mui/material/Box";

import Layout from "../index";

test("renders the Layout component", () => {
  expect(
    renderer
      .create(
        <Layout>
          <Box>Basic Layout</Box>
        </Layout>
      )
      .toJSON()
  ).toMatchSnapshot();
});
