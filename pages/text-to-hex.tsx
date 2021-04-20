import Head from "next/head";
import React, { FunctionComponent } from "react";
import TextToHexPage from "../screens/Tools/Text/TextToHex";

const TextToHex: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert Text to Hex Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text to hex code online."
      />
    </Head>
    <TextToHexPage />
  </>
);

export default TextToHex;
