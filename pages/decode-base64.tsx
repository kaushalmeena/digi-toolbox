import Head from "next/head";
import React, { FunctionComponent } from "react";
import DecodeBase64Page from "../screens/Tools/Text/DecodeBase64";

const DecodeBase64: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Decode from Base64 to String Converter Online</title>
      <meta
        key="description"
        name="description"
        content="Convert base64 encoded text to plain text easily."
      />
    </Head>
    <DecodeBase64Page />
  </>
);

export default DecodeBase64;
