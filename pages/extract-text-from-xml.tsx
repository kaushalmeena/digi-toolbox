import Head from "next/head";
import React, { FunctionComponent } from "react";
import ExtractTextFromXMLPage from "../screens/Tools/Text/ExtractTextFromXML";

const ExtractTextFromXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Extract Text from XML - Online Text Tools</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for extracting text from XML."
      />
    </Head>
    <ExtractTextFromXMLPage />
  </>
);

export default ExtractTextFromXML;
