import Head from "next/head";
import React, { FunctionComponent } from "react";
import URLEncodePage from "../screens/Tools/Text/URLEncode";

const URLEncode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">URL Encoder Tool for URL Encoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text/string to url encoded easily."
      />
    </Head>
    <URLEncodePage />
  </>
);

export default URLEncode;
