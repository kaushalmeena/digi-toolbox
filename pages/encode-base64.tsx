import Head from "next/head";
import React, { FunctionComponent } from "react";
import EncodeBase64Page from "../screens/Tools/Text/EncodeBase64";

const EncodeBase64: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Encode Text to Base64 Converter Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text to base64 string easily."
      />
    </Head>
    <EncodeBase64Page />
  </>
);

export default EncodeBase64;
