import Head from "next/head";
import React from "react";
import HexToTextPage from "../screens/Tools/Text/HexToText";

function HexToText() {
  return (
    <>
      <Head>
        <title key="title">Convert Hexadecimal to Text - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for converting hexadecimal to text."
        />
      </Head>
      <HexToTextPage />
    </>
  );
}

export default HexToText;
