import Head from "next/head";
import React from "react";
import HTMLEncodePage from "../screens/Tools/Text/HTMLEncode";

function HTMLEncode() {
  return (
    <>
      <Head>
        <title key="title">HTML-encode Text - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for HTML-encoding text."
        />
      </Head>
      <HTMLEncodePage />
    </>
  );
}

export default HTMLEncode;
