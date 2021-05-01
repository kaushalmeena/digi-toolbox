import Head from "next/head";
import React, { FunctionComponent } from "react";
import JSONToYAMLPage from "../screens/Tools/JSON/JSONToYAML";

const JSONToYAML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert JSON to YAML - Online JSON Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts JSON to YAML."
      />
    </Head>
    <JSONToYAMLPage />
  </>
);

export default JSONToYAML;
