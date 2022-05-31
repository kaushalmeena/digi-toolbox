import Head from "next/head";
import React from "react";
import URLEncodePage from "../screens/Tools/Text/URLEncode";

function URLEncode() {
  return (
    <>
      <Head>
        <title key="title">URL-encode Text - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for URL-escaping text."
        />
      </Head>
      <URLEncodePage />
    </>
  );
}

export default URLEncode;
