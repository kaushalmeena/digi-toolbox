import Head from "next/head";
import React, { FunctionComponent } from "react";
import JSONToYAMLPage from "../screens/Tools/JSON/JSONToYAML";

const JSONToYAML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert JSON to YAML Online</title>
      <meta
        key="description"
        name="description"
        content="Convert JSON to YAML online easily."
      />
    </Head>
    <JSONToYAMLPage />
  </>
);

export default JSONToYAML;
