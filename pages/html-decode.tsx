import Head from "next/head";
import React, { FunctionComponent } from "react";
import HTMLDecodePage from "../screens/Tools/Text/HTMLDecode";

const HTMLDecode: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Decode HTML Code to String Online</title>
      <meta
        key="description"
        name="description"
        content="Convert html encoded text to plain text easily."
      />
    </Head>
    <HTMLDecodePage />
  </>
);

export default HTMLDecode;
