import Head from "next/head";
import React, { FunctionComponent } from "react";
import DecodeURLPage from "../screens/Tools/Text/DecodeURL";

const DecodeURL: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">URL Decoder Tool for URL Decoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert url encoded string to plain text easily."
      />
    </Head>
    <DecodeURLPage />
  </>
);

export default DecodeURL;
