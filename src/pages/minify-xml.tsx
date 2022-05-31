import Head from "next/head";
import React from "react";
import MinifyXMLPage from "../screens/Tools/XML/MinifyXML";

function MinifyXML() {
  return (
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
}

export default MinifyXML;
