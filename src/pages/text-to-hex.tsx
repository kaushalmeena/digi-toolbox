import Head from "next/head";
import React, { FunctionComponent } from "react";
import TextToHexPage from "../screens/Tools/Text/TextToHex";

const TextToHex: FunctionComponent = () => (
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

export default TextToHex;
