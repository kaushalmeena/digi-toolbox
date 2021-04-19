import Head from "next/head";
import React, { FunctionComponent } from "react";
import EncodeURLPage from "../screens/Tools/Text/EncodeURL";

const EncodeURL: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">URL Encoder Tool for URL Encoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text/string to url encoded easily."
      />
    </Head>
    <EncodeURLPage />
  </>
);

export default EncodeURL;
