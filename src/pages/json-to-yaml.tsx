import Head from "next/head";
import React from "react";
import JSONToYAMLPage from "../screens/Tools/JSON/JSONToYAML";

function JSONToYAML() {
  return (
    <>
      <Head>
        <title key="title">Convert JSON to YAML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts JSON to YAML."
        />
      </Head>
      <JSONToYAMLPage />
    </>
  );
}

export default JSONToYAML;
