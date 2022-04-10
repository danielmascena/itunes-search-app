import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string
}

const MediaSearchBox: React.FC<Props> = (props) => (
  <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField
      id="search-textbox"
      name="search-textbox"
      inputProps={{ "data-testid": "search-textbox" }}
      label="Search"
      type="search"
      variant="standard"
      {...props}
    />
  </Box>
);

export default MediaSearchBox;
