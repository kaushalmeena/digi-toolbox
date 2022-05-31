import Head from "next/head";
import React from "react";
import Base64DecodePage from "../screens/Tools/Text/Base64Decode";

function Base64Decode() {
  return (
    <>
      <Head>
        <title key="title">Base64-decode Text - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for converting base64 to text."
        />
      </Head>
      <Base64DecodePage />
    </>
  );
}

export default Base64Decode;
