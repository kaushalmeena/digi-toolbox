import Head from "next/head";
import React, { FunctionComponent } from "react";
import HexToTextPage from "../screens/Tools/Text/HexToText";

const HexToText: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert Hexadecimal to Text - Online Text Tools</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for converting hexadecimal to text."
      />
    </Head>
    <HexToTextPage />
  </>
);

export default HexToText;
