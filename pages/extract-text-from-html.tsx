import Head from "next/head";
import React, { FunctionComponent } from "react";
import ExtractTextFromHTMLPage from "../screens/Tools/Text/ExtractTextFromHTML";

const ExtractTextFromHTML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Extract Text Values from HTML Online</title>
      <meta
        key="description"
        name="description"
        content="Extract text values from HTML."
      />
    </Head>
    <ExtractTextFromHTMLPage />
  </>
);

export default ExtractTextFromHTML;
