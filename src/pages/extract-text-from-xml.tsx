import Head from "next/head";
import React from "react";
import ExtractTextFromXMLPage from "../screens/Tools/Text/ExtractTextFromXML";

function ExtractTextFromXML() {
  return (
    <>
      <Head>
        <title key="title">Extract Text from XML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for extracting text from XML."
        />
      </Head>
      <ExtractTextFromXMLPage />
    </>
  );
}

export default ExtractTextFromXML;
