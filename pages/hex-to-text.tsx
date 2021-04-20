import Head from "next/head";
import React, { FunctionComponent } from "react";
import HexToTextPage from "../screens/Tools/Text/HexToText";

const HexToText: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert Hex into Text Online</title>
      <meta
        key="description"
        name="description"
        content="Convert hex code to plain text easily."
      />
    </Head>
    <HexToTextPage />
  </>
);

export default HexToText;
