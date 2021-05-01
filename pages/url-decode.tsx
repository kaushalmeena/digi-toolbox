import Head from "next/head";
import React, { FunctionComponent } from "react";
import URLDecodePage from "../screens/Tools/Text/URLDecode";

const URLDecode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">URL-decode Text - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for URL-unescaping text."
      />
    </Head>
    <URLDecodePage />
  </>
);

export default URLDecode;
