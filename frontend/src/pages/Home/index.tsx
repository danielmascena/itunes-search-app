import React from "react";

import Layout from "../Templates/Layout";
import MediaSearchForm from "../../components/MediaSearchForm";

const Home = () => {

    return (
        <Layout>
            <h1>iTunes Search App</h1>
            <section>
                <MediaSearchForm />
            </section>
        </Layout>
    )
}

export default Home;