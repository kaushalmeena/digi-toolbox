import Head from "next/head";
import React, { FunctionComponent } from "react";
import MinifyJSONPage from "../screens/Tools/JSON/MinifyJSON";

const MinifyJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Minify/Uglify JSON Online</title>
      <meta
        key="description"
        name="description"
        content="Minify JSON online easily."
      />
    </Head>
    <MinifyJSONPage />
  </>
);

export default MinifyJSON;
