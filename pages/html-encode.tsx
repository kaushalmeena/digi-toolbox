import Head from "next/head";
import React, { FunctionComponent } from "react";
import HTMLEncodePage from "../screens/Tools/Text/HTMLEncode";

const HTMLEncode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Encode HTML Code to String Online</title>
      <meta
        key="description"
        name="description"
        content="Convert string/text to html encoded text easily."
      />
    </Head>
    <HTMLEncodePage />
  </>
);

export default HTMLEncode;
