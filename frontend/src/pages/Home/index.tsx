import * as React from 'react';

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { debounce } from "@mui/material";

import Layout from "../Templates/Layout";
import MediaSearchBox from "../../components/MediaSearchBox";
import MediaResourceList from "../../components/MediaResourceList";

import { defineSearchByTerm } from "../../store/actionCreators";

const Home = () => {

  const dispatch: Dispatch<any> = useDispatch();

  const changeHandler = debounce(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(defineSearchByTerm(value));
    },
    500
  );

  return (
    <Layout>
      <h3>Music Search App</h3>
      <section>
        <MediaSearchBox onChange={changeHandler} placeholder="Artists, songs, or albums" />
        <MediaResourceList />
      </section>
    </Layout>
  );
}

export default Home;
