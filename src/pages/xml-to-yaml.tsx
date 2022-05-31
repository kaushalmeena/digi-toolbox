import Head from "next/head";
import React from "react";
import XMLToYAMLPage from "../screens/Tools/XML/XMLToYAML";

function XMLToYAML() {
  return (
    <>
      <Head>
        <title key="title">Convert XML to YAML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts XML to YAML."
        />
      </Head>
      <XMLToYAMLPage />
    </>
  );
}

export default XMLToYAML;
