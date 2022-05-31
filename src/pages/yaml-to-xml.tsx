import Head from "next/head";
import React from "react";
import YAMLToXMLPage from "../screens/Tools/YAML/YAMLToXML";

function YAMLToXML() {
  return (
    <>
      <Head>
        <title key="title">Convert YAML to XML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts YAML to XML."
        />
      </Head>
      <YAMLToXMLPage />
    </>
  );
}

export default YAMLToXML;
