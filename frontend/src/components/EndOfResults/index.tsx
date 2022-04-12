import * as React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const EndOfResults: React.FC = () => {
  const clickHandler = () => window.scroll(0, 0);
  return (
    <Box component="p" sx={{ textAlign: "center" }}>
      <Box component="span">End of the results. Jump to the top</Box>{" "}
      <IconButton
        color="primary"
        aria-label="Jump to the top"
        onClick={clickHandler}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(EndOfResults);
