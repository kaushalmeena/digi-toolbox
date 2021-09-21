import Head from "next/head";
import React, { FunctionComponent } from "react";
import HTMLDecodePage from "../screens/Tools/Text/HTMLDecode";

const HTMLDecode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">HTML-decode Text - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for HTML-decoding text."
      />
    </Head>
    <HTMLDecodePage />
  </>
);

export default HTMLDecode;
