import Head from "next/head";
import React, { FunctionComponent } from "react";
import Base64DecodePage from "../screens/Tools/Text/Base64Decode";

const Base64Decode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Decode from Base64 to String Converter Online</title>
      <meta
        key="description"
        name="description"
        content="Convert base64 encoded text to plain text easily."
      />
    </Head>
    <Base64DecodePage />
  </>
);

export default Base64Decode;
