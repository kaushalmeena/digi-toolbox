import Head from "next/head";
import React, { FunctionComponent } from "react";
import XMLToJSONPage from "../screens/Tools/XML/XMLToJSON";

const XMLToJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert XML to JSON - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts XML to JSON."
      />
    </Head>
    <XMLToJSONPage />
  </>
);

export default XMLToJSON;
