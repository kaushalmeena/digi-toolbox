import Head from "next/head";
import React, { FunctionComponent } from "react";
import HexToStringPage from "../screens/Tools/Text/HexToString";

const HexToString: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Convert Hex into Text Online</title>
      <meta
        key="description"
        name="description"
        content="Convert hex code to plain text easily."
      />
    </Head>
    <HexToStringPage />
  </>
);

export default HexToString;
