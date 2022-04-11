import * as React from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { debounce } from "@mui/material";

import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import Layout from "../Templates/Layout";
import MediaSearchBox from "../../components/MediaSearchBox";
import MediaResourceList from "../../components/MediaResourceList";

import { defineSearchByTerm } from "../../store/actionCreators";

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const searchHandler = debounce(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(defineSearchByTerm(value.trim()));
    },
    500
  );

  return (
    <Layout>
      <Box component="h3" mt={1} sx={{ float: "left" }}>
        Music Search App
        <LibraryMusicIcon sx={{ fontSize: 25, color: red[500] }} />
      </Box>
      <section>
        <MediaSearchBox
          onSearch={searchHandler}
          placeholderText="Artists, songs, or albums"
        />
        <MediaResourceList />
      </section>
    </Layout>
  );
};

export default Home;
