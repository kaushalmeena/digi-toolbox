import Head from "next/head";
import React, { FunctionComponent } from "react";
import MinifyJSONPage from "../screens/Tools/JSON/MinifyJSON";

const MinifyJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Minify JSON - Online JSON Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that minifies JSON."
      />
    </Head>
    <MinifyJSONPage />
  </>
);

export default MinifyJSON;
