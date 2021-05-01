import Head from "next/head";
import React, { FunctionComponent } from "react";
import ExtractTextFromHTMLPage from "../screens/Tools/Text/ExtractTextFromHTML";

const ExtractTextFromHTML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Extract Text from HTML - Online Text Tools</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for extracting text from HTML."
      />
    </Head>
    <ExtractTextFromHTMLPage />
  </>
);

export default ExtractTextFromHTML;
