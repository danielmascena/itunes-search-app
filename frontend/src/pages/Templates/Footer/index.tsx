import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const Footer = () => (
  <Box component="footer">
    <Box component="p">
      Copyright &#169;
      <Link
        href="https://github.com/danielmascena"
        title="author"
        underline="hover"
      >
        Daniel Mascena
      </Link>
    </Box>
  </Box>
);

export default React.memo(Footer);
