import Head from "next/head";
import React, { FunctionComponent } from "react";
import YAMLToXMLPage from "../screens/Tools/YAML/YAMLToXML";

const YAMLToXML: FunctionComponent = () => (
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

export default YAMLToXML;
