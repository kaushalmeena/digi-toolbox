import Head from "next/head";
import React, { FunctionComponent } from "react";
import ExtractTextFromXMLPage from "../screens/Tools/Text/ExtractTextFromXML";

const ExtractTextFromXML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Extract Text Values from XML Online</title>
      <meta
        key="description"
        name="description"
        content="Extract text values from XML."
      />
    </Head>
    <ExtractTextFromXMLPage />
  </>
);

export default ExtractTextFromXML;
