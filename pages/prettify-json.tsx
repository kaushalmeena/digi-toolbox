import Head from "next/head";
import React, { FunctionComponent } from "react";
import PrettifyJSONPage from "../screens/Tools/JSON/PrettifyJSON";

const PrettifyJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Prettify JSON - Online JSON Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that prettifies JSON."
      />
    </Head>
    <PrettifyJSONPage />
  </>
);

export default PrettifyJSON;
