import Head from "next/head";
import React, { FunctionComponent } from "react";
import URLDecodePage from "../screens/Tools/Text/URLDecode";

const URLDecode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">URL Decoder Tool for URL Decoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert url encoded string to plain text easily."
      />
    </Head>
    <URLDecodePage />
  </>
);

export default URLDecode;
