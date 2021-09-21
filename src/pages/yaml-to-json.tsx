import Head from "next/head";
import React, { FunctionComponent } from "react";
import YAMLToJSONPage from "../screens/Tools/YAML/YAMLToJSON";

const YAMLToJSON: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert YAML to JSON - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts YAML to JSON."
      />
    </Head>
    <YAMLToJSONPage />
  </>
);

export default YAMLToJSON;
