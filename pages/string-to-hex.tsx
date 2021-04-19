import Head from "next/head";
import React, { FunctionComponent } from "react";
import StringToHexPage from "../screens/Tools/Text/StringToHex";

const StringToHex: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert Text to Hex Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text to hex code online."
      />
    </Head>
    <StringToHexPage />
  </>
);

export default StringToHex;
