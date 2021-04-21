import Head from "next/head";
import React, { FunctionComponent } from "react";
import UnstringifyJSONPage from "../screens/Tools/JSON/UnstringifyJSON";

const UnstringifyJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Unstringify JSON Online</title>
      <meta
        key="description"
        name="description"
        content="Online JSON Unstringify Text Easily."
      />
    </Head>
    <UnstringifyJSONPage />
  </>
);

export default UnstringifyJSON;
