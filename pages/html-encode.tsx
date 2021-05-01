import Head from "next/head";
import React, { FunctionComponent } from "react";
import HTMLEncodePage from "../screens/Tools/Text/HTMLEncode";

const HTMLEncode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">HTML-encode Text - Online Text Tools</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for HTML-encoding text."
      />
    </Head>
    <HTMLEncodePage />
  </>
);

export default HTMLEncode;
