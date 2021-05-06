import Head from "next/head";
import React, { FunctionComponent } from "react";
import MinifyXMLPage from "../screens/Tools/XML/MinifyXML";

const MinifyXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Minify XML - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that minifies XML."
      />
    </Head>
    <MinifyXMLPage />
  </>
);

export default MinifyXML;
