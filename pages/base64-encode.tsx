import Head from "next/head";
import React, { FunctionComponent } from "react";
import Base64EncodePage from "../screens/Tools/Text/Base64Encode";

const Base64Encode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Encode Text to Base64 Converter Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text to base64 string easily."
      />
    </Head>
    <Base64EncodePage />
  </>
);

export default Base64Encode;
