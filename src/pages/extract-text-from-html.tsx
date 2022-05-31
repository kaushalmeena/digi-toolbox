import Head from "next/head";
import React from "react";
import ExtractTextFromHTMLPage from "../screens/Tools/Text/ExtractTextFromHTML";

function ExtractTextFromHTML() {
  return (
    <>
      <Head>
        <title key="title">Extract Text from HTML - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for extracting text from HTML."
        />
      </Head>
      <ExtractTextFromHTMLPage />
    </>
  );
}

export default ExtractTextFromHTML;
