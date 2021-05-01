import Head from "next/head";
import React, { FunctionComponent } from "react";
import XMLToJSONPage from "../screens/Tools/XML/XMLToJSON";

const XMLToJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert XML to JSON Online</title>
      <meta
        key="description"
        name="description"
        content="Convert XML to JSON online easily."
      />
    </Head>
    <XMLToJSONPage />
  </>
);

export default XMLToJSON;
