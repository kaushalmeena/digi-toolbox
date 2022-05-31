import Head from "next/head";
import React from "react";
import PrettifyXMLPage from "../screens/Tools/XML/PrettifyXML";

function PrettifyXML() {
  return (
    <>
      <Head>
        <title key="title">Prettify XML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that prettifies XML."
        />
      </Head>
      <PrettifyXMLPage />
    </>
  );
}

export default PrettifyXML;
