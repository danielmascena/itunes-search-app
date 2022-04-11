import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentValue?: string;
  placeholderText?: string;
}

const defaultChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
  event.preventDefault();

const MediaSearchBox: React.FC<Props> = ({
  onSearch = defaultChangeHandler,
  currentValue = "",
  placeholderText = "Search",
}) => {
  const [querySearch, setQuerySearch] = React.useState(currentValue);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(event.target.value);
    onSearch(event);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        textAlign: "right",
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
        variant="outlined"
        value={querySearch}
        onChange={changeHandler}
        placeholder={placeholderText}
      />
    </Box>
  );
};

export default MediaSearchBox;
