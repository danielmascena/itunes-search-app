import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import Layout from "../Templates/Layout";
import MediaSearchForm from "../../components/MediaSearchForm";
import MediaResourceList from "../../components/MediaResourceList";

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const resources: readonly IMedia[] = useSelector(
    (state: AppState) => state.mediaCollection,
    shallowEqual
  );

  React.useEffect(() => {
    //api.getMediaResourceArtistByTerm("iron maiden").then(console.log);
  }, []);
  return (
    <Layout>
      <h1>iTunes Search App</h1>
      <section>
        <MediaSearchForm />
        <MediaResourceList resources={[
          {"artistId": 886834, "artistName": "Ozzy Osbourne"}
        ]} />
      </section>
    </Layout>
  );
};

export default Home;
