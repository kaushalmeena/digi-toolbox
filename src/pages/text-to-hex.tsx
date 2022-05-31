import Head from "next/head";
import React from "react";
import TextToHexPage from "../screens/Tools/Text/TextToHex";

function TextToHex() {
  return (
    <>
      <Head>
        <title key="title">Convert Text to Hexadecimal - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for converting text to hexadecimal."
        />
      </Head>
      <TextToHexPage />
    </>
  );
}

export default TextToHex;
