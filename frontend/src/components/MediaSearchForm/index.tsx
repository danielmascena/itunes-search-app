import React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { debounce } from "@mui/material";
import TextField from "@mui/material/TextField";

import useFilter, { IFilterState, FilterAction } from "./useFilter";

const MediaSearchForm: React.FC = () => {
  const [filterState, filterDispatch] = useFilter();
  const { song, artist, album } = filterState;

  const inputHandler = debounce(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      console.log(value);
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
        onChange={inputHandler}
      />
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox />}
          label="All"
          onClick={() => filterDispatch({type: "filterAll"})}
          checked={song && album && artist}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Artist"
          onClick={() => filterDispatch({type: "filterArtist", payload: {name: "artist", value: !artist}})}
          checked={artist}
        />
        <FormControlLabel 
            control={<Checkbox />} 
            label="Song" 
            onClick={() => filterDispatch({type: "filterSong", payload: {name: "song", value: !song}})}
            checked={song} 
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Album"
          onClick={() => filterDispatch({type: "filterAlbum", payload: {name: "album", value: !album}})}
          checked={album}
        />
      </FormGroup>
    </Box>
  );
};

export default MediaSearchForm;
