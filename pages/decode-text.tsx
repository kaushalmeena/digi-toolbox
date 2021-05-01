import Head from "next/head";
import React, { FunctionComponent } from "react";
import DecodeTextPage from "../screens/Tools/Text/DecodeText";

const DecodeText: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Decode Text Code to String Online</title>
      <meta
        key="description"
        name="description"
        content="Convert Text encoded text to plain text easily."
      />
    </Head>
    <DecodeTextPage />
  </>
);

export default DecodeText;
