import * as React from "react";

import Box from "@mui/material/Box";

const Header = () => (
  <Box component="header">
    <Box component="h5" mt={2}>
      iTunes Search API
    </Box>
  </Box>
);

export default React.memo(Header);
