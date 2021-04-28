import Head from "next/head";
import React, { FunctionComponent } from "react";
import PrettifyJSONPage from "../screens/Tools/JSON/PrettifyJSON";

const PrettifyJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Prettify JSON Online</title>
      <meta
        key="description"
        name="description"
        content="Prettify JSON online easily."
      />
    </Head>
    <PrettifyJSONPage />
  </>
);

export default PrettifyJSON;
