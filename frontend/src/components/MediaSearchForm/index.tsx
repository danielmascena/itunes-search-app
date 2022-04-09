import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Box from "@mui/material/Box";
import { debounce } from "@mui/material";
import TextField from "@mui/material/TextField";

import { defineSearchByTerm } from "../../store/actionCreators";

const MediaSearchForm: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const inputHandler = debounce(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(defineSearchByTerm(value));
    },
    500
  );

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="music-search"
        label="Search"
        type="search"
        variant="standard"
        placeholder="Artists, songs, or albums"
        onChange={inputHandler}
      />
    </Box>
  );
};

export default MediaSearchForm;
