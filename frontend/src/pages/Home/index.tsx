import * as React from 'react';

import Layout from "../Templates/Layout";
import MediaSearchForm from "../../components/MediaSearchForm";
import MediaResourceList from "../../components/MediaResourceList";

const Home = () =>  (
  <Layout>
    <h3>Music Search App</h3>
    <section>
      <MediaSearchForm />
      <MediaResourceList />
    </section>
  </Layout>
);

export default Home;
