import Head from "next/head";
import React, { FunctionComponent } from "react";
import StringifyJSONPage from "../screens/Tools/JSON/StringifyJSON";

const StringifyJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Stringify JSON Online</title>
      <meta
        key="description"
        name="description"
        content="Online JSON Stringify Text Easily."
      />
    </Head>
    <StringifyJSONPage />
  </>
);

export default StringifyJSON;
