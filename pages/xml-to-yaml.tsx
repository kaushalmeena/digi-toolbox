import Head from "next/head";
import React, { FunctionComponent } from "react";
import XMLToYAMLPage from "../screens/Tools/XML/XMLToYAML";

const XMLToYAML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert XML to YAML Online</title>
      <meta
        key="description"
        name="description"
        content="Convert XML to YAML online easily."
      />
    </Head>
    <XMLToYAMLPage />
  </>
);

export default XMLToYAML;
