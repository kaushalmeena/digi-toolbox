import Head from "next/head";
import React, { FunctionComponent } from "react";
import XMLToYAMLPage from "../screens/Tools/XML/XMLToYAML";

const XMLToYAML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert XML to YAML - Online XML Tools</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts XML to YAML."
      />
    </Head>
    <XMLToYAMLPage />
  </>
);

export default XMLToYAML;
