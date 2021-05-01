import Head from "next/head";
import React, { FunctionComponent } from "react";
import URLEncodePage from "../screens/Tools/Text/URLEncode";

const URLEncode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">URL-encode Text - Online Text Tools</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for URL-escaping text."
      />
    </Head>
    <URLEncodePage />
  </>
);

export default URLEncode;
