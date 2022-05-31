import Head from "next/head";
import React from "react";
import Base64EncodePage from "../screens/Tools/Text/Base64Encode";

function Base64Encode() {
  return (
    <>
      <Head>
        <title key="title">Base64-encode Text - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for converting text to base64."
        />
      </Head>
      <Base64EncodePage />
    </>
  );
}

export default Base64Encode;
